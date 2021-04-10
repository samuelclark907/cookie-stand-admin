import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [cookieStand, setCookieStand] = useState('')
  function formHandler(event){
    event.preventDefault();
    const formData = new FormData(event.target)
    const cookieStand = JSON.stringify(Object.fromEntries(formData))
    setCookieStand(cookieStand);

  }
  // const [reply, setReply] = useState("Ask Me Anything!")

  // function questionAskedHandler(event){
  //   event.preventDefault();
  //   // alert(event.target.question.value)
  //   const randomReply = Math.random() > .5 ? "Yes" : "No";

  //   setReply(randomReply)
  //   setQuestion(event.target.question.value)
  

  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Cookie Stand Admin"/>

      <main className="w-2/3 m-auto">
         <form onSubmit={formHandler} name="formData" className="grid grid-cols-8 gap-1 mt-4 mb-4 bg-green-500">
          <legend className="col-span-3 col-start-4 m-2 text-2xl">Create Cookie Stand</legend>
          <label className="col-span-1 col-start-1 row-start-2 ml-6" for='location'>Location</label>
          <input className="col-span-7 col-start-2 row-start-2 mr-4 text-sm" name='location'></input>

          <label className="col-span-2 col-start-1 row-start-3 text-sm text-center" for='min_cust'>Minimum Customers per Hour</label>
          <input className="col-span-2 col-start-1 row-start-4 mb-4 ml-2 mr-2 text-sm" name='min_Customers'></input>

          <label className="col-span-2 col-start-3 row-start-3 text-sm text-center" for='max_cust'>Maximum Customers per Hour</label>
          <input className="col-span-2 col-start-3 row-start-4 mb-4 ml-2 mr-2 text-sm" name='max_Customers'></input>

          <label className="col-span-2 col-start-5 row-start-3 text-sm text-center" for='avg_per'>Average Cookies per Sale</label>
          <input className="col-span-2 col-start-5 row-start-4 mb-4 ml-2 mr-2 text-sm" name='avg_Cookies'></input>

          <button className="col-span-2 col-start-7 row-span-2 row-start-3 mt-2 mb-2 ml-2 mr-4 bg-green-700" >Create</button>
        </form>
        <p className="p-3 mt-3 mb-3 text-center">{cookieStand}</p>


      </main>

      <footer className="p-5 bg-green-500 h-30">
        <p className="float-left pb-5">@2021</p>
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
