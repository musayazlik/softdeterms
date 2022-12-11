import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <div className='App'>
      <Head>
        <title>SoftDevWords - Musa Yazlık</title>
        <meta name='description' content='Generated by SoftDevWords' />
        <meta name='author' content='Musa Yazlık' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <main className='flex mb-20 '>
          <ul className='background bg-indigo-700 dark:bg-[#1b1947] '>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </main>
      </Layout>
    </div>
  )
}
