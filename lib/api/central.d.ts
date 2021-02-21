import { AxiosInstance } from 'axios'

export = Central
/**
 * Módulo Central
 * @param {object} httpClient
 */
declare function Central(httpClient: AxiosInstance): void
declare class Central {
  /**
   * Módulo Central
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Cria um novo ramal
   * @param {object} data
   * @return {Promise}
   */
  criarRamal: (data: object) => Promise<any>
  /**
   * Remove um Ramal
   * @param {int} id
   * @return {Promise}
   */
  excluirRamal: (id: string) => Promise<any>
  /**
   * Busca uma Ramal pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  buscaRamal: (id: string) => Promise<any>
  /**
   * Atualiza um ramal
   * @param {int} id
   * @param {object} data
   * @return {Promise}
   */
  atualizarRamal: (id: string, data: object) => Promise<any>
  /**
   * Relatório de mensagens de Ramal
   * @return {Promise}
   */
  relatorio: () => Promise<any>
  /**
   * Listar pausas do ramal
   * @param {int} id
   * @return {Promise}
   */
  relatorioPausas: (id: string) => Promise<any>
  /**
   * Listar pausas do ramal
   * @param {int} ramal
   * @return {Promise}
   */
  atualizarRamalFila: (id: string, data: any) => Promise<any>
  /**
   * Requisita a URL do webphone de um ramal
   * @param {array} data
   * @return {Promise}
   */
  webphone: (data: any[]) => Promise<any>
  /**
   * Cria uma nova URA
   * @param {string} nome
   * @param {array} dados
   * @return {Promise}
   */
  criarUra: (nome: string, dados: any[]) => Promise<any>
  /**
   * Remove uma Ura
   * @param {int} id
   * @return {Promise}
   */
  excluirUra: (id: string) => Promise<any>
  /**
   * Busca uma Ura pelo seu ID
   * @param {int} id
   * @return {Promise}
   */
  buscaUra: (id: string) => Promise<any>
  /**
   * Atualiza uma ura
   * @param {id} id
   * @param {string} nome
   * @param {array} dados
   * @return {Promise}
   */
  atualizarUra: (id: string, nome: string, dados: any[]) => Promise<any>
  /**
   * Retorna a sua lista de URAs e suas estruturas
   * @return {Promise}
   */
  relatorioUra: () => Promise<any>
}
