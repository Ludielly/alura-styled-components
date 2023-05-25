import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'
import {IconeTema} from './UI'

export default (types) => {
    const Imagens = {
        Restaurante: <IconeTema src={alimentacao} alt='Restaurante'/>,
        Utilidades: <IconeTema src={utilidades} alt='Utilidades'/>,
        Saude: <IconeTema src={saude} alt='Saude'/>,
        Transporte: <IconeTema src={transporte} alt='Transporte'/>,
        default: <IconeTema src={outros} alt='Outro'/>
    }

    return Imagens[types] || Imagens.default
}