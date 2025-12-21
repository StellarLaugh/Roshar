fetch('index.json')
  .then(r => r.json())
  .then(lista => {
    lista.sort();
    const tabla = document.getElementById('tabla');
    let fila;

    let celdasPorFila = 5;
    if (window.innerWidth < 600) {
      celdasPorFila = 2;
    }

    for (let i = 0; i < lista.length; i++) {
      if (i % celdasPorFila === 0) {
        fila = document.createElement('tr');
      }

      const celda = document.createElement('td');

      const img = document.createElement('img');
      img.src = './fichas/' + lista[i] + '.jpg';
      img.alt = lista[i];

      const enlace = document.createElement('a');
      enlace.href = './fichas/' + lista[i] + '.txt';
      enlace.textContent = lista[i];
      enlace.target = '_blank';

      const texto = document.createElement('p');
      texto.style.margin = '0';
      texto.appendChild(enlace);

      celda.appendChild(img);
      celda.appendChild(texto);
      fila.appendChild(celda);

      if (i % celdasPorFila === celdasPorFila - 1 || i === lista.length - 1) {
        tabla.appendChild(fila);
      }
    }
  });