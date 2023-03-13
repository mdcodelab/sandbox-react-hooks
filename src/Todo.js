import React from 'react';

function Todo() {
    const[loading, setLoading]=React.useState(true);
    const[todo, setTodo]=React.useState({});
    const isMounted = React.useRef(true);
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1").
        then((response => response.json())). then(data => {
            setTimeout(()=> {
                if(isMounted) {
                    setTodo(data);
                }
            }, 3000)
            setLoading(false);
        })
        //runs when the component is unmounted
        isMounted.current=false;

    }, [isMounted])
  return (
    <div>
      {loading ? (<h3>Loading...</h3>) : <h1>{todo.title}</h1>}
    </div>
  );
}

export default Todo;
