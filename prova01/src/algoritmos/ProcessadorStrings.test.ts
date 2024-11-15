import { ProcessadorStrings } from "./ProcessadorStrings";

describe("Testes sobre os algoritmos da classe ProcessadorStrings", () => {
  it("deve calcular corretamente o tamanho da substring mais longa sem repetição de caracteres de uma string", () => {
    const entrada1 = "abcabcbb";
    const entrada2 = "bbbbb";
    const entrada3 = "pwwkew";
    const saidaEsperada1 = 3;
    const saidaEsperada2 = 1;
    const saidaEsperada3 = 3;

    const processador = new ProcessadorStrings();

    let resposta = processador.calcularTamanhoDaSubstringMaisLonga(entrada1);
    expect(resposta).toBe(saidaEsperada1);

    resposta = processador.calcularTamanhoDaSubstringMaisLonga(entrada2);
    expect(resposta).toBe(saidaEsperada2);

    resposta = processador.calcularTamanhoDaSubstringMaisLonga(entrada3);
    expect(resposta).toBe(saidaEsperada3);
  });

  it("deve encontrar corretamente a substring palíndromica mais longa de uma string", () => {
    const entrada1 = "babad";
    const saidaEsperada1 = "bab";
    const entrada2 = "cbbd";
    const saidaEsperada2 = "bb";

    const processador = new ProcessadorStrings();

    let resposta =
      processador.encontrarSubstringPalindromicaMaisLonga(entrada1);
    expect(resposta).toBe(saidaEsperada1);

    resposta = processador.encontrarSubstringPalindromicaMaisLonga(entrada2);
    expect(resposta).toBe(saidaEsperada2);
  });
});
