import { useEffect, useState } from 'react';
import axios from 'axios';

import { Layout, Button, Input } from './components';

const App = () => {
  const initial = {
    text: "",
    amount: 0,
    type: null
  };

  const [state, setState] = useState([]);
  const [dataInput, setDataInput] = useState(initial);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8000/`)
      .then(res => {
        setState(res.data.data);
        console.log('result.. ', res)
      }).then(() => {
        axios.get(`http://localhost:8000/balance`).then((result) => {
          setBalance(result.data.result);
        });
      }).catch((error) =>{
        console.log(error, 'error');
        alert('cek console!');
      });
  }, []);

  const handleChange = (e) => {
    setDataInput({
      ...dataInput,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    // console.log(dataInput)
    axios.post(`http://localhost:8000/`, dataInput).then((result) =>{
      console.log('result', result);
      alert('success add data');
      return window.location.reload();
    }).catch((error) => {
      console.log('error', error);
      return alert('lihat console untuk mengetahui error!');
    });
  };

  // console.log('dari state', state);
  // console.log(balance, '  ini balace saldo');
  return (
    <Layout size="small">
      <h1>{balance}</h1>
      <p>Balance</p>
      <div style={{textAlign: "left", padding: "1rem"}}>
        <div>
          <label style={{padding: "1rem"}}>transaction ?</label>
          <Input 
            placeholder="enter..." 
            size="small"
            name="text"
            value={dataInput.text} 
            onChange={handleChange}
          />
        </div>
        <div>
          <label style={{padding: "1rem"}}>amount ?</label>
          <Input 
            placeholder="enter..." 
            size="small" 
            type="number"
            name="amount"
            value={dataInput.amount}
            onChange={handleChange}
          />
        </div>
        <div style={{padding: "1rem"}}>
          <div >
            <label>Type ?</label>
            <p>
              <em>input amount type expense telah di validasi harus di awali dengan tanda (-) , example: -500</em>
            </p>
            
          </div>
          <div style={{padding: "1rem", float: "left"}}>
            <input 
              type="radio" 
              name="type"
              value="income" 
              checked={dataInput.type === "income"}
              onChange={handleChange}
            />
            <label> income</label>
          </div>
          <div style={{padding: "1rem"}}>
            <input 
              type="radio" 
              name="type" 
              value="expense"
              checked={dataInput.type === "expense"}
              onChange={handleChange}
            />
            <label> expense</label>
          </div>
        </div>
        <div style={{padding: "1rem"}}>
          <Button label="Submit" variant="success" onClick={handleSubmit} />
        </div>
      </div>
      <div style={{textAlign: "left", padding: "1rem"}}>
        <h4>History</h4>
        {state && state.map((item, index) => {
          return (
            <div key={index} className="list-custom">
              <p className="p-custom">{`${item.text} - ${item.amount} - ${item.type}`}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default App;
