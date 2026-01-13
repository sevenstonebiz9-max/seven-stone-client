import React from 'react'
import NumberTickerContainer from '../ui/NumberTickerContainer'
import { FaUsers } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa"; 
import { FaHandshake } from "react-icons/fa";

const HighlightStats = () => {
  return (
    <section className="py-20 bg-gray-100 mt-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center gap-3">
                <div className="flex items-center justify-center w-15 h-15 p-3 rounded-2xl bg-gradient-to-br from-[#5C1A25] via-[#7A2C38] to-[#A84B58]">
                    <FaUsers className="mx-auto mb-2 w-8 h-8 text-white" />
                </div>
                <h2 className="text-5xl font-bold mb-2">
                    <NumberTickerContainer numberTickerValue={5000} />
                    <span className='text-black/80 text-4xl'>+</span>
                </h2>
                <p className="text-base font-medium opacity-90"> MSMEs & Youth Led Enterprises Impacted </p>
            </div>

            <div className="flex flex-col items-center gap-3">
                 <div className="flex items-center justify-center w-15 h-15 p-3 rounded-2xl bg-gradient-to-br from-[#5C1A25] via-[#7A2C38] to-[#A84B58]">
                    <FaCalendarAlt className="mx-auto mb-2 w-8 h-8 text-white" />
                </div>
                <h2 className="text-5xl font-bold mb-2">
                    <NumberTickerContainer numberTickerValue={7} />
                    <span className='text-black/80 text-4xl'>+</span>
                </h2>
                <p className="text-base font-medium opacity-90">Years of Impact in Kenya</p>
            </div>

            <div className="flex flex-col items-center gap-3">
                 <div className="flex items-center justify-center w-15 h-15 p-3 rounded-2xl bg-gradient-to-br from-[#5C1A25] via-[#7A2C38] to-[#A84B58]">
                    <FaHandshake className="mx-auto mb-2 w-8 h-8 text-white" />
                </div>
                <h2 className="text-5xl font-bold mb-2">
                    <NumberTickerContainer numberTickerValue={20} />
                    <span className='text-black/80 text-4xl'>+</span>
                </h2>
                <p className="text-base font-medium opacity-90">Partnerships</p>
            </div>
        </div>
    </section>

  )
}

export default HighlightStats
