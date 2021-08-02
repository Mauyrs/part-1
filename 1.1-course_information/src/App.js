const Header = (props) => {
  return (
  <div>
    <header>
      <h1>{props.course.name}</h1>
    </header>
  </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} has {props.exercises} exercises
      </p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0].name} exercises= {props.course.parts[0].exercises} />
      <Part part={props.course.parts[1].name} exercises= {props.course.parts[1].exercises} />
      <Part part={props.course.parts[2].name} exercises= {props.course.parts[2].exercises} />
    </div>
  )

}
//Es mucho mas facil entender que es exactamente el dato que estoy llamando cuando lo declaro dentro de un objeto 
const Total = (props) => {
  return (
    <div>
      <p> The total of exercises is {props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises}</p>
    </div>
  )
}
const App = () => {
  const course = {
    name :'Half Stack application development',
    parts : [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    { 
      name : 'State of a component',
      exercises : 14
    }
  ]
  }
  return (
    <div>
      <Header course={course} />
        <Content course={course} />
        <Total course={course}/>
    </div>
  )

}

export default App;
