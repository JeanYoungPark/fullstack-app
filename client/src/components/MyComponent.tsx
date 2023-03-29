import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.text())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return <div>{data}</div>;
}

export default MyComponent;