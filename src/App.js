import React, { Component, useState } from 'react';
import './App.css';

// class App extends Component {
//   state = {
//     texto: 'Olá mundo!',
//     abrirModal: false,
//   }

//   mudarTexto = () => {
//     this.setState({
//       texto: 'Tchau mundo!',
//     })
//   }

//   exibirModal = () => {
//     this.setState({
//       abrirModal: this.state.abrirModal ? false : true,
//     })
//   }

//   render() {
//     return (
//       <>
//         <p>{this.state.texto}</p>
//         <button onClick={this.mudarTexto}>vamo mudar</button>

//         {this.state.abrirModal && (
//           <div className='overlay' onClick={this.exibirModal}>
//             <div className='modal'>
//               <p>ALOHA</p>
//             </div>
//           </div>
//         )}

//         <button onClick={this.exibirModal}>Abrir modal</button>
//       </>
//     );
//   }
// }

// export default App;

function App() {
  const [texto, mudarTexto] = useState('Olá mundo!'); // um testado, uma ação
  const [abrirModal, exibirModal] = useState(false);

  // texto = 'string', estado que a gente vai manipular
  // mudarTexto = função

  const funcaoTexto = () => {
    mudarTexto('Tchau mundo!');
  };

  return (
    <div className="App">
      <p>{texto}</p>
      <button onClick={funcaoTexto}>Mudar texto</button>

      {abrirModal && (
        <div className='overlay' onClick={() => exibirModal(false)}>
          <div className='modal'>
            <p>ALOHA</p>
          </div>
        </div>
      )}

      <button onClick={() => exibirModal(true)}>Abrir modal</button>
    </div>
  );
}

export default App;
