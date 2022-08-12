import { HeaderHistoryProps } from "../../interfaces/HeaderHistoryProps"
import { CleanButton, DeleteButton, HeaderContainer, Option, Select } from "./style"
import { AiOutlineClear } from 'react-icons/ai'
import { MdPersonSearch } from 'react-icons/md'
import { useNavigate } from "react-router-dom"

const HeaderHistory = (props: HeaderHistoryProps) => {

    const { goBack, deleteHistory, onChange, search, options } = props
    const navigate = useNavigate()

    const renderOptions = options.map((option: string, index: number) => {
        return (
            <Option key={index} value={option}>{option}</Option>
        )
    })

    const goToSearchPage = () => {
        goBack()
        navigate('/')
    }
    return (

        <HeaderContainer>
            <Select value={search} onChange={onChange}>
                <Option value={''}>Histórico</Option>
                {renderOptions}
            </Select>
            <CleanButton onClick={goToSearchPage}>
                <MdPersonSearch />
            </CleanButton>
            <DeleteButton onClick={deleteHistory}>
                <AiOutlineClear />
            </DeleteButton>


        </HeaderContainer>

    )
}

export default HeaderHistory