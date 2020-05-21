import Link from "next/link";
import Head from "next/head";

export default function Movie() {
  return (
    <>
      <Head>
        <title>Movie</title>
      </Head>
      <h1>This is a Movie component</h1>
      <h2>
        <Link href="/">
          <a href="">Return to home page</a>
        </Link>
      </h2>
    </>
  );
}
