import { useState } from 'react'
import { AppFormPageContainer, FormContainer, Input, Select } from './styled'
import useGet from '../../services/hooks/useGet'

const ApplicationFormPage = () => {
  const [trip, setTrip] = useState('')
  const [name, setName] = useState('')
  const [age, setAgee] = useState('')
  const [applicationText, setApplicationText] = useState('')
  const [profession, setProfession] = useState('')
  const [photo, setPhoto] = useState('')
  const [country, setCountry] = useState('')

  const trips = useGet(`trips`)

  const onChangeTrip = (event) => {
    setTrip(event.target.value)
  }
  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onChangeAge = (event) => {
    setAgee(event.target.value)
  }
  const onChangeApllicationText = (event) => {
    setApplicationText(event.target.value)
  }
  const onChangeProfession = (event) => {
    setProfession(event.target.value)
  }
  const onChangePhoto = (event) => {
    setPhoto(event.target.value)
  }
  const onChangeCountry = (event) => {
    setCountry(event.target.value)
  }
  const options = trips.trips && trips.trips.map((trip) => {
    const data = trip.name.split(',')
    return <option value={trip.id}>{data[0]}</option>
  })
  return (
    <AppFormPageContainer>
      
      <FormContainer>
        <span>x</span>
        <label>Increva-se para uma viagem</label>
        <Select onChange={onChangeTrip} value={trip}>
          <option value = {''}>Selecione uma Viagem</option>
          {options}
        </Select>
        <Input placeholder={'Nome'} onChange={onChangeName} value={name} />
        <Input placeholder={'Idade'} onChange={onChangeAge} value={age} />
        <Input placeholder={'Texto de Candidatura'} onChange={onChangeApllicationText} value={applicationText} />
        <Input placeholder={'Profissão'} onChange={onChangeProfession} value={profession} />
        <Input placeholder={'Foto'} onChange={onChangePhoto} value={photo} />
        <Select onChange={onChangeCountry} value={country}>
        </Select>
      </FormContainer>
    </AppFormPageContainer>
  );
}

export default ApplicationFormPage;