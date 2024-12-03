'use client';

import React from 'react'
import QuoteCard from './QuoteCard'

const QuoteListComponent = ({quotes}) => {
    return (
        <div className="prompt_layout">
            {
                quotes?.map((quote, index) => {
                    return (
                        <QuoteCard quote={quote} key={index} />
                    )
                })
            }    
        </div>
    )
}


const Feed = () => {
    const [quotes, setQuotes] = React.useState([]);

    const fetchQuotes = async () => {
        const response = await fetch("http://localhost:3000/api/quote");
        const data = await response.json();
        setQuotes(data);
    }

    console.log(quotes);

    React.useEffect(() => {
        fetchQuotes();
    }, [])

  return (
    <div>
        <QuoteListComponent quotes={quotes}/>
    </div>
  )
}

export default Feed