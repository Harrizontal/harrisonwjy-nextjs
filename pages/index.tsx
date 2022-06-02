import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='py-16'>
      <Head>
        <title>Harrisonwjy</title>
        <link rel="icon" href="/harrizontal2.ico" />
      </Head>

      <main className='px-4 sm:px-6 lg:px-12 lg:w-1/2 lg:mx-auto'>

       <p className="text-3xl text-left w-full">Hi, I’m Harrison Wong, a Software Engineer from Singapore.</p>

<p className="text-left text-xl w-full my-4">I spend most of my time working with modern mobile technologies such as <a href="https://www.android.com/" className="underline" target="_blank" >Android</a> and <a href="https://flutter.dev/" className="underline" target="_blank">Flutter</a>.</p>

<p className="text-left text-xl w-full my-4">I’m passionate about using software to create meaningful products and experiences. You can check out my #buildinginpublic at my <a href="http://twitter.com/harrizontal" className="underline" target="_blank">Twitter</a> where I build interesting (and sometimes weird) software products such as beachsituation.com and <a href="http://frablube.com" className="underline" target="_blank">Frablube.com</a>. Sometimes, I also do blogging on life and tech at <a href="http://harrizontal.com" className="underline" target="_blank">harrizontal.com</a>.</p>

<p className="text-left text-xl w-full my-4">In my previous job, I'm Android Engineer for <a href="http://www.mindfi.co" className="underline" target="_blank">MindFi YC21</a> where I headed the migration from Flutter to Native Android Kotlin. I also developed other web software engineering projects such as dashboard.</p>

<p className="text-left text-xl w-full my-4">Aside from siting on my lovely wooden chair and staring on my computer's screen, you can typically find me walking around Marina Bay Sands, Singapore every alternate night for exercise or unvoluntary become a tour guide.</p>

<p className="text-left text-xl w-full my-4">You can find me online on most platforms with the handle @harrizontal, including <a href="http://github.com/harrizontal" className="underline text-black" target="_blank">GitHub</a>, <a href="http://twitter.com/harrizontal" className="underline text-blue-600" target="_blank">Twitter</a> and <a href="http://dribbble.com/harrizontal" className="underline text-pink-600" target="_blank">Dribbble</a>. Alternatively, drop me an email at harrisonwjy@hotmail.com</p>
      </main>

      <footer className="flex h-24 w-full items-center justify-center">
      Last updated on 2 Jun 2022 by Harrison Wong 
      </footer>
    </div>
  )
}

export default Home
