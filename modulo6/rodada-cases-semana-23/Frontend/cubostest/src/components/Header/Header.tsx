import { HeaderProps } from "../../interfaces/HeaderProps"
import { Button, Form, HeaderContainer, Input } from "./style"

const Header = (props: HeaderProps) => {

    const { form, onChange, onSubmit } = props

    return (
        <HeaderContainer>
            <Form onSubmit={onSubmit}>
                <Input
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    value={form.firstName}
                    onChange={onChange}
                />
                <Input
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    value={form.lastName}
                    onChange={onChange}
                />
                <Input
                    name="participation"
                    placeholder="Participation"
                    type="text"
                    value={form.participation}
                    onChange={onChange}
                    pattern={"^[1-9]$|^[1-9][0-9]$|^(100)$"}
                    title={'Valor inválido. Insira um número entre 1 e 100'}
                />
                <Button type="submit">
                    SEND
                </Button>
            </Form>
        </HeaderContainer>
    )
}

export default Header