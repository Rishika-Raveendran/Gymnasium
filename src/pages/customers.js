import React, {useState, useEffect } from "react"

import Layout from "../components/layout"
import "../styles/customerPage.css"
import Axios from 'axios'
import baseUrl from "../components/baseUrl"
import CustomerCard from "../components/customerCard"

function Customers() {
 
 
  


//   useEffect(() => {
//     let endpoint;
//     selectedCourse["name"]==="Yoga Circle"?( endpoint="yoga"):(endpoint="group");
//     Axios.get(`${baseUrl}/${endpoint}`).then(jsonRes=>{
//       setCustomers(jsonRes)
//    // console.log(jsonRes);
//    values= setCustomers.map((customer)=>{
//       return(
//       <div className="col-span-10 col-start-2 md:col-span-3 md:col-start-1">
//         <CustomerCard name={customer.name} time={customer.time} contact1={customer.contact1} contact2={customer.contact2} gender={customer.gender}/>
//       </div>  
//       )
//     })
//     })


//   }, [selectedCourse])
  
 

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
          <div className="col-span-10  md:col-span-4 ">
        <CustomerCard name="Rishika Raveendran" fee={2500} gender="Female" contact="9446203165"/>
        </div>
        <div className="col-span-10 col-start-2 md:col-span-4 ">
        <CustomerCard name="Rishika Raveendran" fee={2500} gender="Female" contact="9446203165"/>
        </div>
        <div className="col-span-10 md:col-span-4 ">
        <CustomerCard name="Rishika Raveendran" fee={2500} gender="Female" contact="9446203165"/>
        </div>
        <div className="col-span-10 md:col-span-4 ">
        <CustomerCard name="Rishika Raveendran" fee={2500} gender="Female" contact="9446203165"/>
        </div>
        <div className="col-span-10 md:col-span-4 ">
        <CustomerCard name="Rishika Raveendran" fee={2500} gender="Female" contact="9446203165"/>
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default Customers
