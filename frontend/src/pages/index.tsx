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
      <main className="flex flex-row min-h-screen justify-center items-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 14 }}  className="mb-32 flex flex-col gap-5">
          <h1 className="font-extrabold text-3xl sm:text-5xl">Know your products.</h1>
          <div className="space-y-0 flex gap-1">
            <p className="text-md sm:text-lg">Easy verification in</p>
            <h1
              className="font-extrabold text-transparent text-md sm:text-lg bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              your pocket.
            </h1>
          </div>
        </motion.div>
      </main>
    </>
  );
}