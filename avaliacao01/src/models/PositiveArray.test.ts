import { PositiveArray } from "./PositiveArray";

let array: PositiveArray;

//suíte de destes com funcao describe
describe('Tests over bank account use cases', () => {
  beforeEach(() => {
      array = new PositiveArray();
  });

  //pegar valor do array vazio
  it("should array value is empty", () => {
     const valuesArray = array.values;
     expect(valuesArray).toEqual([]);
  });

  //adicionar algum valor no array e ver o array
  it("should  array value is not empty", () => {
    const newValue  = 10;
    array.add(newValue);
    const arrayValues = array.values;
    expect([10]).toEqual(arrayValues);
  });

  //adicionar um valor positivo, remover e esperar  que o array retorne vazio
  it("should array value is empty after remove item", () => {
    const value = 15;
    array.add(value);
    array.remove(0);
    expect(array.values).toEqual([]);
  });

    //adicionar um valor positivo, remover e esperar  que o array retorne vazio
    it("should user try remove undefined value", () => {
      const value = -12;
      array.add(value);
      array.remove(0);
      expect(array.values).toEqual([]);
    });

    //adicionar valor negativo no array
    it("should array value is not empty after add negative value", () => {
      const value = -20;
      array.add(value);
      expect(array.values).toEqual([])
    });

    //tentar buscar um array de um index que nao existe
    it("should search array value in index that not exist", () => {
      const value = 50;
      array.add(value);
      expect(array.values[5]).toEqual(undefined)
    });
});