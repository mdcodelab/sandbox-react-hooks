import React from 'react';
import Todo from "../Todo";

function UseRefExample3() {
  const[showTodo, setShowTodo]=React.useState(true);

  return (
    <div>
      {showTodo && (<Todo></Todo>)}
      <br></br>
      <button type="button" onClick={()=> setShowTodo(!showTodo)}>Toggle Todo</button>
    </div>
  );
}

export default UseRefExample3;
