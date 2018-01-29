import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = ({nimi}) => <div><h1>{nimi}</h1></div>

const Osa = ({nimi, tehtavia}) => <p>{nimi} {tehtavia}</p>

const Yhteensa = ({osat}) => <p>yhteensä {osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia} tehtävää</p>

const Sisalto = props => {
  return (
    <div>
      <Osa nimi={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia} />
      <Osa nimi={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia} />
      <Osa nimi={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia} />
    </div>
  )
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko nimi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
