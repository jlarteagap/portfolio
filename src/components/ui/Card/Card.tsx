import React from 'react'

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-xl">
      {children}
    </div>
  )
}

export default Card
