import Axios from "axios"
import React, { useState, useEffect } from "react"
import baseUrl from "../components/baseUrl"
import Layout from "../components/layout"
import ManagerCard from '../components/managerCard'
import "../styles/managerPage.css"

function Managers() {

  const [managers, setManagers] = useState([])

  useEffect(() => {
    Axios.get(`${baseUrl}/managers`)
      .then(jsonRes => {
        setManagers(jsonRes.data)
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
            <h2 className="p-6">MANAGERS</h2>
          </div>
        
        </div>
      </div>
    

      <div className="customerList mt-9 grid grid-cols-12">
      {managers.length !== 0 ? (
            managers.map(manager => {
              return (
                <div className="col-span-10 col-start-2 md:col-span-3 ">
                  <ManagerCard name={manager.name} />
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

export default Managers