
import Navigation from "./components/nav";
import Head from "next/head";

const description = `Aster Electric offers quality electrical services in 
Victoria, BC. Our electricians provide residential and commercial electrical
installation and repairs.`
export default function Index() {
  return (
    <main>
      <Head>
        <title>AsterElectric~|~Home</title>
        <meta name="description" content={description}></meta>
      </Head>
      <div>
        <Navigation />
        <p>Hello Next.js</p>
      </div>
    </main>
  );
}
