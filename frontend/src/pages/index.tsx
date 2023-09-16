import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unfaked</title>
        <meta name="description" content="codex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-row min-h-screen justify-center items-center">
        <div className="mb-32 flex flex-col gap-5">
          <h1 className="font-bold text-5xl">Know your products.</h1>
          <div className="space-y-0 flex gap-1">
            <p className="text-lg">Easy verification in</p>
            <h1
              className="font-extrabold text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
              your pocket.
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}