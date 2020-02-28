import React, {useState} from 'react';

export default function Test() {
  console.log('aconteceu');
  const [getQuantidade, setQuantidade] = useState(100);

  return (
    <div>
      Você clicou {getQuantidade} vezes!<br/>
      Você clicou {getQuantidade} vezes!<br/>
      Você clicou {getQuantidade} vezes!<br/>
      Você clicou {getQuantidade} vezes!<br/>
      Você clicou {getQuantidade} vezes!<br/>
      Você clicou {getQuantidade} vezes!<br/>

      <button onClick={() => {
        setQuantidade(getQuantidade + 1);
      }}>
        Clique aqui
      </button>
    </div>
  )
}
