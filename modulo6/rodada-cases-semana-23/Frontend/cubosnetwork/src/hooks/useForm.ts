import { useState } from 'react';
import { FormProps } from '../interfaces/FormProps';

export const useForm = (initialState: FormProps) => {

    const [form, setForm] = useState(initialState)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const cleanFields = () => {
        setForm(initialState)
    }

    return { form, onChange, cleanFields }

}