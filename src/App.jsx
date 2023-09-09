
import './App.css'
import Counter from './Counter';
import Team from './team';
import Users from './User';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert('button clicked')
  }

  const handleClick2= () =>{
    alert('button 2 Clicked')
  }

  const addToFive =(num) =>{
    alert(num + 5)
  }

  return (
    <>    
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      {/* <button onclick='handleClick()'>Click Me</button> html a vabe likhtam */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
    <button onClick={()=>{alert('third clicked')}}>Third Click</button>
    {/* vejal not solve */}
    <button onClick={()=>addToFive(5)}>Click Four</button>

    </>
  )
}

export default App
