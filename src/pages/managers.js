import React from 'react'

import Layout from "../components/layout"
import "../styles/managerPage.css"

function Managers() {
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
       {<div>Hey</div>}
      </div>
     
    </div>
  </Layout>
  )
}

export default Managers