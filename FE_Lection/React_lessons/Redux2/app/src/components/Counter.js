let render = {
  count1: 0,
  count2: 0
}

export default function Counter(props) {

  const { value, elem } = props;
  console.log('counter was rerendered');

  return (
    <div>
      {value}
    </div>
  )
}
