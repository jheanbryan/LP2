export class ProcessadorStrings {
  /**
   * Dada uma string str, encontra o tamanho da substring mais longa
   * sem repetir nenhum caractere.
   *
   * Exemplo 1:
   *
   * Entrada: str = "abcabcbb"
   * Saída: 3
   * Explicação: A resposta é "abc", cujo tamanho é 3.
   *
   * Exemplo 2:
   *
   * Entrada: str = "bbbbb"
   * Saída: 1
   * Explicação: A resposta é "b", cujo tamanho é 1.
   *
   * Exemplo 3:
   *
   * Entrada: str = "pwwkew"
   * Saída: 3
   * Explicação: A resposta é "wke", cujo tamanho é 3.
   *
   * @param str a string de entrada
   * @returns O tamanho da substring mais longa sem repetir
   * nenhum caractere.
   */
  calcularTamanhoDaSubstringMaisLonga(str: string): number {
    let inicio = 0;
    let tamanhoMaximo = 0;
    let strings = new Set<string>();

    //percorrer str e adicionar em strings
    for (let fim = 0; fim < str.length; fim++) {

      while (strings.has(str[fim])) {
        strings.delete(str[inicio]);
        inicio++;
      };

      strings.add(str[fim]); 
      tamanhoMaximo = Math.max(tamanhoMaximo, fim - inicio + 1); 
    };
    
    //console.log(tamanhoMaximo)
    return tamanhoMaximo;
  };

  /**
   * Dada uma string str, retorna a substring palíndromica mais longa.
   *
   * Exemplo 1:
   *
   * Entrada: str = "babad"
   * Saída: "bab" ("aba" também é uma resposta válida)
   *
   * Exemplo 2:
   *
   * Entrada: str = "cbbd"
   * Saída: "bb"
   *
   * @param str a string de entrada
   * @returns A substring palíndromica mais longa.
   */
  encontrarSubstringPalindromicaMaisLonga(str: string): string {
    if (str.length <= 1 ){
      return str;
    
    }else{
      let inicio = 0;
      let fim = 0;

      const expandirCentro = (esquerda: number, direita: number): number => {
        while (esquerda >= 0 && direita < str.length && str[esquerda] === str[direita]) {
          esquerda--;
          direita++; 
        };
        return direita - esquerda - 1;
      };
    
      for (let i = 0; i < str.length; i++) {
        const comprimento1 = expandirCentro(i, i); // aba
        const comprimento2 = expandirCentro(i, i + 1); //bb
        const comprimentoMax = Math.max(comprimento1, comprimento2);
    
        if (comprimentoMax > fim - inicio) {
          inicio = i - Math.floor((comprimentoMax - 1) / 2);
          fim = i + Math.floor(comprimentoMax / 2);
        };
      };
      
      return str.substring(inicio, fim + 1);

      /*
      OBS: Em casos de 'babad' como entrada, o resultado esperado
          pode ser dois, 'bab' e 'aba'
      */
    };
  };
};
