// 39-2 Different way to handle events in React
// 39-3 A simple Introduction to State change in React
// 39-4 Understand the concept of useState and react hooks
// 39-5 (Advanced) Understand the concept of useEffect
// 39-6 (Recap) Load dynamic data, API call useEffect integrate state
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';



function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () =>{
    alert('button 2 clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>
      
      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert('third button clicked')}}>third</button>
      <button onClick={() => {addToFive(3)}}>Four</button>
      
    </>
  )
}

export default App
