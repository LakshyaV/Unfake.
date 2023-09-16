//@ts-nocheck
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import QRCode from "react-qr-code";
import axios from "axios";

export default function About() {
    return (
        <>
            <Head>
                <title>Unfaked</title>
                <meta name="description" content="codex" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-row min-h-screen justify-center w-full">
                <div className="w-full text-start flex flex-col gap-5 h-full">
                    <h2 className="font-bold text-5xl text-center">About</h2>
                    <div className="text-left flex flex-col gap-3 justify-center items-center h-full w-full">
                        <h3 className="font-bold">Our purpose</h3>
                        <p>The purpose of our product</p>
                    </div>
                </div>
            </main>
        </>
    );
}
