'use client';

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {

    const isUserLoggedIn = false;
    const { data: session} = useSession();
    console.log(session);
    const [providers, setProviders] = React.useState([]);
    const [isDropdownOpen, setIsDropDownOpen] = React.useState(false);

    React.useEffect(() => {
        const setNextAuthProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }

        // setNextAuthProviders();
    }, [])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href='/' className="flex gap-2 flex-center">
            <Image src="/assets/images/logo.svg" width="30" height="30" alt="QuoteBox Logo" className="object-contain" />
            <p className="logo_text">Quote Box</p>
        </Link>

        {/* Desktop */}
        
        <div className="sm:flex hidden">
            {session?.user ? 
            <div className="flex gap-2 md:gap-5">
                <Link href="/create-quote" className="black_btn">Share Quote</Link>
                <Link href="/" className="outline_btn" onClick={() => signOut()}>Sign out</Link>

                <Link href="/profile"><Image src={session?.user.image} width="30" height="30" alt="Profile Picture" className="object-contain rounded-full" /></Link>
            </div> : <>
                <Link href="/" className="outline_btn" onClick={() => signIn()}>Sign In</Link>
                </>}
        </div>

        { /* Mobile */}

        <div className="sm:hidden flex relative">
            {session?.user ? 
            <div>
                <Image src={session?.user?.image} width="30" height="30" alt="Dropdown Image" className="rounded-full" 
                    onClick={() => setIsDropDownOpen((prev) => !prev)}
                />

                {isDropdownOpen && <div className="dropdown">
                    <Link className="dropdown_link" href="/create-quote" onClick={() => setIsDropDownOpen(false)}>Share Quote</Link>
                    <Link className="dropdown_link" href="/profile" onClick={() => setIsDropDownOpen(false)}>
                        My Profile
                    </Link>

                    <button className="black_btn mt-5" onClick={() => {
                        setIsDropDownOpen(false);
                        signOut();
                    }}>Sign out</button>
                </div>
                }
            </div> : <div></div>}
        </div>


    </nav>
  )
}

export default Nav