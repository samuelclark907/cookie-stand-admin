import { data } from 'autoprefixer'
import Head from 'next/head'
import { useState } from 'react'

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

export default function Home() {

  const [cookieStand, setCookieStand] = useState('')
  function formHandler(event){
    event.preventDefault();
    const formData = new FormData(event.target)
    const cookieStand = JSON.stringify(Object.fromEntries(formData))
    setCookieStand(cookieStand);

  }
  

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

        <ResponseTable />


      </main>

      <footer className="p-2 bg-green-500 h-30">
        <p className="p-1">Locations World Wide</p>
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

  function ResponseTable(props){
    return(
      <table className="w-1/2 mx-auto my-4">
        <thead>
          <tr>
            <th className="border border-gray-700">No</th>
            <th className="border border-gray-700">Question</th>
            <th className="border border-gray-700">Response</th>
          </tr>
        </thead>
        <tbody>
          {props.hours.map(item =>(
            <tr className="odd:bg-red-500">
              <td className="pl-2 border border-gray-700">{item.id}</td>
              <td className="pl-2 border border-gray-700">{item.question}</td>
              <td className="pl-2 border border-gray-700">{item.reply}</td>
            </tr>
          ))}

        </tbody>
        
      </table>
    )
  }
}
