import { useState, useEffect } from 'react'
import { Table } from './components/Table';


function App() {
  const [data, setData] = useState([])
  const colunas = [ 'id', 'name', 'email', 'username', 'website', 'address']

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data));
      
  }

  useEffect(() => {
    getUsers()
    
  }, []);

  return (

    <div className='container'>
      <Table 
      colunas={colunas}
      data={data}
            
      />

    </div>

  )
}

export default App
