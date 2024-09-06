//55.13 week 3 kdurkin next.js tutorial
//https://nextjs.org/learn-pages-router/basics/navigate-between-pages/pages-in-nextjs

import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost()  {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
}