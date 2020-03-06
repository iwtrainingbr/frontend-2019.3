import React from 'react';

export default function Teste () {
  const [pagina, setPagina] = React.useState(1);

  let resultados = [];

  for (let i = 0; i <= 1400; i++) {
    resultados.push('Nome '+ i);
  }

  let quantidadePaginas = parseInt(resultados.length/20);

  let paginas = [];

  for (let i = 1; i <= quantidadePaginas; i++) {
    paginas[i] = [];
    let fim = (0 + 20) * i;
    let inicio = fim - 20;

    for (let l = inicio; l < fim; l++) {
      paginas[i].push(<li>{resultados[l]}</li>);
    }
  }

  let x = quantidadePaginas + 1;
  paginas[x] = [];
  for (let i = (quantidadePaginas * 20); i < resultados.length; i++) {
    paginas[x].push(<li>{resultados[i]}</li>);
  }

  return (
      <div>
        <h1>Teste de Paginação</h1>
        {paginas.map((cadaPagina, index) => {
          return <div hidden={(pagina !== index)} style={{width: 300, backgroundColor: '#ffffff', border: '1px solid black'}}>
            <ul>
            {cadaPagina}
            </ul>
          </div>
        })}

        {paginas.map((cadaPagina, index) => {
          return <button onClick={() => {setPagina(index)}}>{index}</button>
        })}
      </div>
  );
}
