import React, {useState,useEffect} from 'react'

import GuardCard from "../components/guardCard"

import Layout from "../components/layout"
import "../styles/guardsPage.css"
import  Axios  from 'axios'
import baseUrl from '../components/baseUrl'

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
  return (
    <Layout>
      <div className="customerPage">
        <div className="grid grid-rows-1 mainRow">
          <div className="grid grid-cols-12">
            <div className="col-span-9 col-start-1">
              {" "}
              <h2 className="p-6">GUARDS</h2>
            </div>
          </div>
        </div>

        <div className="customerList mt-9 grid grid-cols-12">
        {guards.length !== 0 ? (
            guards.map(guard => {
              return (
                <div className="col-span-10 col-start-2 md:col-span-3 ">
                  <GuardCard
                    name={guard.name}
                    shift={guard.shift}
                  />
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
