import Axios from "axios"
import React, { useState, useEffect } from "react"
import baseUrl from "../components/baseUrl"

import Layout from "../components/layout"
import TrainerCard from "../components/trainerCard"
import "../styles/trainerPage.css"

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

  return (
    <Layout>
      <div className="customerPage">
        <div className="grid grid-rows-1 mainRow">
          <div className="grid grid-cols-12">
            <div className="col-span-9 col-start-1">
              {" "}
              <h2 className="p-6">TRAINERS</h2>
            </div>
          </div>
        </div>

        <div className="customerList mt-9 grid grid-cols-12">
          {trainers.length !== 0 ? (
            trainers.map(trainer => {
              return (
                <div className="col-span-10 col-start-2 md:col-span-3 ">
                  <TrainerCard name={trainer.name} gender={trainer.gender} />
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
