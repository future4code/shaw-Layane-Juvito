import { useState } from 'react';
import { AppFormPageContainer, FormContainer, Input, Select } from './styled'


const CreateTripPage = () => {

  const [name, setName] = useState('')
  const [planet, setPlanet] = useState('')
  const [date, setdate] = useState('')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState('')
  const [durationInDays, setDurationInDays] = useState('')


 
  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onChangePlanet = (event) => {
    setPlanet(event.target.value)
  }
  const onChangeDate = (event) => {
    setdate(event.target.value)
  }
  const onChangeDescription = (event) => {
    setDescription(event.target.value)
  }
  const onChangePhoto = (event) => {
    setPhoto(event.target.value)
  }
  const onChangeDurationInDays = (event) => {
    setDurationInDays(event.target.value)
  }

  const onClickCreate = () => {
    const body = {
      "name": `${name},${photo}`,
      "planet": planet,
      "date": date,
      "description": description,
      "durationInDays": durationInDays
    }
  }

  return (
    <AppFormPageContainer>
      
      <FormContainer>
        <span>x</span>
        <label>Que tal uma nova aventura?</label>
        <Input placeholder={'Nome'} onChange={onChangeName} value={name} />
        <Input placeholder={'Planeta'} onChange={onChangePlanet} value={planet} />
        <Input placeholder={'Descrição'} onChange={onChangeDescription} value={description} />
        <Input placeholder={'Url da imagem'} onChange={onChangePhoto} value={photo} />
        <Input placeholder={'Data'} onChange={onChangeDate} value={date} />
        <Input placeholder={'Duração em dias'} onChange={onChangeDurationInDays} value={durationInDays}/>
    
      </FormContainer>
    </AppFormPageContainer>
  );
}
 
export default CreateTripPage;