import React from "react";
import "../styles/overviewCard.css";

function OverviewCards({  stats, text }) {
 
  return (
    <div>
      <div class="p-6 grandparent ml-0 md:ml-9 w-full md:w-[65vw]">
        <div class="parent rounded-lg ">
          <div class="card p-6 ">
            <h2 >{stats}</h2>
            <p >{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewCards
