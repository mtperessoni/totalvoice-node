import { AxiosInstance } from 'axios'

export = Fila
/**
 * Módulo FILA
 * @param {object} httpClient
 */
declare function Fila(httpClient: AxiosInstance): void
declare class Fila {
  /**
   * Módulo FILA
   * @param {object} httpClient
   */
  constructor(httpClient: AxiosInstance)
  /**
   * Lista as filas da sua Conta
   * @return {Promise}
   */
  listar: () => Promise<any>
  /**
   * Cria uma nova fila
   * @param {string} nome
   * @param {string} estrategia_ring
   * @param {object} timeout_ring
   * @return {Promise}
   */
  enviar: (nome: string, estrategia_ring: string, timeout_ring?: number) => Promise<any>
  /**
   * Adiciona um ramal na fila
   * @param {string} id
   * @param {string} ramal_id
   * @return {Promise}
   */
  addRamal: (id: string, ramal_id: string) => Promise<any>
  /**
   * Busca uma fila pelo seu id
   * @param {int} id
   * @return {Promise}
   */
  buscar: (id: string) => Promise<any>
  /**
   * Busca um ramal da fila pelo seu id
   * @param {int} id
   * @return {Promise}
   */
  buscarRamalFila: (id: string, ramal_id: string) => Promise<any>
  /**
   * Atualiza uma fila
   * @param {int} id
   * @param {object} data
   * @return {Promise}
   */
  atualizarFila: (
    id: string,
    data: {
      estrategia_ring?: 'Distribuidor' | 'DistribuidorParalelo' | 'Multiplo'
      timeout_ring?: string
    }
  ) => Promise<any>
  /**
   * Remove um Ramal da fila
   * @param {int} id
   * @return {Promise}
   */
  excluirRamalFila: (id: string, ramal_id: string) => Promise<any>
}
