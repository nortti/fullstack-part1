import React from 'react'
import ReactDOM from 'react-dom'

const FormatDecimal = average => (Math.round(average * 10) / 10) || 0

const FormatPcnt = pcnt => ((Math.round(pcnt * 1000) / 10) || 0) + " %"

const Statistic = ({ name, value }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad

  if (total === 0) {
    return (
      <p>ei yhtään palautetta annettu</p>
    )
  }

  let average = FormatDecimal((good - bad) / total)
  let positivePcnt = FormatPcnt(good / total)

  return (
    <table>
      <tbody>
      <Statistic name="hyvä" value={good} />
      <Statistic name="neutraali" value={neutral} />
      <Statistic name="huono" value={bad} />
      <Statistic name="keskiarvo" value={average} />
      <Statistic name="positiivisia" value={positivePcnt} />
      </tbody>
    </table>
  )
}

const Button = ({ id, onClick, text }) => <button id={id} onClick={onClick}>{text}</button>

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }

  increment = (event) => this.setState({ [event.target.id]: this.state[event.target.id] + 1 })

  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
        <Button id="good" onClick={this.increment} text="hyvä" />
        <Button id="neutral" onClick={this.increment} text="neutraali" />
        <Button id="bad" onClick={this.increment} text="huono" />

        <h1>statistiikka</h1>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
