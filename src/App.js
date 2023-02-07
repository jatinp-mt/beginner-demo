import Square from './components/Square'
import Input from './components/Input'
import ColorPicker from './components/ColorPicker'
import { useState } from 'react'

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <ColorPicker
        colorValue={colorValue}
        hexValue={hexValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
      />
      <h4 style={{ marginTop: 20 }}>OR</h4>
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;