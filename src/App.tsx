import './App.css'
import { useState, FormEvent } from 'react';

import logoImg from './assets/logo.png';


interface InfoProps{
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {

  const [gasolina, setGasolina] = useState<number>(0);
  const [alcool, setAlcool] = useState<number>(0);
  const [info, setInfo] = useState<InfoProps>()

  function calcular(event: FormEvent) {
    event.preventDefault();

    const calculo = (alcool / gasolina);

    if(calculo <= 0.7) {
      setInfo({
        title: 'Compensa Usar Álcool',
        gasolina: formatarMoeda(gasolina),
        alcool: formatarMoeda(alcool)
      })
    }else {
      setInfo({
        title: 'Compensa usar Gasolina',
        gasolina: formatarMoeda(gasolina),
        alcool: formatarMoeda(alcool)
      })
    }
  }

  function formatarMoeda(valor: number) {
    const valorFormatado = valor.toLocaleString('pt-br',
    {
      style: 'currency',
      currency: 'BRL'
    })

    return valorFormatado;
  }

  return (
      <div>
        <main className="container">
          <img src={logoImg} alt="Logo Posto" className='logo'/>
          <h1 className='title'>Qual a melhor opção ?</h1>


          <form className='form' onSubmit={calcular}>
            <label>Álcool (Preço por litro)</label>
            <input type="number"
              className='input'
              placeholder='4,90'
              min='1'
              step='0.01'
              required
              value={alcool}
              onChange={ (e) => setAlcool(Number(e.target.value)) }
            />
            <label>Gasolina (Preço por litro)</label>
            <input type="number"
              className='input'
              placeholder='4,90'
              min='1'
              step='0.01'
              value={gasolina}
              onChange={ (e) => setGasolina(Number(e.target.value))}
            />

            <input type="submit" value='Calcular' className='button' />
          </form>

          {info && Object.keys(info).length > 0 && (
              <section className='result'>
                <h2 className='result-title'>{info.title}</h2>
                <span>Álcool {info.alcool}</span>
                <span>Gasolina {info.gasolina}</span>
              </section>
          )}

        </main>
      </div>
  );
}

export default App
