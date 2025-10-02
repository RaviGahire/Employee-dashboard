import React from 'react'
import { motion } from 'motion/react';

export const Employee = ({ employees }) => {

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };


  for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
  }
  const imgUrl = "https://www.w3schools.com/howto/img_avatar.png";






  return (
    <>
      {
        employees.map((emp, index) => {
          return (
            <>
              <motion.div key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index} // pass index for stagger
                className="max-w-sm mx-auto bg-gradient-to-tr from-neutral-300 to-neutral-800 shadow-2xl rounded-xl overflow-hidden mt-12 border border-blue-200">

                <div className="flex flex-col items-center pt-8 pb-4 px-6">
                  <img
                    src={imgUrl}
                    alt={emp.name}
                    className="w-28 h-28 rounded-full border-4 border-blue-400 shadow-lg mb-4 object-cover"
                  />
                  <h5 className="text-slate-50 text-2xl font-semibold mb-1">{emp.name}</h5>
                  <span className="text-sm text-lime-500 font-medium mb-2">{emp.department}</span>
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
                  <motion.button
                     whileHover={{ scale: 1.1 }}
                  
                  className=" cursor-pointer mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                    Email
                  </motion.button>
                  <motion.button 
                   whileHover={{ scale: 1.1 }}
                  className=" cursor-pointer mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow transition duration-200">
                    Message
                  </motion.button>
                </div>
              </motion.div>
            </>
          )
        })


      }</>


  )
}
