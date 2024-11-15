import { ConversaoZigZag } from "./ConversorZigZag";

describe("Testes sobre o algoritmo de Zigzag", () => {
  it("deve converter corretamente uma string utilizando 3 linhas", () => {
    const str = "PAYPALISHIRING";
    const resultadoEsperado = "PAHNAPLSIIGYIR";

    const conversor = new ConversaoZigZag();
    const resposta = conversor.converter(str, 3);
    expect(resposta).toBe(resultadoEsperado);
  });

  it("deve converter corretamente uma string utilizando 4 linhas", () => {
    const str = "PAYPALISHIRING";
    const resultadoEsperado = "PINALSIGYAHRPI";

    const conversor = new ConversaoZigZag();
    const resposta = conversor.converter(str, 4);
    expect(resposta).toBe(resultadoEsperado);
  });
});
