import {  CandidateImage, CandidateContainer, CandidateInfo } from './styled'
import {  navigateUserdetail } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'


const CardCandidate = (props) => {
  const navigate = useNavigate()
    let list
    const goToUserDetail = (item) => {
      window.localStorage.setItem('candidate', JSON.stringify(item))
      navigateUserdetail(navigate,props.id,item.id)
    }
    props.candidates.length > 0 ?
    list = props.candidates.map((item) => {
      const data = item.name.split(',')
      return (
        <CandidateContainer key={item.id}>
          <CandidateImage image={data[1]}></CandidateImage>
          <CandidateInfo>
            <p>{data[0]}</p>

            {props.status==="candidate" && <button onClick={()=>goToUserDetail(item)}>ver mais</button>}
          </CandidateInfo>
        </CandidateContainer>
      )
    })
    :
    list = <p>Nenhum candidato</p>
    return list
}

export  default CardCandidate