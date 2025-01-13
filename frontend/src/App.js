import React, { useEffect, useState } from 'react';
import api from './utils/axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/api/test')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;

