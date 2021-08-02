import React, { useState } from "react";

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const VotesDisplay = ({votes, selected}) => {
    return (
      <div>
        Votes: {votes[selected]}
      </div>
    )
}
const MostVoted = ({votes, anecdotes,mostVoted}) => {
  return (
    <div>
      {anecdotes[mostVoted]}
      <p>Votes: {votes[mostVoted]}</p>
    </div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));


  const mostVotedIndex = votes.indexOf(Math.max(...votes));
  console.log(mostVotedIndex)


  const changeAnecdote = () => {
    const newSelection = Math.floor(Math.random() * anecdotes.length)
    setSelected(newSelection)
  }


  const voteAnecdote = () => {
    const copy = [...votes]
    if (copy[selected] === undefined){ 
      copy[selected] = 1
    }else {
      copy[selected] = copy[selected] + 1
    }
    setVotes(copy)
  }


    return (
      <div>
        <h2>Random anecdotes</h2>
        <p>{anecdotes[selected]}</p>
        <VotesDisplay votes={votes} selected={selected}/>
        <Button handleClick={changeAnecdote} text="Next anecdote"></Button>
        <Button handleClick={voteAnecdote} text="vote"></Button>
        <h2>Most voted anecdote</h2>
        <MostVoted votes={votes} anecdotes={anecdotes} mostVoted={mostVotedIndex}/>
      </div>
  )

}

export default App;
