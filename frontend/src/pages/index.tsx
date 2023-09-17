import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect} from 'react';


function TextChangeAnimation() {
  const texts = ['Hello', 'Framer Motion', 'Text Animation'];
  const [displayTextIndex, setDisplayTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, []);
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Unfake</title>
        <meta name="description" content="codex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative gap-10 flex flex-row min-h-screen justify-center items-center z-100">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 14 }}  className="mb-32 flex flex-col gap-5">
          <h1 className="font-extrabold text-3xl sm:text-5xl">Know your products.</h1>
          <div className="space-y-0 flex gap-1">
            <p className="text-xl sm:text-lg">Easy verification in</p>
            <h1
              className="font-extrabold text-transparent text-xl sm:text-lg bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              your pocket.
            </h1>
          </div>
        </motion.div>
        <img src="/blob1.svg" className="opacity-30 absolute left-5 top-0 z-0"/>
        <img src="/blob2.svg" className="opacity-30 absolute right-20 top-20 z-0"/>
        <img src="/blob4.svg" className="opacity-30 absolute left-30 bottom-40 z-0"/>
        <div>
          <img width={512} height={512} src={"landing_img.svg"} />
        </div>
      </main>

<div className="flex justify-center p-10">
      <div className="p-20 mb-30 w-[80%] outline outline-2 outline-color">
        <h2 className="font-bold text-5xl text-center p-10">About <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Unfake.</span></h2>
        <p>
          Unfake is a versatile website and mobile app designed to assist users in identifying counterfeit versions of products quickly and efficiently. Our intuitive scanning process utilizes QR codes to verify the authenticity of real products, helping you make informed purchasing decisions and avoid falling victim to counterfeit goods.
        </p>
        </div>
</div>
    </>
  );
}