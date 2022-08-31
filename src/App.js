import React, { useEffect, useState } from 'react';
import './App.scss';
import colorArray from './colorArray.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
<FontAwesomeIcon icon="fa-brands fa-square-twitter" />

let quotesDB = "https://raw.githubusercontent.com/teffyeng/funny-quotes/main/quotesDB.json"

function App() {
  const [quote, setQuote] = useState("Don't believe everything you read on the Internet")
  const [author, setAuthor] = useState("Abraham Lincoln");
  
  const [quotesArray, setquotesArray] = useState(null)
  const [accentColor, setAccentColor] = useState('#282c34')

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setquotesArray(parsedJSON.quotes)
    console.log(parsedJSON)
  }

  useEffect(() => {
    fetchQuotes(quotesDB)
  }, [])

  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random())
  
    setAccentColor(colorArray[randomInteger])
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
  }

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: accentColor }}>
        <div id="quote-box" style={{ color: accentColor }}>

          <p id="text">
            "{quote}"
          </p>
          <div><p id="author" >- {author}</p></div>
          <div><button id="new-quote" style={{ backgroundColor: accentColor }} onClick={() => getRandomQuote()}>Give me More!
          </button></div>

          <div className="button"><a style={{ backgroundColor: accentColor }} id="tweet-quote" href={encodeURI
            (`https://www.twitter.com/intent/tweet?text=${quote} 
            -${author}`)}>Tweet it!</a>
          </div>
        </div>

      </header>
    </div >
  );
}

export default App;
