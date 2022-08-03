import { FormProps } from "./FormProps";

export interface HeaderProps {
    form: FormProps,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: (event:any) => void
}