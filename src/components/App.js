import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
 //code here
 const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  useEffect(() => {
    setOutputValue(inputValue ** 2);
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
 
  return (
    <div id="main">
      <ChildComponent /> 
       <input id='input' value={inputValue} onChange={handleInputChange} />
    
      <p id='output'>{outputValue}</p>
</ChildComponent>
    </div>
  )
}


export default App;
