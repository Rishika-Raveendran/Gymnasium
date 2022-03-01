import React from 'react'

function ManagerCard(props) {
  return (
    <div class="p-10">  
    <div class="max-w-full rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.name}</div>
       
      </div>
     
    </div>
  </div>
  )
}

export default ManagerCard