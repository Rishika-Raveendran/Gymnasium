import React from 'react'

function CustomerCard(props) {
  return (
    <div class="p-10">  
    <div class="max-w-full rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.name}</div>
        <p class="text-gray-700 text-base">
          {props.fee}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2 ">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.gender}</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.contact}</span>
      </div>
    </div>
  </div>
  )
}

export default CustomerCard