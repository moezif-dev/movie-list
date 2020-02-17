import React, { useState, useEffect } from 'react';

// Component that will display a loading indicator while waiting for a promise to resolve
const PromiseLoader = (props) => {
  const { promise } = props;
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    // track component mounted state to insure updating state only occuers when component is mounted
    let mounted = true;
    const resolvePromise = async () => {
      try {
        const response = await promise;
        const { data } = response;

        mounted && setData(data);
      } catch (err) {
        mounted && setError(err)
      }
    };
    
    resolvePromise();

    // useEffect CleanUp function
    return () => {
      mounted = false;
    };
  });

  if( error ){
    const { message } = error;
    return <h3>{ message }</h3>;
  };

  if(!data){
    return <h3>Loader</h3>
  };

  return props.children(data);
}

export default PromiseLoader;