import Pixel from './Pixel';

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

export default Row;