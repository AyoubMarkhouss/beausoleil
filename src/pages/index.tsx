import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import Homepage from "@/sections/Homepage";
import Places from "@/sections/Places";
import { Footer } from "@/components/Footer";
import { Aboutus } from "@/sections/Aboutus";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Beausoleil</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
      <Places/>
      <Aboutus/> 
      <Footer/>
    </>
  );
}
