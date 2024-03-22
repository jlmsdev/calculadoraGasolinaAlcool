import './App.css'

import logoImg from './assets/logo.png';

function App() {
  return (
      <div>
        <main className="container">
          <img src={logoImg} alt="Logo Posto" className='logo'/>
          <h1 className='title'>Qual a melhor opção ?</h1>


          <form className='form'>
            <label>Álcool (Preço por litro)</label>
            <input type="number"
              className='input'
              placeholder='4,90'
              min='1'
              step='0.01'
              required
            />

            <label>Gasolina (Preço por litro)</label>
            <input type="number"
              className='input'
              placeholder='4,90'
              min='1'
              step='0.01'
            />

            <input type="submit" value='Calcular' className='button' />
          </form>
        </main>
      </div>
  );
}

export default App
