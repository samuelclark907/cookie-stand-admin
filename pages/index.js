import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [question, setQuestion] = useState('Your Question Will Go Here!')
  const [reply, setReply] = useState("Ask Me Anything!")

  function questionAskedHandler(event){
    event.preventDefault();
    // alert(event.target.question.value)
    const randomReply = Math.random() > .5 ? "Yes" : "No";

    setReply(randomReply)
    setQuestion(event.target.question.value)
  }

  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Cookie Stand Admin"/>
      {/* <header className="flex p-4 bg-gray-500 text-gray-50">
        <h1 className="text-4xl border border-color-black">Magic 8 Ball</h1>
      </header> */}

      <main className="w-2/3 m-auto">
         <form className="mt-4 grid gap-1 bg-green-500 grid-cols-8 mb-4">
          <legend className="col-start-4 col-span-3 text-2xl m-2">Create Cookie Stand</legend>
          <label className="row-start-2 col-start-1 col-span-1 ml-8" for='location'>Location</label>
          <input className="row-start-2 col-start-2 col-span-7 text-sm mr-4" name='location'></input>

          <label className="row-start-3 col-start-1 col-span-2 text-sm text-center" for='min_cust'>Minimum Customers per Hour</label>
          <input className="row-start-4 col-start-1 col-span-2 text-sm mr-2 ml-2 mb-4" name='min_cust'></input>

          <label className="row-start-3 col-start-3 col-span-2 text-sm text-center" for='max_cust'>Maximum Customers per Hour</label>
          <input className="row-start-4 col-start-3 col-span-2 text-sm mr-2 ml-2 mb-4" name='max_cust'></input>

          <label className="row-start-3 col-start-5 col-span-2 text-sm text-center" for='avg_per'>Average Cookies per Sale</label>
          <input className="row-start-4 col-start-5 col-span-2 text-sm mr-2 ml-2 mb-4" name='avg_per'></input>

          <button className="row-start-3 col-start-7 col-span-2 row-span-2 bg-green-700 mr-4 ml-2 mb-2 mt-2" >Create</button>
        </form>


      </main>

      <footer className="h-30 p-5 bg-green-500">
        <p className="pb-5 float-left">@2021</p>
      </footer>
    </div>
  )

  function Header(props){
    return(
      <header className="flex p-4 bg-green-400">
        <h1 className="text-4xl border border-color-black">{props.title}</h1>
      </header>
    )
  }
}
