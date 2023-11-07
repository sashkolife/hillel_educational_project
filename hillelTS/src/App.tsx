import './App.css'
import Input from "./components/input/Input.tsx";
import Button from "./components/button/Button.tsx";

function App(){

  return (
      <div>
          <Input/>
          <Button title="Start"></Button>
          <Button title="Stop"/>
      </div>
  )
}

export default App
