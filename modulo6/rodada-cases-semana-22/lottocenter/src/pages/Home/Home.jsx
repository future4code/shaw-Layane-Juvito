import { useEffect, useState } from "react"
import Logo from "../../components/logo/Logo"
import { GetRequest } from "../../requests/GetRequest"
import { ContestInfo, ContestInfoContainer, HomeContainer, LeftSide, LottoContainer, NumberContainer, NumberDiv, RightSide, Select } from "./style"
import moment from "moment"

const Home = () => {

    const [lotteries, setLotteries] = useState([])
    const [contests, setContests] = useState([])
    const [contest, setContest] = useState([])
    const [selectController, setSelectController] = useState('MEGA-SENA')
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

        contests.length>0 && GetRequest({
            endpoint: `concursos/${contests[0].concursoId}`,
            setData: setContest,
            setMessageError: setMessageError
        })
    }, [contests])

    useEffect(() => {

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

    const lotteriesOptions = lotteries.map((lottery, index) => {
        return (<option key={index} value={lottery.nome}>{lottery.nome.toUpperCase()}</option>)
    })

    const contestNumbers = contest.numeros && contest.numeros.map((number, index) => {
        return (
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
                >
                    {lotteriesOptions}
                </Select>
                <LottoContainer>
                    <Logo />
                    <p>{selectController.toUpperCase()}</p>
                </LottoContainer>
                <ContestInfoContainer>
                    <p>CONCURSO</p>
                    <ContestInfo>{contest.id}-{moment(contest.data).format('DD/MM/YYYY')}</ContestInfo>
                </ContestInfoContainer>


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