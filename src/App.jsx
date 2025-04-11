import axios from 'axios'
import { useState } from 'react'



function App() {
  const [actress, setActress] = useState([])
  function fetchActress() {
    axios.get('https://freetestapi.com/api/v1/actresses')
      .then((res) => setActress(res.data))
  }

  return (
    <>
      <div>
        <button onClick={fetchActress}>Carica Todos</button>
        <ul>
          {actress.map((act) => (
            <li key={act.id}>{act.name}</li>
          ))}
        </ul></div>
    </>
  )
}

export default App
