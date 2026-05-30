
import { motion } from "framer-motion"

function StatsCard({

  title,
  value,
  icon,
  change,

}) {

  return (

    <motion.div

      whileHover={{ y: -5 }}

      className="bg-white/5 border border-white/10 rounded-[32px] p-7 backdrop-blur-2xl relative overflow-hidden"

    >



      {/* GLOW */}

      <div className="absolute top-0 right-0 w-40 h-40 bg-fuchsia-500/10 blur-[90px]" />



      {/* CONTENT */}

      <div className="relative z-10">



        <div className="flex items-center justify-between">

          <p className="text-gray-400 text-sm">

            {title}

          </p>



          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-600 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.4)]">

            {icon}

          </div>

        </div>



        <h2 className="text-5xl font-black mt-8">

          {value}

        </h2>



        <p className="text-emerald-400 mt-4 text-sm font-medium">

          {change}

        </p>

      </div>

    </motion.div>

  )
}

export default StatsCard
