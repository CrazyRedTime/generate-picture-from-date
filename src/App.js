import './App.css';
import md5 from 'crypto-js/md5';
import React, {useState} from 'react';
import makeArray from './makeArray';
import Row from './Row';
import getDate from './getDate';


const App = () => {
  const today = getDate();

  const [date, setDate] = useState(today);

  const changeDate = (e) => {
    setDate(e.target.value);
  };
  
  const newDate = date.toString().replace(/-/g,'');
  const hash = md5(newDate).toString();
  const mainColor = `#${hash.slice(-6).toUpperCase()}`;
  const backgroundColor = `#${hash.slice(-12, -6).toUpperCase()}`;
  const randomArray = makeArray(hash);

  return (
    <>
    <label>
      Try to change date!
      <input type='date' autoFocus={true} value={date} onChange={changeDate}></input>
    </label>
    <div style={{border: `20px solid ${backgroundColor}`}} className='avatar'>
      {randomArray.map((item, i) => <Row key={i} row={item} forKey={i} mainColor={mainColor} backgroundColor={backgroundColor}/>)}
    </div>
    </>
  )
}

export default App;
