import { AxiosInstance, AxiosRequestConfig } from 'axios'
import Audio from './api/audio'
import Bina from './api/bina'
import Central from './api/central'
import Chamada from './api/chamada'
import Composto from './api/composto'
import Conferencia from './api/conferencia'
import Conta from './api/conta'
import Did from './api/did'
import Fila from './api/fila'
import Perfil from './api/perfil'
import Sms from './api/sms'
import Status from './api/status'
import Tts from './api/tts'
import ValidaNumero from './api/validanumero'
import Verificacao from './api/verificacao'

export interface Response<T = any> {
  status: number
  sucesso: boolean
  motivo: number
  mensagem: string
  dados: T
}

export interface RelatorioResponse<T = any> extends Response<T> {
  dados: {
    relatorio: T[]
  }
}

export = Totalvoice
declare function Totalvoice(
  accessToken: string,
  baseUrl?: string,
  options?: AxiosRequestConfig
): void
declare class Totalvoice {
  constructor(accessToken: string, baseUrl?: string, options?: AxiosRequestConfig)
  httpClient: AxiosInstance
  get chamada(): Chamada
  get audio(): Audio
  get bina(): Bina
  get perfil(): Perfil
  get conta(): Conta
  get composto(): Composto
  get conferencia(): Conferencia
  get sms(): Sms
  get tts(): Tts
  get central(): Central
  get did(): Did
  get status(): Status
  get fila(): Fila
  get validanumero(): ValidaNumero
  get verificacao(): Verificacao
}
