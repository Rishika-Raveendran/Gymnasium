import React, { useState, useEffect } from "react"
import GuardCard from "../components/guardCard"
import Layout from "../components/layout"
import "../styles/guardsPage.css"
import Axios from "axios"
import baseUrl from "../components/baseUrl"
import generatePDF from "../components/generatePDF.js"
import { FaArrowCircleDown } from "react-icons/fa"


function Guards() {
  const [guards, setGuards] = useState([])

  useEffect(() => {
    Axios.get(`${baseUrl}/guards`)
      .then(jsonRes => {
        // console.log(jsonRes.data)
        setGuards(jsonRes.data)
      })
      .catch(err => alert("Error fetching data"))
  }, [])

  const findGuards = shift => {
    let data = []
    let docName=""
    let docText=""
    if (shift === "day") {
      data = guards.filter(val => {
        if (val.shift.includes("am")) {
          return val
        }
      })
      docName="DayShift"
      docText="Guards on day shift"
    }
    else{
      data = guards.filter(val => {
        if (val.shift.includes("pm")) {
          return val
        }
      })
      docName="NightShift"
      docText="Guards on night shift"
    }
    generatePDF(data,docName,docText,"guards")
  }

  return (
    <Layout>
      <div className="customerPage">
        <div className="grid grid-rows-1 mainRow">
          <div className="grid grid-cols-12">
            <div className="col-span-4 col-start-1">
              {" "}
              <h2 className="p-6 flex">GUARDS<button className="ml-4 p-2" onClick={()=> generatePDF(guards,"Guards", "Guard List","general") }><FaArrowCircleDown/></button></h2>
            </div>
            <div className="col-span-2 col-start-8 p-6">
              <button
                className="shift1 w-full "
                onClick={() => findGuards("day")}
              >
                Day
              </button>
            </div>
            <div className="col-span-2 col-start-10 p-6">
              <button
                className="shift2 w-full"
                onClick={() => findGuards("night")}
              >
                Night
              </button>
            </div>
          </div>
        </div>

        <div className="customerList mt-9 grid grid-cols-12">
          {guards.length !== 0 ? (
            guards.map(guard => {
              return (
                <div className="col-span-10 col-start-2 md:col-span-3 ">
                  <GuardCard name={guard.name} shift={guard.shift} />
                </div>
              )
            })
          ) : (
            <div>Loading..</div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Guards
