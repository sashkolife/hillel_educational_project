import './App.css'
import Input from "./components/Input/Input.tsx";
import Button from "./components/Button/Button.tsx";

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
