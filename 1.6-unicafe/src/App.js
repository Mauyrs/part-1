import React, { useState } from "react";


const Tittle = ({tittle}) => (
  <h1>{tittle}</h1>
)

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const SubTittle = ({subtittle}) => (
  <h2>{subtittle}</h2>
)

const OptionStatistic = ({option, counter}) => (
    <tr>
      <td>{option}</td><td>{counter}</td>
    </tr>
)

const Total = ({goodRates, neutralRates, badRates}) => (
    <tr>
      <td>Total rates</td><td>{goodRates + neutralRates + badRates}</td>
    </tr>
)
const Average = ({goodRates, neutralRates , badRates}) => {
  return (
      <tr>
        <td>Average</td><td>{(goodRates-badRates) / (goodRates + neutralRates + badRates)}</td>
      </tr>
  )
}

const PositivePerc = ({goodRates, neutralRates, badRates}) => {
  const total = goodRates + neutralRates + badRates
  let Percentage = ((goodRates/total) * 100)

  return (
      <tr>
        <td>Positive</td><td>{Percentage}%</td>
      </tr>
  )
}
const Statistics = ({good, neutral, bad}) => {
  if (!(good === 0) || !(neutral === 0) || !(bad === 0)) {
    return (
        <div>
          <SubTittle subtittle="Statistics" />
          <table><tbody>
              <OptionStatistic option="Good" counter={good} />
              <OptionStatistic option="Neutral" counter={neutral} />
              <OptionStatistic option="Bad" counter={bad} />
              <Total goodRates={good} neutralRates={neutral} badRates={bad}/>
              <Average goodRates={good} neutralRates={neutral} badRates={bad}/>
              <PositivePerc  goodRates={good} neutralRates={neutral} badRates={bad}/>
          </tbody></table>
        </div>
    )
  }
  else {
    return (
    <div>
      <SubTittle subtittle="Statistics" />
      <h3>No feedback given</h3>
    </div>
    )
  }
}
const App = () => { 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const rateGood = () => setGood(good+1)
  const rateNeutral = () => setNeutral(neutral+1)
  const rateBad = () => setBad(bad+1)

  return (
    <div>
      <Tittle tittle="Give us feedback!" />
      <Button handleClick={rateGood} text={"Good"} />
      <Button handleClick={rateNeutral} text={"Neutral"} />
      <Button handleClick={rateBad} text={"Bad"} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}


export default App;
