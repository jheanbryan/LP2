/**
 * Classe que implementa um array de números positivos
 */
export class PositiveArray {
  private _values: number[]

  constructor() {
    this._values = []
  }

  /**
   * Adiciona um novo elemento ao array, desde que este seja positivo.
   * @param element O novo elemento a ser adicionado
   */
  add(element: number) {
    if (element > 0) {
      this._values.push(element)
    }
  }

  /**
   * Remove um elemento pelo seu índice, desde que o índice seja válido
   * @param index Índice do elemento a ser removido
   * @returns O elemento removido; undefined c.c.
   */
  remove(index: number) {
    if (index > -1 && index < this._values.length) {
      const removed = this._values[index]
      this._values = [
        ...this._values.slice(0, index),
        ...this._values.slice(index + 1),
      ]

      return removed
    }

    return undefined
  }

  /**
   * Retorna os valores do array
   */
  get values() {
    return this._values
  }
}
