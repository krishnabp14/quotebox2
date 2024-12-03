'use client'
import React from 'react'
import { useSession } from 'next-auth/react';

import ProfileComponent from '@components/Profile';

const Profile = () => {

    const [quotes, setQuotes] = React.useState([]);
    const { data: session} = useSession();

    const fetchQuotes = async () => {
        const response = await fetch(`http://localhost:3000/api/quotes/${session?.user.id}/all`);
        const quotesResponse = await response.json();

        setQuotes(quotesResponse);
    }

    React.useEffect(() => {
        fetchQuotes();
    }, [])

  return (
    <ProfileComponent name="My" quotes={quotes} />
  )
}

export default Profile;