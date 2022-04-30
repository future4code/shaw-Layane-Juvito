import { useEffect, useState } from 'react'
import { AppFormPageContainer, FormContainer, Input, Select, Back, LoaderContainer } from './styled'
import useGet from '../../services/hooks/useGet'
import axios from 'axios'
import { postRequest } from '../../services/requests'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { navigateHome, navigateAdmin, navigateTrips } from '../../routes/coordinator'
import { TiArrowBack } from 'react-icons/ti'
import { useForm } from '../../services/hooks/useForm'
import Loader from '../../components/Loader/Loader'

const ApplicationFormPage = () => {

  const navigate = useNavigate()
  const params = useParams()
  const [countryData, setCountryData] = useState('')
  const [trip, setTrip] = useState(params.id)
  const [photo, setPhoto] = useState('')
  const { form, cleanFields, onChange } = useForm({
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: '',
  })
  const [loading, setLoading]= useState(false)

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then((res) => {
        setCountryData(res.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }, [])

  //pegando os paises e criando o array com as options do select
  const countryList = countryData && countryData.map((item) => {
    return item.name.common
  })
  const optionsCountry = countryList && countryList.sort().map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })

  // pegando as viagens e criando o array com as options do select
  const trips = useGet(`trips`)

  const options = trips.trips && trips.trips.map((trip) => {
    const data = trip.name.split(',')
    return <option value={trip.id} key={trip.id}>{data[0]}</option>
  })

  // funções de onchange do formulário

  const onChangePhoto = (event) => {
    setPhoto(event.target.value)
  }
  const onChangeTrip = (event) => {
    setTrip(event.target.value)
  }

  const onClickApply = (event) => {
    event.preventDefault()
    const body = { ...form, name: `${form.name},${photo}` }
    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    postRequest(`trips/${trip}/apply`, body, headers, 'Inscrição realizada com sucesso!', null, setLoading)
    cleanFields()
    setPhoto('')
    setTrip('')
  }
  return (
    <>

      <Header
        secondButton={
          {
            contentText: 'Área adminstrativa',
            function: navigateAdmin,
          }
        }
        firstButton={
          {
            contentText: 'Início',
            function: navigateHome,
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
            <Back>
              <span onClick={() => navigateTrips(navigate)}> <TiArrowBack /></span>
            </Back>

            <FormContainer onSubmit={onClickApply}>
              <h1>Increva-se para uma viagem</h1>
              <Select
                onChange={onChangeTrip}
                value={trip}
                required
              >
                <option value={''} disabled>Selecione uma Viagem</option>
                {options}
              </Select>
              <Input
                placeholder={'Nome'}
                onChange={onChange}
                value={form.name}
                name={'name'}
                required
                type={'text'}
                pattern={"^[a-zA-Z\u00C0-\u00FF\.,;: ]{3,}$"}
                title={"O nome dever no mínimo 3 caracteres"}
              />
              <Input
                placeholder={'Idade'}
                onChange={onChange}
                value={form.age}
                name={'age'}
                required
                type={'number'}
                min={18}
              />
              <Input
                placeholder={'Texto de Candidatura'}
                onChange={onChange}
                value={form.applicationText}
                name={'applicationText'}
                required
                type={'text'}
              />
              <Input
                placeholder={'Profissão'}
                onChange={onChange}
                value={form.profession}
                name={'profession'}
                required
                type={'text'}
                pattern={"^[a-zA-Z\u00C0-\u00FF\.,;:  ]{10,}$"}
                title={"Número mínimo de caracteres é 10"}
              />
              <Input
                placeholder={'Foto'}
                onChange={onChangePhoto}
                value={photo}
                type={'text'}
                required
              />
              <Select
                onChange={onChange}
                value={form.country}
                name={'country'}
                required
              >
                <option value={''} disabled>Selecione um país</option>
                {optionsCountry}
              </Select>
              <button>Inscrever</button>
            </FormContainer>
          </AppFormPageContainer>
      }
      <Footer />
    </>
  );
}

export default ApplicationFormPage;