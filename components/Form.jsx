import React from 'react'
import Link from 'next/link'

const Form = ({
    quote,
    setQuote,
    isSubmitting,
    setIsSubmitting, 
    type,
    handleOnSubmit,
}) => {
  return (
    <div className="flex-start flex-col w-full max-w-full">
        <h1 className="text-3xl font-bold">Share Quote</h1>
        <p className="text-sm text-gray-400/70 mt-2">Share the quotes that inspire you. Whether you’re looking for daily motivation, profound wisdom, or just a good laugh, our curated collection of quotes is designed to uplift and engage. Join our community of like-minded individuals and add your own favorite quotes to spread the positivity</p>
        <form className="glassmorphism mt-4 flex flex-col w-full gap-4" onSubmit={handleOnSubmit}>
           <label className="text-md text-gray-400">
                Your Quote
           </label>
           <textarea className="p-2 rounded-lg form_textarea" placeholder="Start Typing..." onChange={(e) => setQuote({...quote, quoteDescription: e.target.value})}/>

           <label className="text-md mt-8 text-gray-400">
                Tags (#devotional, #inspiring, #fun, #religious, #creative)
           </label>
           <input className="p-2 rounded-lg form_input" placeholder="#inspiration" onChange={(e) => setQuote({...quote, quoteTag: e.target.value})} />
        </form>
        <div className="flex-end w-full gap-4 mt-6">
            <Link href="/">Cancel</Link>
            <button className="px-4 py-2 rounded-full text-white bg-slate-500" onClick={handleOnSubmit}>Share</button>
        </div>
    </div>
  )
}

export default Form