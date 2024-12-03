'use client'

import { useSession } from 'next-auth/react'
import Form from '@components/Form'
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const [quote, setQuote] = React.useState({
        quoteDescription: '',
        quoteTag: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    async function handleOnSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:3000/api/quote/new', {
                method: 'POST',
                body: JSON.stringify({
                    userId: session?.user.id,
                    quoteDescription: quote?.quoteDescription,
                    quoteTag: quote?.quoteTag
                })
            })

            if(response.ok) {
                router.push('/');
            }
        } catch(error) {
            alert('Error submitting quote: ' + quoteDescription);
        } finally {
            setIsSubmitting(false);
        }
    };

  return (
    <Form quote={quote} setQuote={setQuote} isSubmitting={isSubmitting} setIsSubmitting={setIsSubmitting} type={"Create"} handleOnSubmit={handleOnSubmit}/>
  )
}

export default page;