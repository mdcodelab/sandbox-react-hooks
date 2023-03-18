import React from 'react';

function useMemoExample() {
  const [number, setNumber] = React.useState(1);
  const [inc, setInc] = React.useState(0);
  const renders = React.useRef(1);

  const getSqrt = React.useMemo(() => {
    console.log("Expensive function called")
    for(let i=0; i<5; i++) {
      console.log(i);
    }
    return Math.sqrt(number);
  }, [number]);

  React.useEffect(() => {
    renders.current = renders.current + 1;
  });

  function onClick() {
    setNumber(prevState => prevState + 1);
    console.log(number);
  } 

  return (
    <div>
      <input type="number" value={inc} onChange={(e) => setInc(e.target.value)} /><br></br>
      <h2>The sqrt of {number} is: {getSqrt}</h2>
      <button type="button" onClick={onClick}>ReRender</button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
}

export default useMemoExample;

