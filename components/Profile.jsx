import React from 'react'
import QuoteCard from './QuoteCard'

const Profile = ({name, quotes}) => {
    console.log("quotes");
    console.log(quotes);
  return (
    <div className="items-start w-full">
        <h1 className="text-2xl font-bold blue_gradient">{name} Profile </h1>
        <div className="prompt_layout">
            {
                quotes?.map((quote) => {
                    return (
                        <QuoteCard quote={quote} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Profile