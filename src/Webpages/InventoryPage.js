import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function InventoryPage() {
  const [Name, setName] = useState('');
  const [ Email, setEmail] = useState('');
  const [ Password, setPassword] = useState('');
  const [ Confirm_Password, setConfirm_Password] = useState('');
  const [ Username, setUsername] = useState('');

  useEffect(()=>{
Axios.get("http://localhost:3001/api/get"). then((response)=> {
  console.log(response.data);
})
  },[]);
  
  const submitReg=()=> {
      Axios.post("http://localhost:3001/api/insert", {
          Name: Name, 
          Email:Email, 
          Password:Password, 
          Confirm_Password: Confirm_Password, 
          Username: Username, 
      }).then (()=> {
          alert("successful insert");
      });
  };
  return (
    <div class= "title">
          <form >
              <input
                  type="char"
                  name="Name"
                  placeholder="Name"
                  onChange={(e) => {
                      setName(e.target.value)
                    }  }
              />
                  <input
                  type="varchar"
                  name="Username"
                  placeholder="Username"
                  onChange={(e) => {
                      setUsername(e.target.value)
                    }  } />
              <input
                  type="varchar"
                  name="Email"
                  placeholder="Email"
                  onChange={(e) => {
                      setEmail(e.target.value)
                    }  }  />
              <input
                  type="varchar"
                  name="Password"
                  placeholder="Password"
                  onChange={(e) => {
                      setPassword(e.target.value)
                    }  } />
              <input
                  type="varchar"
                  name="Confirm_Password"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                      setConfirm_Password(e.target.value)
                    }  } />
              <button onClick={submitReg}>Register</button>
          </form>

          </div>
  );
}

export default InventoryPage;
