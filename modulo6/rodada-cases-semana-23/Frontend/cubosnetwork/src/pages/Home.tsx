import { useEffect, useState } from "react"
import { VictoryPie } from "victory"
import Header from "../components/Header/Header"
import { useForm } from "../hooks/useForm"
import { GetFormDTO } from "../interfaces/GetFormDTO"
import { deleteRequest, getRequest, postRequest } from "../request/requests"
import { Container, GraphicContainer, IndexColumn, Legend, LegendContainer, Legendtext, MainContainer, NameColumn, ParticipationColumn, ResetButton, Square, Table, Title, TitleContainer } from "./style"
import { ToastContainer, toast } from 'react-toastify'
import { GrUpdate } from 'react-icons/gr'
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

    const { form, onChange, cleanFields } = useForm({
        firstName: '',
        lastName: '',
        participation: ''
    })

    const [formData, setFormData] = useState<GetFormDTO[]>([])
    const [randomColor, setRandomColor] = useState<string[]>([])
    const [reload, setReload] = useState(false)

    const notify = (error: string) => toast.error(error)

    useEffect(() => {
        getRequest('form', setFormData, notify)
    }, [reload])

    useEffect(() => {
        const colors: string[] = formData.map(() => {
            const color = Math.random().toString(16).substring(2, 8)
            return `#${color}`
        })
        setRandomColor(colors)
    }, [formData])

    const onSubmit = (event: any) => {
        event.preventDefault()
        const body = { ...form, participation: Number(form.participation) }
        postRequest('form', body, setReload, reload, notify)
        cleanFields()
    }

    const reset = () => {
        deleteRequest('form', setReload, reload, notify)
    }

    const tableRows = formData.map((data: GetFormDTO, index: number) => {
        return (
            <tbody key={data.id}>
                <tr>
                    <td>{index + 1}</td>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.participation}%</td>
                </tr>
            </tbody>
        )
    })

    const graphicInfo = formData.map((data: GetFormDTO) => {
        return { x: ' ', y: data.participation }
    })

    const graphicLegend = formData.map((data: GetFormDTO, index: number) => {
        return (
            <Legend key={index}>
                <Square color={randomColor[index]}></Square>
                <Legendtext color={randomColor[index]}>{data.firstName} {data.lastName}</Legendtext>
            </Legend>
        )
    })

    return (
        <>
            <Header
                form={form}
                onChange={onChange}
                onSubmit={onSubmit}
            />
            <TitleContainer>
                <Title> DATA </Title>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </TitleContainer>
            {
                formData.length === 0 ?
                    <></>
                    :
                    <MainContainer>
                        <Table>
                            <thead>
                                <tr>
                                    <IndexColumn>
                                        <ResetButton onClick={reset}>
                                            <GrUpdate />
                                            <span>Reset</span>
                                        </ResetButton>
                                    </IndexColumn>
                                    <NameColumn>First Name</NameColumn>
                                    <NameColumn>Last Name</NameColumn>
                                    <ParticipationColumn>Participation</ParticipationColumn>
                                </tr>
                            </thead>
                            {tableRows}
                        </Table>

                        <GraphicContainer>
                            <Container>
                                <VictoryPie
                                    innerRadius={75}
                                    labelPlacement={"parallel"}
                                    labelRadius={45}
                                    padAngle={2}
                                    data={graphicInfo}
                                    colorScale={randomColor}
                                />
                            </Container>
                            <LegendContainer>
                                {graphicLegend}
                            </LegendContainer>
                        </GraphicContainer>
                    </MainContainer>
            }

            <ToastContainer
                autoClose={7000}
                theme={"dark"}
                position={"bottom-center"}
            />
        </>
    )
}