const Pixel = (props) => {
  const className = props.className;
  const color = props.color;
  return (
    <div style={{backgroundColor: color}} className={className}></div>
  )
}

export default Pixel;