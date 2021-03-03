import { Layout } from './components';
import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const initialState = [];

  const [state, setState] = useState(initialState);

  useEffect(() => {
    axios.get(`http://localhost:8000/`)
      .then(res => {
        setState(res.data.data);
        console.log('result.. ', res)
      })
  }, []);

  console.log('dari state', state);
  return (
    <Layout size="middle">
      <h1>500</h1>
      <p>Saldo</p>
      <div>
        <div>
          <label>nama transaction ?</label>
          <input type="text" />
        </div>
        <div>
          <label>amount ?</label>
          <input type="number" />
        </div>
        <button>create transaction</button>
      </div>
      <div>
        <h4>History</h4>
        {state && state.map((item, index) => {
          return (
            <div key={index}>
              <p>{`${item.text} - ${item.amount} - ${item.type}`}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default App;
