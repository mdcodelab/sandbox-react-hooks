import React from 'react';

function useFetch(url, options) {
  const[loading, setLoading]=React.useState(true);
  const[error, setError]=React.useState(null);
  const[data, setData]=React.useState(null);

  React.useEffect(() => {
    const fetchData= async () => {
      try {
        const response= await fetch(url);
        const data = await response.json(url, options);
        setData(data);
        setLoading(false);
      } catch (error) {
          console.log(error);
          setLoading(false);
      }
    }
    fetchData();
  }, [])

  return {data, loading, error}
}

export default useFetch;


