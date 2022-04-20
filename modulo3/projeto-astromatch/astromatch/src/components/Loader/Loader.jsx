import heartPulsing from '../../assets/giphy.gif'
import { LoaderContainer } from './style'


const Loader = () => {
    return (
        <LoaderContainer>
            <img src = {heartPulsing} alt= {'Coração pulsando'} />
        </LoaderContainer>
    )
}

export default Loader
