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
      <div>
        {actress.map(({ id, name, birth_year, nationality, most_famous_movies, awards, biography, image }) => (
          <div key={id}>
            <h3>{name}</h3>
            <p>{birth_year}</p>
            <span>{most_famous_movies}</span>
            <span>{awards}</span>
            <span>{biography}</span>
            <div>
              <img src={image} alt={name} />
            </div>
          </div>
        ))}

      </div>
    </>
  )
}

export default App
