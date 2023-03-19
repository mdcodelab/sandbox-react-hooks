import React from 'react';

function useCallbackExample() {
    const[tasks, setTasks]=React.useState([]);

    // function addTask() {
    //     setTasks(prevState => [...prevState, "Some tasks"])
    // }

    const addTask=React.useCallback(()=> {
      setTasks(prevState => [...prevState, "Some tasks"])
    }, [setTasks])

  return (
    <div>
      <Button addTask={addTask}></Button>
      {tasks.map((task, index) => {
        return <p key={index}>{tasks}</p>
      })}
    </div>
  );
}



const Button = React.memo (({addTask}) => {
console.log("Button rendered");
return (
    <div>
        <button onClick={addTask}>Add Task</button>
    </div>
)
})
export default useCallbackExample;

