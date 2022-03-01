import React from 'react'
import Axios from "axios"

function GuardCard(props) {
  return (
    <div class="p-10">  
    <div class="max-w-full rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.name}</div>
        <p class="text-gray-700 text-base">
          {props.shift}
        </p>
      </div>
      
    </div>
  </div>
  )
}

export default GuardCard