//@ts-nocheck
import { useState } from "react";
import Head from "next/head";

export default function Fake() {
    return (
        <>
            <Head>
                <title>Unfaked</title>
                <meta name="description" content="codex" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-row min-h-screen justify-center w-full">
                <div className="flex flex-col gap-10">

                    <h2 className="font-bold text-5xl text-center">The product is fake.</h2>
                    <div className="flex flex-col gap-3">
                    </div>
                </div>
            </main>
        </>
    );
}
