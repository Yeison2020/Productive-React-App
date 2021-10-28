import { useEffect, useState } from "react";
function Quote () {

    const [quotes, setQuotes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);


    const api_url = "http://api.quotable.io/random";

    useEffect(() => {
      fetch(api_url)
        .then((resp) => resp.json())
        .then((data) => {
          setQuotes(data);
          setIsLoaded(true)
        });
    }, []);

    if(!isLoaded) return <h3>Loading...</h3>

    return (
        <>
        <p>" {quotes.content} "</p>
        <p>Author: {quotes.author}</p>
        </>

    )

}

export default Quote