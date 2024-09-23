import { useState } from 'react';
import './App.css';
import countryService from './services/countries';

function App() {
  const [currency, setCurrency] = useState('');
  const [capital, setCapital] = useState('');
  const [area, setArea] = useState('');
  const [languages, setLanguages] = useState('');
  const[flag, setFlag] = useState('');

  const handleInputChange=(e)=>{
    setCurrency(e.target.value);
  }

  const getAllTheCountries=(e)=>{
    e.preventDefault();
    countryService.getSpecificCountry(currency).then((response)=>{
      setCapital(response.data.capital);
      setArea(response.data.area);

      setLanguages(JSON.stringify(response.data.languages));
      setFlag(response.data.flags.svg);
      console.log(response.data.name,'\ncapital', response.data.capital, '\nflag',response.data.flags.png,
        '\nlanguages:',response.data.languages, '\narea',response.data.area);
    })
  }

  return (
  <div>
    <form>currency:
      <input type="text" value={currency} onChange={handleInputChange} />
      <p>The input text is: {currency}</p>
      <button onClick={getAllTheCountries}>Click me!</button>
      <p>The capital is: {capital}</p>
      <p>The area is: {area}</p>
      <p>The flag is: <br/><img src={flag} height={300} width={300} alt='country flag'/></p>
      <p>The languages are: {languages}</p>
    </form>
  </div>);
}

export default App;
