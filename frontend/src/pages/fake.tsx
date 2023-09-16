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
            <main className="flex flex-row min-h-screen justify-center items-center mb-32 w-full">
                <div className="flex flex-col gap-10">
                    <h1
                        className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                    >
                        The product is fake.
                    </h1>
                    <div className="flex flex-col gap-3">
                    </div>
                </div>
            </main>
        </>
    );
}
