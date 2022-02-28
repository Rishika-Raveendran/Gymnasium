import React  from "react"
import Layout from "../components/layout"
import OverviewCards from "../components/overviewCards"
import "../styles/global.css"

function App() {
 

  let route;

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
              
              >
                export
              </button>
            </div>
          </div>
        </div>
     
     <OverviewCards stats={45} text={"CUSTOMERS"} />
       
     <OverviewCards stats={45} text={"TRAINERS"} />
     <OverviewCards stats={45} text={"GUARDS"} />
     <OverviewCards stats={45} text={"MANAGERS"} />
       
   </div>
     </Layout>
    );
  
  return route;

  
}

export default App
