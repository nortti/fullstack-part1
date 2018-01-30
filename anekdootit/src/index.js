import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: []
    }
    for (var i = 0; i < anecdotes.length; i++) this.state.votes[i] = 0;
  }

  vote = () => {
    const updatedVotes = [...this.state.votes]
    updatedVotes[this.state.selected] += 1
    return () => {
      this.setState({ votes: updatedVotes })
    }
  }


  nextAnecdote = () => {
    return () => {
      this.setState({ selected: Math.floor(Math.random() * anecdotes.length) })
    }
  }

  mostVoted = () => {
    let mostVotes = Math.max(...this.state.votes)
    return (
      <div>
        {anecdotes[this.state.votes.indexOf(mostVotes)]}<br />
        with {mostVotes} votes
    </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}<br />
        has {this.state.votes[this.state.selected]} votes<br />
        <button onClick={this.vote()}>vote</button>
        <button onClick={this.nextAnecdote()}>next anecdote</button>
        <h3>anecdote with most votes:</h3>
        {this.mostVoted()}
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
