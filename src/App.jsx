import axios from 'axios'
import { useEffect, useState } from 'react'



function App() {
  const [actress, setActress] = useState([])
  function fetchActress() {
    axios.get('https://www.freetestapi.com/api/v1/actresses')
      .then((res) => setActress(res.data))
  }

  useEffect(fetchActress, []);
  console.log(actress);
  return (
    <>
      <div className='container'>
        <h1>Attrici Famose</h1>
        {actress.map(({ id, name, birth_year, nationality, most_famous_movies, awards, biography, image }) => (
          <div key={id} className='container-flex'>
            <div className='container-card'>
              <h3>{name}</h3>
              <p>{birth_year}</p>
              <p>{nationality}</p>
              <p>{most_famous_movies}</p>
              <p>{awards}</p>
              <p>{biography}</p>
            </div>
            <div className='container-img'>
              <img src={image} alt={name} />
            </div>

          </div>

        ))}

      </div>
    </>
  )
}

export default App
