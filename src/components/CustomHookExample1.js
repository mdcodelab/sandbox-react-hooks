import React from 'react';
import useFetch from "../hooks/useFetch"

function CustomHookExample1() {
  const {data, loading, error}=useFetch(" https://random-data-api.com/api/v2/users?size=2&is_xml=true", {})
  console.log(data);

  if(loading) {
    return <h3>Loading...</h3>
  }
    
  return (
    <div>
      {data.map((item) => {
        return <h2 key={item.id}>{item.first_name}</h2>
      })}
    </div>
  );
}

export default CustomHookExample1;
