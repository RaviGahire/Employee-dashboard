import React from 'react'


export const Employee = ({ employees }) => {

const imgUrl = `https://randomuser.me/api/portraits/men/2.jpg`
 



  return (
    <>
      {
        employees.map((emp,index) => {
          return (
            <>
              <div   className="max-w-sm mx-auto bg-gradient-to-br from-blue-100 to-blue-300 shadow-2xl rounded-xl overflow-hidden mt-12 border border-blue-200">

                <div className="flex flex-col items-center pt-8 pb-4 px-6">
                  <img
                    src={imgUrl}
                    alt={emp.name}
                    className="w-28 h-28 rounded-full border-4 border-blue-400 shadow-lg mb-4 object-cover"
                  />
                  <h5 className="text-blue-700 text-2xl font-bold mb-1">{emp.name}</h5>
                  <span className="text-sm text-blue-500 font-medium mb-2">{emp.department}</span>
                </div>
                <div className="bg-white px-8 py-6 rounded-b-xl">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-600 w-24">ID:</span>
                      <span className="text-gray-800">{emp.id}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-600 w-24">Email:</span>
                      <span className="text-gray-800">{emp.email}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-600 w-24">Salary:</span>
                      <span className="text-green-600 font-bold">${emp.salary}</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                    View Profile
                  </button>
                </div>
              </div>
            </>
          )
        })


      }</>


  )
}
