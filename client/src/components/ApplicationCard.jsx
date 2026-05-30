
import { motion } from "framer-motion"

import {
  CalendarDays,
  ArrowUpRight,
} from "lucide-react"

function ApplicationCard({

  company,
  role,
  status,
  date,
  salary,
  logo,

}) {

  const statusColors = {

    Applied: "bg-fuchsia-500/20 text-fuchsia-300",
    Interview: "bg-cyan-500/20 text-cyan-300",
    Offer: "bg-emerald-500/20 text-emerald-300",
    Rejected: "bg-rose-500/20 text-rose-300",
    OA: "bg-amber-500/20 text-amber-300",

  }



  return (

    <motion.div

      whileHover={{

        y: -5,

      }}

      className="group relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 overflow-hidden transition-all duration-300 hover:border-fuchsia-500/20"

    >



      {/* GLOW */}

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-fuchsia-500/5 to-cyan-500/5" />



      {/* CONTENT */}

      <div className="relative z-10">



        {/* TOP */}

        <div className="flex items-start justify-between">



          <div className="flex items-center gap-4">



            <img
              src={logo}
              alt={company}
              className="w-16 h-16 rounded-2xl object-cover border border-white/10"
            />



            <div>

              <h2 className="text-2xl font-bold">

                {company}

              </h2>



              <p className="text-gray-400 mt-1">

                {role}

                </p>

            </div>

          </div>



          <button className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition">

            <ArrowUpRight size={18} />

          </button>

        </div>



        {/* INFO */}

        <div className="flex items-center justify-between mt-8">



          <div className="flex items-center gap-3 text-gray-400 text-sm">

            <CalendarDays size={16} />

            {date}

          </div>



          <div className={`px-4 py-2 rounded-full text-sm font-medium ${statusColors[status]}`}>

            {status}

          </div>

        </div>



        {/* SALARY */}

        <div className="mt-8 flex items-center justify-between">



          <div>

            <p className="text-gray-400 text-sm">

              Expected Salary

            </p>



            <h3 className="text-3xl font-black mt-2">

              {salary}

            </h3>

          </div>



          <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:scale-105 transition duration-300 font-semibold">

            View Details

          </button>

        </div>

      </div>

    </motion.div>

  )
}

export default ApplicationCard
