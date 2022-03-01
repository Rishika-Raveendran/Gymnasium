import Axios from "axios"
import React, { useState, useEffect } from "react"
import baseUrl from "../components/baseUrl"
import Layout from "../components/layout"
import TrainerCard from "../components/trainerCard"
import "../styles/trainerPage.css"
import generatePDF from "../components/generatePDF.js"
import { FaArrowCircleDown } from "react-icons/fa"



function Trainers() {
  const [trainers, setTrainers] = useState([])
  

  useEffect(() => {
    Axios.get(`${baseUrl}/trainers`)
      .then(jsonRes => {
        // console.log(jsonRes.data)
        setTrainers(jsonRes.data)
      })
      .catch(err => alert("Error fetching data"))
  }, [])

  const findTrainers = gender => {
    let data = []
    let docName=""
    let docText=""
    if (gender === "female") {
      data = trainers.filter(val => {
        if (val.gender=="Female") {
          return val
        }
      })
      docName="FemaleTrainers"
      docText="Female trainers"
    }
    else{
      data = trainers.filter(val => {
        if (val.gender==="Male") {
          return val
        }
      })
      docName="MaleTrainers"
      docText="Male trainers"
    }

    
    generatePDF(data,docName,docText,"trainer")
  }


  return (
    <Layout>
      <div className="customerPage">
        <div className="grid grid-rows-1 mainRow">
          <div className="grid grid-cols-12">
            <div className="col-span-4 col-start-1 ">
              {" "}
              <h2 className="p-6 flex">TRAINERS<button className="ml-4 p-2"  onClick={()=> generatePDF(trainers,"Trainers", "Trainer List","general") }><FaArrowCircleDown/></button></h2>
            </div>
            <div className="col-span-2 col-start-8 p-6">
              <button
                className="female w-full "
                onClick={() => findTrainers("female")}
              >
               Female
              </button>
            </div>
            <div className="col-span-2 col-start-10 p-6">
              <button
                className="male w-full"
                onClick={() => findTrainers("male")}
              >
                Male
              </button>
            </div>
          </div>
        </div>

        <div className="customerList mt-9 grid grid-cols-12">
          {trainers.length !== 0 ? (
            trainers.map(trainer => {
              return (
                <div className="col-span-10 col-start-2 md:col-span-3 ">
                  <TrainerCard name={trainer.name} gender={trainer.gender} id={trainer.tid}/>
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

export default Trainers
