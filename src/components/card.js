import React from "react"

function Card({ name, fee, gender, contact}) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg float-left">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{name}</div>
        <p class="text-gray-700 text-base">{fee}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{gender}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{contact}
        </span>
      </div>
    </div>
  )
}

export default Card
