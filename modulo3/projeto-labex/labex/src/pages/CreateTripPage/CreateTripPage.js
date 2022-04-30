import { useState } from 'react'
import { AppFormPageContainer, FormContainer, Input, BackButton, LoaderContainer } from './styled'
import { postRequest } from '../../services/requests'
import { useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../../services/hooks/useProtectedPage'
import { useForm } from '../../services/hooks/useForm'
import Header from '../../components/Header/Header'
import { navigateHome, navigateAdmin } from '../../routes/coordinator'
import Footer from '../../components/Footer/Footer'
import { TiArrowBack } from 'react-icons/ti'
import Loader from '../../components/Loader/Loader'

const CreateTripPage = () => {
  const [logOut, setLogOut] = useState(false)
  useProtectedPage(logOut)

  const navigate = useNavigate()

  const [photo, setPhoto] = useState('')
  const [loading, setLoading] = useState(false)

  const { form, onChange, cleanFields } = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: ''
  })
  let today = new Date().toISOString().split("T")[0];
  const handleDateFocus = (event) => {
    event.target.type = "date"
  }
  const handleDateBlur = (event) => {
    event.target.type = "text"
  }

  const logout = () => {
    window.localStorage.clear('token')
    setLogOut(true)
  }

  const onClickCreate = (event) => {
    event.preventDefault()
    const token = window.localStorage.getItem("token")
    const headers = {
      headers: {
        auth: token
      }
    }
    const body = { ...form, name: `${form.name},${photo}` }

    postRequest('trips', body, headers, 'Viagem criada!', null, setLoading)

    setPhoto('')
    cleanFields()
  }
  return (
    <>
      <Header
        firstButton={
          {
            contentText: 'Início',
            function: navigateHome,
          }
        }
        secondButton={
          {
            contentText: 'Sair',
            function: logout,
          }
        }
      />
      {
        loading ?
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
          :
          <AppFormPageContainer>

            <BackButton>
              <span onClick={() => { navigateAdmin(navigate) }}><TiArrowBack /></span>
            </BackButton>

            <FormContainer onSubmit={onClickCreate}>
              <h1>Que tal uma nova aventura?</h1>
              <Input
                placeholder={'Nome'}
                onChange={onChange}
                value={form.name}
                name={'name'}
                type={'text'}
                required
                pattern={"^[a-zA-Z\u00C0-\u00FF\.,;:  ]{5,}$"}
                title={'O nome deve conter no mínimo 5 caracters'}
              />
              <Input
                placeholder={'Planeta'}
                onChange={onChange}
                value={form.planet}
                name={'planet'}
                type={'text'}
                required
              />
              <Input
                placeholder={'Descrição'}
                onChange={onChange}
                value={form.description}
                name={'description'}
                type={'text'}
                required
                pattern={"^[a-zA-Z\u00C0-\u00FF\.,;:  ]{30,}$"} // n aceita sinais de pontuação
                title={'A descrição deve conter no mínimo 30 caracters'}
              />
              <Input
                placeholder={'Url da imagem'}
                onChange={(event) => setPhoto(event.target.value)}
                value={photo}
                name={'photo'}
                type={'text'}
                required
              />
              <Input
                placeholder={'Data'}
                onChange={onChange}
                value={form.date}
                name={'date'}
                type={'text'}
                min={today}
                onFocus={handleDateFocus}
                onBlur={handleDateBlur}
                required
              />
              <Input
                placeholder={'Duração em dias'}
                onChange={onChange}
                value={form.durationInDays}
                name={'durationInDays'}
                type={'number'}
                required
                min={50}
              />
              <button>Criar</button>

            </FormContainer>
          </AppFormPageContainer>
      }
      <Footer />
    </>
  );
}

export default CreateTripPage;