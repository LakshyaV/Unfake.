//@ts-nocheck
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import QRCode from "react-qr-code";
import axios from "axios";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true, // TODO: fix this
});

export default function Scan() {
    const [productName, setProductName] = useState('');
    const [productNum, setProductNum] = useState(0);
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [productIds, setProductIds] = useState([]);
    return (
        <>
            <Head>
                <title>Unfake</title>
                <meta name="description" content="codex" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-row min-h-screen justify-center w-full">
                <div className="flex flex-col gap-5 h-full">
                    <h1
                        className="pl-10 font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Make a QR Code.
                    </h1>
                    <div className="flex flex-col gap-3 justify-start items-center h-full w-full">
                        <div className="flex flex-row gap-2 items-center">
                            <label>Product Name:</label>
                            <input onChange={(e) => {
                                setProductName(e.target.value);
                            }} className="border rounded-lg border-slate-300 px-2 py-1" type="text" placeholder="Enter product name..." />
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <label>Number of Products:</label>
                            <input onChange={(e) => {
                                setProductNum(e.target.value);
                            }} className="border rounded-lg border-slate-300 px-2 py-1" type="number" placeholder="Enter product amount" />
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <label>Location:</label>
                            <input onChange={(e) => {
                                setLocation(e.target.value);
                            }} className="border rounded-lg border-slate-300 px-2 py-1" type="text" placeholder="Enter a location." />
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <label>Description:</label>
                            <textarea onChange={(e) => {
                                setDescription(e.target.value);
                            }} id="description" className="border rounded-lg border-slate-300 px-2 h-full" placeholder="Description"></textarea>
                            <button className="bg-purple-500 rounded-2xl text-white px-2 py-1" onClick={async (e) => {
                                 const completion = await openai.chat.completions.create({
                                    messages: [{ role: 'user', content: `Write a description for ${productName}` }],
                                    model: 'gpt-3.5-turbo',
                                  });
                                  document.getElementById("description").innerText = completion.choices[0].message.content;
                            }}>Generate</button>
                        </div>
                        <div>
                            <button onClick={async (e) => {
                                // productName, productNum
                                await axios.post("http://localhost:8080/make", { productName: productName, amount: parseInt(productNum), location: location }).then((value) => {
                                    console.log(value.data);
                                    setProductIds(value.data.data.map((item) => {
                                        return item.productId;
                                    }));
                                })
                            }} className="bg-blue-500 font-bold text-white px-4 rounded-3xl py-1">
                                Make
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        {productIds.map((item, index) => {
                            return (
                                <>
                                    <a href={`http://localhost:8080/static/block_${item}_qr.png`} download>
                                        <button>
                                            <img src={`http://localhost:8080/static/block_${item}_qr.png`} />
                                        </button>
                                    </a>
                                </>
                            )
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}