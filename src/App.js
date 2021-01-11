import './App.css';
import md5 from 'crypto-js/md5';
import React from 'react';

const makeArray = (seed) => {
  const x = 5;
  const y = 10;
  const arr = [];
  const values = parseInt(seed.slice(0, 13), 16).toString(2);
  for (let i = 0; i < y; i++) {
    arr.push([]);
    for (let j = 0; j < x; j++) {
      arr[i].push(Number(values[j+(i*5)]));
    }
  }
  for (let i = 0; i < y; i++) {
    arr[i] = [...arr[i], ...arr[i].reverse()];
  }
  return arr;
}


const Pixel = (props) => {
  const className = props.className;
  const color = props.color;
  return (
    <div style={{backgroundColor: color}} className={className}></div>
  )
}

const Row = (props) => {
  const row = props.row;
  const key = props.forKey;
  const mainColor = props.mainColor;
  const backgroundColor = props.backgroundColor;
  return (
    <div className='row'>
    {row.map((item, i) => {
      const color = item ? mainColor : backgroundColor;
      return (
        <Pixel key={i +(key*10) + 10} className='pixel' color={color}/>
      )
    })}
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 0,
    }
  }

  componentDidMount() {
    const date = new Date();
    let day = date.getDate().toString();
    if (day.length === 1) {
      day = '0' + day;
    }
    let month = (date.getMonth() + 1).toString();
    if (month.length === 1) {
      month = '0' + month;
    }
    const year = date.getFullYear().toString();
    const formatDate = `${year}-${month}-${day}`;
    this.setState({ date: formatDate });
  }

  changeDate = (e) => {
    this.setState({ date: e.target.value });
  };
  
  render () {
    const date = this.state.date.toString().replace(/-/g,'');
    const hash = md5(date).toString();
    const mainColor = `#${hash.slice(-6).toUpperCase()}`;
    const backgroundColor = `#${hash.slice(-12, -6).toUpperCase()}`;
    const randomArray = makeArray(hash);

    return (
      <>
      <label>
        Try to change date!
      <input type='date' autoFocus={true} value={this.state.date} onChange={this.changeDate}></input>
      </label>
      <div style={{border: `20px solid ${backgroundColor}`}} className='avatar'>
      {randomArray.map((item, i) => <Row key={i} row={item} forKey={i} mainColor={mainColor} backgroundColor={backgroundColor}/>)}
      </div>
      </>
    )
  }
  
}

export default App;
