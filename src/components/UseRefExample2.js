import React from 'react';

function UseRefExample2() {
//GET PREVIOUS TATE
  let renders =React.useRef(1);
  const[name, setName]=React.useState("");
  const prevName=React.useRef("");

  React.useEffect(() => {
    renders.current=renders.current+1;
    prevName.current=name;
  }, [name])
  return (
    <div>
      <h2>Renders: {renders.current}</h2>
      <h2>Prev State {prevName.current}</h2>
      <input type="text" onChange={(e)=> setName(e.target.value)} value={name} className="form-control mb-3"></input>

    </div>
  );
}

export default UseRefExample2;
