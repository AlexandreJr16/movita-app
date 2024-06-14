// Função de debounce
// Serve para dar um atraso na execução de uma função

/**
 * Função de debounce para atrasar a execução de outra função.
 * @param func A função que será executada após o atraso.
 * @param wait O tempo de espera em milissegundos.
 * @param immediate Se verdadeiro, a função é executada na primeira chamada.
 * @returns Uma função que aplica o debounce na função fornecida.
 */
function debounce(func: Function, wait: number, immediate?: boolean) {
  var timeout: NodeJS.Timeout | null;

  return function (this: any) {
    var context = this,
      args = arguments;

    var callNow = immediate && !timeout;

    clearTimeout(timeout as NodeJS.Timeout);

    timeout = setTimeout(function () {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    }, wait);

    if (callNow) func.apply(context, args);
  };
}

export default debounce;
