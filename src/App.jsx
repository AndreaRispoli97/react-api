import axios from 'axios'
import { useEffect, useState } from 'react'



function App() {
  const [actress, setActress] = useState([])
  const [actor, setActor] = useState([])
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  function fetchActress() {
    axios.get('https://www.freetestapi.com/api/v1/actresses')
      .then((res) => setActress(res.data))
  }

  function fetchActor() {
    axios.get('https://www.freetestapi.com/api/v1/actors')
      .then((res) => setActor(res.data))
  }


  useEffect(() => {
    if (category === 'actor') {
      setActress([])
      fetchActor()
    } else if (category === 'actress') {
      setActor([])
      fetchActress()
    } else if (category === 'all') {
      fetchActor()
      fetchActress()
    }
  }, [category])

  return (
    <>
      <div className='container'>
        <button
          onClick={() => setCategory('actor')}
          type='button'>Attori</button>
        <button onClick={() => setCategory('actress')}
          type='button'>Attrici</button>
        <button onClick={() => setCategory('all')}
          type='button'>Lista di tutti gli Attori</button>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />

        {actress.filter((person) => person.name.toLowerCase().includes(name.toLowerCase())).map(({ id, name, birth_year, nationality, most_famous_movies, awards, biography, image }) => (

          <div key={id} className='container-flex'>
            <h1>Attrice</h1>
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

        {actor.filter((person) => person.name.toLowerCase().includes(name.toLowerCase())).map(({ id, name, birth_year, nationality, most_famous_movies, awards, biography, image }) => (
          <div key={id} className='container-flex'>
            <h1>Attore</h1>
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
