import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import { Footer } from "@/components/Footer";
import Searchbarupdate from "@/sections/results page/Searchbarupdate";
import Navigationbar from "@/components/Navigationbar";
import Ticketsfilters from "@/sections/results page/Ticketsfilters";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Beausoleil - Results</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigationbar />
      <div className="flex  lg:h-64 items-center justify-center bg-textblue">
        <Searchbarupdate />
      </div>
      <Ticketsfilters/>
      <Footer />
    </>
  );
}
