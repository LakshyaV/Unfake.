//@ts-nocheck
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import QRCode from "react-qr-code";
import axios from "axios";

export default function Scan() {
    const [productName, setProductName] = useState('');
    const [productNum, setProductNum] = useState(0);
    const [description, setDescription] = useState('');
    const [productIds, setProductIds] = useState([]);
    return (
        <>
            <Head>
                <title>Unfaked</title>
                <meta name="description" content="codex" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-row min-h-screen justify-center w-full">
                <div className="flex flex-col gap-5 h-full">
                    <h2 className="font-bold text-5xl text-center">Make QR Codes</h2>
                    <div className="flex flex-col gap-3 justify-center items-center h-full w-full">
                        <div className="flex flex-row gap-2 items-center">
                            <label>Product Name:</label>
                            <input onChange={(e) => {
                                setProductName(e.target.value);
                            }} className="border rounded-lg border-slate-300 px-2 py-1" type="text" placeholder="Enter product name..." />
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <label>Product Number:</label>
                            <input onChange={(e) => {
                                setProductNum(e.target.value);
                            }} className="border rounded-lg border-slate-300 px-2 py-1" type="number" placeholder="Enter product amount" />
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <label>Description:</label>
                            <input onChange={(e) => {
                                setDescription(e.target.value);
                            }} className="border rounded-lg border-slate-300 px-2 py-1" type="textarea" placeholder="Description" />
                        </div>
                        <div>
                            <button onClick={async (e) => {
                                // productName, productNum
                                await axios.post("http://localhost:8080/make", { productName: productName, amount: parseInt(productNum) }).then((value) => {
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
                                <img src={`http://localhost:8080/static/block_${item}_qr.png`} />
                            )
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}