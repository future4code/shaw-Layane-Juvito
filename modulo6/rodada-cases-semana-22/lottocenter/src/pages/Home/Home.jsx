import { useEffect, useState } from "react"
import Logo from "../../components/logo/Logo"
import { GetRequest } from "../../requests/GetRequest"
import { ContestInfo, ContestInfoContainer, HomeContainer, LeftSide, LottoContainer, NumberContainer, NumberDiv, RightSide, Select } from "./style"
import moment from "moment"

const Home = () => {

    const [lotteries, setLotteries] = useState([])
    const [contests, setContests] = useState([])
    const [contest, setContest] = useState([])
    const [selectController, setSelectController] = useState('LottoCenter')
    const [messageError, setMessageError] = useState("")

    useEffect(() => {
        GetRequest({
            endpoint: "loterias",
            setData: setLotteries,
            setMessageError: setMessageError
        })

        GetRequest({
            endpoint: "loterias-concursos",
            setData: setContests,
            setMessageError: setMessageError
        })
    }, [])

    useEffect(() => {

        if(selectController === 'LottoCenter'){
            setContest({})
        }
        const currentLottery = lotteries.find((lottery) => lottery.nome === selectController)
        const current = currentLottery && contests.find((contest) => contest.loteriaId === currentLottery.id)
        
        current && GetRequest({
            endpoint: `concursos/${current.concursoId}`,
            setData: setContest,
            setMessageError: setMessageError
        })

    }, [selectController])


    const handleSelect = (event) => {
        setSelectController(event.target.value)
    }

    const lotteriesOptions = lotteries.map((lottery,index) => {
        return (<option key={index} value={lottery.nome}>{lottery.nome.toUpperCase()}</option>)
    })

    const contestNumbers = contest.numeros && contest.numeros.map((number,index) => {
        return(
            <NumberDiv key={index}>{number}</NumberDiv>
        )
    })
    return (
        <HomeContainer
            lotto={selectController.toUpperCase()}
        >
            <LeftSide>
                <Select
                    onChange={handleSelect}
                >   <option value={'LottoCenter'}>Selecione uma loteria</option>
                    {lotteriesOptions}
                </Select>
                <LottoContainer>
                    <Logo />
                   <p>{selectController.toUpperCase()}</p> 
                </LottoContainer>
                {
                    contest.id ?
                    <ContestInfoContainer>
                        <p>CONCURSO</p>
                        <ContestInfo>{contest.id}-{moment(contest.data).format('DD/MM/YYYY')}</ContestInfo>
                    </ContestInfoContainer>
                    :
                    <ContestInfoContainer>
                        <p>
                            Acompanhe o resultado das melhores loterias aqui.
                        </p>
                    </ContestInfoContainer>
                }

            </LeftSide>

            <RightSide>
                <NumberContainer>
                    {contestNumbers}
                </NumberContainer>
            </RightSide>
        </HomeContainer>
    )
}

export default Home