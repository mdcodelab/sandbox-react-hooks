import React from 'react';

function UseRefExample1() {

const inputRef=React.useRef();
const paraRef=React.useRef();

function onSubmit (e) {
e.preventDefault();
console.log(inputRef);
console.log(inputRef.current.value);  //get the value
inputRef.current.value="hello";  //set the value
inputRef.current.style.backgroundColor="red"; //changing style
paraRef.current.innerText="Goodbye";
}

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control mb-2" id="name" ref={inputRef}/>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <p ref={paraRef} onClick={() => inputRef.current.focus()}>Hello</p>
    </div>
  );
}

export default UseRefExample1;
