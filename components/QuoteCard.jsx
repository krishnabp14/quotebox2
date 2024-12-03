import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const QuoteCard = ({quote}) => {
    const {data: session} = useSession();

    return (
    <div className="prompt_card">
        <div className="flex-between">
            <div className="flex gap-2">
                <Image src={quote?.creator?.image} width={40} height={40} alt="user_image" 
                    className="rounded-full"
                />
                <div className="flex flex-col">
                    <h1 className="text-gray-800 text-md font-semibold">{quote?.creator?.username}</h1>
                    <p className="text-gray-500 text-sm">{quote?.creator?.email}</p>
                </div>    
            </div>
            <div>
                <Image src={"/assets/icons/copy.svg"} width={20} height={20} alt="copy_btn" />
            </div>
        </div>
        <div className="flex flex-col mt-4">
            <p className="text-gray-950">{quote?.quote}</p>
            <p className="blue_gradient text-sm mt-4">{quote?.quoteTag}</p>
        </div>
    </div>
  )
}

export default QuoteCard