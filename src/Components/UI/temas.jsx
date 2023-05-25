import {
  fundoClaro,
  textoFundoClaro,
  conteudoClaro,
  fundoEscuro,
  textoFundoEscuro,
  conteudoEscuro,
} from "./variaveis";

export const temaClaro = {
    body: fundoClaro,
    text: textoFundoClaro,
    inside: conteudoClaro,
    filter: ''
}

export const temaEscuro = {
    body: fundoEscuro,
    text: textoFundoEscuro,
    inside: conteudoEscuro,
    filter: 'invert(100%)'
}