let tablero;
let current = BigInt(1);
let total = BigInt(0);
window.addEventListener('load', function (param) {

  let b = document.querySelector('body');
  tablero = Array(8 * 8).fill(0);
  tablero.forEach((element, index) => {
    current = index == 0 ? current : current * 2n;
    tablero[index] = current;
    total += current;
    let pieza = document.createElement('div');
    pieza.id = 'pieza' + (index + 1);
    pieza.dataset.id = (index + 1);
    pieza.dataset.total = total;
    pieza.classList = 'flex items-center justify-center border border-solid border-black';
    pieza.innerHTML = current.toLocaleString();
    pieza.onclick = function (param) { alert(`El total acumulado hasta la casilla ${param.target.dataset.id} es ${BigInt(param.target.dataset.total).toLocaleString()}`); };
    b.appendChild(pieza);
  });
})

