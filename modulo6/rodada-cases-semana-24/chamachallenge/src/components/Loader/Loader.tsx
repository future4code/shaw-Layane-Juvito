import { LoaderContainer } from './style'
import Gif from '../../assets/loader.gif'


const Loader = () => {
    return (
        <LoaderContainer>
            <img src = {Gif} alt= {'Loader'} />
        </LoaderContainer>
    )
}

export default Loader