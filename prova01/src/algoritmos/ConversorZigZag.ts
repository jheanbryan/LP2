/**
 * A string "PAYPALISHIRING" é escrita em um padrão em zigzag em um dado
 * número de linhas da seguinte forma:
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * Se lermos linha após linha, a string resultante seria: PAHNAPLSIIGYIR
 *
 * Implemente o método "converter" de tal forma que ele receba a string a
 * ser convertida e o número de linhas e então retorne a string resultante:
 *
 * Exemplo 1:
 *
 * Entrada: str = "PAYPALISHIRING", numeroLinhas = 3
 * Saída: "PAHNAPLSIIGYIR"
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * Exemplo 2:
 *
 * Entrada: str = "PAYPALISHIRING", numeroLinhas = 4
 * Saída: "PINALSIGYAHRPI"
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 *
 * Regras:
 *
 * * 1 <= str.length <= 1000
 * * str consiste de letras do alfabeto da língua portuguesa (maiúsculas e
 * * minúsculas), ',' e '.'.
 * * 1 <= numeroLinhas <= 1000
 */
export class ConversaoZigZag {
  converter(str: string, numeroLinhas: number): string {

    //retorna a propria string
    if (numeroLinhas === 1) {
      return str;

    } else {

      //cria o array com o numero de linhas 
      const linhas: string[] = [];
      for (let i = 0; i < numeroLinhas; i++) {
        linhas.push("");
      }
    
      let linhaAtual = 0;
      let descendo = true;
    
      //preecnhe cada linha 
      for (let i = 0; i < str.length; i++) {
        linhas[linhaAtual] += str[i];
    
        //se chegou no final sobe, se nao continua ate o fim
        if (linhaAtual === numeroLinhas - 1)
          descendo = false;
        else if (linhaAtual === 0)
          descendo = true;
        
        linhaAtual += descendo ? 1 : -1;
      }
    
      return linhas.join("");
    }
  }
  
};