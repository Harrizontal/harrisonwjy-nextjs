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

<p className="text-left text-xl w-full my-4">I spend most of my time working with modern mobile technologies such as <a href="https://www.android.com/" className="underline" target="_blank" >Android</a> and <a href="https://flutter.dev/" className="underline" target="_blank">Flutter</a>. I also do dabble with Web.</p> 

<p className="text-left text-xl w-full my-4">I’m passionate about using software to create meaningful products and experiences. You can check out my #buildinginpublic at my <a href="http://twitter.com/harrizontal" className="underline text-blue-400" target="_blank">Twitter</a> where I build interesting (and sometimes weird) software products such as <a href="http://frablube.com" className="underline text-green-700" target="_blank">Frablube.com</a>, and occasionally retweet memes. Sometimes, I also do blogging on life and tech at <a href="http://harrizontal.com" className="underline text-teal-400" target="_blank">harrizontal.com</a>.</p>

<p className="text-left text-xl w-full my-4">In my previous job, I'm Android Engineer for <a href="http://www.mindfi.co" className="underline text-purple-500" target="_blank">MindFi (YC21)</a> where I headed the migration from Flutter to Native Android Kotlin. I also headed and involved (heavily) in other engineering and product related initiatives such as instrumenting of product analytics, data analytics, internal tools, dashboard and report generation.</p>

<p className="text-left text-xl w-full my-4">If I am away from my computer, you can typically find me walking around Marina Bay Sands, Singapore almost every night, with my earphones listening to <a href='https://open.spotify.com/playlist/5IrWJmIwRls9Zkp099YG2Y?si=f9d7f94c774a4feb' className='underline text-green-400' target="_blank">my cruated Spotify playlist since 2013</a>.</p>

<p className="text-left text-xl w-full my-4">You can find me online on most platforms with the handle @harrizontal, including <a href="https://www.linkedin.com/in/harrison-wong-jun-yong/" className="underline text-blue-600" target="_blank">LinkedIn</a>, <a href="http://github.com/harrizontal" className="underline text-black" target="_blank">GitHub</a>, <a href="http://twitter.com/harrizontal" className="underline text-blue-400" target="_blank">Twitter</a> and <a href="http://dribbble.com/harrizontal" className="underline text-pink-600" target="_blank">Dribbble</a>.</p>

<p className="text-left text-xl w-full my-4">Alternatively, drop me an email at harrisonwjy@hotmail.com</p>
      </main>

      <footer className="flex h-24 w-full items-center justify-center">
      Last updated on 15 Jul 2022 by Harrison Wong 
      </footer>
    </div>
  )
}

export default Home
