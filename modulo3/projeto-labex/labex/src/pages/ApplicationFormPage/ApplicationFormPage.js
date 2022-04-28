import { useEffect, useState } from 'react'
import { AppFormPageContainer, FormContainer, Input, Select, Back } from './styled'
import useGet from '../../services/hooks/useGet'
import axios from 'axios'
import { postRequest } from '../../services/requests'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { navigateHome, navigateAdmin } from '../../routes/coordinator'
import { TiArrowBack } from 'react-icons/ti'
import {useForm} from '../../services/hooks/useForm'

const ApplicationFormPage = () => {

  const navigate = useNavigate()

  const [countryData, setCountryData] = useState('')
  const [trip, setTrip] = useState('')
  const [photo, setPhoto] = useState('')
  const {form, cleanFields, onChange} = useForm({
  name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: '',
  })

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
    postRequest(`trips/${trip}/apply`, body, headers, 'aplicou')
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
      <AppFormPageContainer>
        <Back>
          <span onClick={() => navigate(-1)}> <TiArrowBack /></span>
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
          />
          <Input
            placeholder={'Idade'}
            onChange={onChange}
            value={form.age}
            name={'age'}
            required
            type={'number'}
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
          />
          <Input
            placeholder={'Foto'}
            onChange={onChangePhoto}
            value={photo}
            required
            type={'text'}
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

      <Footer />
    </>
  );
}

export default ApplicationFormPage;