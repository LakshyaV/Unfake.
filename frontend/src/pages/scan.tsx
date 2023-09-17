//@ts-nocheck
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { QrReader } from 'react-qr-reader';
import axios from "axios";



export default function Scan() {
    const [data, setData] = useState('No result');
    const [loading, setLoading] = useState(true);
    return (
        <>
            <Head>
                <title>Unfake</title>
                <meta name="description" content="codex" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="justify-center items-center">
                <diva className="pl-30">
                    <h1
                        className="pl-10 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Scan.
                    </h1>
                </diva>
                <div className="h-screen flex items-center justify-center">
                    <div className="w-1/2 h-full">
                        <QrReader
                            scanDelay={1000}
                            onResult={async (result, error) => {
                                if (!!result) {
                                    setData(result?.text);
                                    await axios.post("http://localhost:8080/scan", { data: result.text }).then((value) => {
                                        if (value.data.found == false) {
                                            window.open("http://localhost:3000/fake");
                                        } else {
                                            window.open("http://localhost:3000/real");
                                        }
                                    })
                                }
                                if (!!error) {
                                    console.info(error);
                                }
                            }}
                        />
                        <p className="hidden">{data}</p>
                    </div>
                </div>
                <div>

                </div>
            </main>
        </>
    );
}
