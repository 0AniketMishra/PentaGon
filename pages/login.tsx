import Head from 'next/head'
import React from 'react'
import { auth, provider } from '../firebase'
import { getAuth, signInWithPopup} from "firebase/auth";
import styles from '../styles/nav.module.css'

function login() {

    const signIn = () => {
        getAuth();
        signInWithPopup(auth, provider)
    }
    return (
        <div className="">
            <Head>
                <title>Login | PentaGon</title>
            </Head>
            <div className="">


                <button className='p-2 font-bold text-white text-xl bg-purple-800 rounded-lg' onClick={signIn}>Sign In Using Google</button>

            </div>
        </div>
    )
}

export default login