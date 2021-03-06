import Axios from "axios"
import React, { useState, useEffect } from "react"
import { FaArrowCircleDown } from "react-icons/fa"
import baseUrl from "./baseUrl"
import generatePDF from "./generatePDF.js"

function TrainerCard({ name, gender, id }) {
  const [data, setData] = useState([])
  const [count, setcount] = useState(0)
  const getCustomers = (id) => {
    Axios.get(`${baseUrl}/trainerCustomers?tid=${id}`)
      .then(jsonRes => {
        setData(jsonRes.data)
        // console.log(jsonRes.data)
        
      })
     
  }
  useEffect(() => {
    if(data.length!==0&count===0){
      generatePDF(
        data,
        "TCustomers",
        `Customers training under ${name}`,
        "customer"
      )
      setcount(1)
    }
    
  }, [data])
  

  return (
    <div class="p-10">
      <div class="max-w-full rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{name}</div>
        </div>
        <div class="px-6 pt-4 pb-2 ">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{gender}
          </span>
        </div>
        <div className="w-full flex justify-end">
          <button className="ml-auto" onClick={() => getCustomers(id)}>
            <FaArrowCircleDown />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TrainerCard
