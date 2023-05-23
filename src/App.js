import { useEffect, useState } from "react";

const ENDPOINT_RANDOM_FACTS = "https://catfact.ninja/fact"
//const ENDPOINT_CATS_IMG = "https://cataas.com/cat/says/${firstWord}?size=50&color=red"
const ENDPOINT_PREFIXE_URL = "https://cataas.com"


function App() {

  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    fetch(ENDPOINT_RANDOM_FACTS)
      .then(resp => resp.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        const trheeFirstWord = fact.split(' ', 3).join(' ')
        console.log(trheeFirstWord)
        fetch(`https://cataas.com/cat/says/${trheeFirstWord}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { url } = response
            setImgUrl(url)
          })
      })
  }, [])

  return (
    <div className="App">
      <h1>Mundo de Gatos</h1>
      {fact && <p>{fact}</p>}
      {imgUrl && <img src= {`${ENDPOINT_PREFIXE_URL}${imgUrl} `} alt={`Imagen traida de una api para ser usada por su tres pirmeras palabras`}/> }
    </div>
  );
}

export default App;
