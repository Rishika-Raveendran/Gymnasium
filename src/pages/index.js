import React,{useState,useEffect} from "react"
import Layout from "../components/layout"
import OverviewCards from "../components/overviewCards"
import "../styles/global.css"
import Axios from "axios"
import baseUrl from "../components/baseUrl"
import generatePDF from "../components/generatePDF.JS"


function App() {
  const [users, setUsers] = useState(0)
  const [trainers, setTrainers] = useState(0)
  const [guards, setGuard] = useState(0)
  const [managers, setManagers] = useState(0)
  useEffect(() => {
    //fetching participant count in each category
    Axios.get(`${baseUrl}/count`)
      .then(jsonres => {
       setUsers(jsonres.data.customers)
       setTrainers(jsonres.data.trainers)
        setGuard(jsonres.data.guards)
        setManagers(jsonres.data.managers)
      })
      .catch(err => {
        alert("Error fetching data")
      })
  }, [])

  let route

  route = (
    <Layout>
      <div className="overview">
        <div className="grid grid-rows-1 ">
          <div className="grid grid-cols-12">
            <div className="col-span-9 col-start-1">
              {" "}
              <h2 className="p-6 greeting">OVERVIEW</h2>
            </div>
            <div className="col-span-3 col-start-10 p-6">
              {" "}
              <button
                className="modalButton uppercase text-white active:bg-green-600  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={()=>{
                  generatePDF([{users:users,trainers:trainers,guards:guards,managers:managers}], "OverallCount", "Overview Report","count");
                }}
              >
                export
              </button>
            </div>
          </div>
        </div>

        <OverviewCards stats={users} text={"CUSTOMERS"} />

        <OverviewCards stats={trainers} text={"TRAINERS"} />
        <OverviewCards stats={guards} text={"GUARDS"} />
        <OverviewCards stats={managers} text={"MANAGERS"} />
      </div>
    </Layout>
  )

  return route
}

export default App
