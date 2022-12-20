let tablero;
let current = BigInt(1);
let total = BigInt(0);
window.addEventListener('load', function (param) {
  let black = true;
  let b = document.querySelector('body');
  tablero = Array(8 * 8).fill(0);
  tablero.forEach((element, index) => {
    current = index == 0 ? current : current * 2n;
    tablero[index] = current;
    total += current;
    casilla = index + 1;
    let pieza = document.createElement('div');
    pieza.id = 'pieza' + casilla;
    pieza.dataset.id = casilla;
    pieza.dataset.total = total;
    let currentclass = black ? 'bg-black text-white' : '';
    black = !black;
    if (casilla %8==0) {
      black = !black;
    }
    pieza.classList = 'flex items-center justify-center cursor-pointer ' + currentclass;
    pieza.innerHTML = current.toLocaleString();
    pieza.onclick = function (param) { alert(`El total acumulado hasta la casilla ${param.target.dataset.id} es ${BigInt(param.target.dataset.total).toLocaleString()}`); };
    b.appendChild(pieza);
  });
})

