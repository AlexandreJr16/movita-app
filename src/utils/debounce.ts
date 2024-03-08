//Função de debounce
//Serve para dar um atraso na pesquisa
function debounce(func: Function, wait: number, immediate?: boolean) {
  var timeout;

  return function () {
    var context = this,
      args = arguments;

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

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
