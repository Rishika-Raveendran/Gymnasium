import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import "../styles/customerPage.css"
import Axios from "axios"
import baseUrl from "../components/baseUrl"
import CustomerCard from "../components/customerCard"

function Customers() {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    Axios.get(`${baseUrl}/customers`)
      .then(jsonRes => {
        console.log(jsonRes.data)
        setCustomers(jsonRes.data)
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
              <h2 className="p-6">CUSTOMERS</h2>
            </div>
          </div>
        </div>

        <div className="customerList mt-9 grid grid-cols-12">
          {customers.length !== 0 ? (
            customers.map(customer => {
              return (
                <div className="col-span-10 col-start-2 md:col-span-3 ">
                  <CustomerCard
                    name={customer.name}
                    fees={customer.payment}
                    contact={customer.contact}
                    gender={customer.gender}
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

export default Customers
