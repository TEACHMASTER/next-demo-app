import React from 'react'
import { AppProps } from 'next/app'
import MainLayout from './layout/MainLayout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}
