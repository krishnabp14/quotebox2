import Feed from '../components/Feed';
import React from 'react'

const page = () => {
  return (
    <section className='w-full flex-center flex flex-col max-w-3xl'>
        <h1 className="head_text text-center">Inspire. Share. Grow.</h1>
        <p className="desc text-center">"Welcome to QuoteBox, the ultimate platform to discover, create, and share the quotes that inspire you. Whether you’re looking for daily motivation, profound wisdom, or just a good laugh, our curated collection of quotes is designed to uplift and engage. Join our community of like-minded individuals and add your own favorite quotes to spread the positivity!"</p>

        <Feed />
    
    </section>
  )
}

export default page