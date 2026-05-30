
import { motion } from "framer-motion"

function KanbanColumn({

  title,
  color,
  jobs,

}) {

  return (

    <div className="min-w-[320px] rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-5">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">

          <div
            className={`w-4 h-4 rounded-full ${color}`}
          />



          <h2 className="text-2xl font-black">

            {title}

          </h2>

        </div>



        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">

          {jobs.length}

        </div>

      </div>



      {/* CARDS */}

      <div className="space-y-5">

        {jobs.map((job, index) => (

          <motion.div

            whileHover={{ y: -4 }}

            key={index}

            className="rounded-[28px] border border-white/10 bg-[#0B1120]/80 p-5 hover:border-fuchsia-500/20 transition-all duration-300"

          >

            {/* TOP */}

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-[#050816] border border-white/10 flex items-center justify-center p-2">

                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-full h-full object-contain"
                />

              </div>



              <div>

                <h3 className="text-xl font-bold">

                  {job.company}

                </h3>



                <p className="text-gray-400 text-sm mt-1">

                  {job.role}

                </p>

              </div>

            </div>



            {/* BOTTOM */}

            <div className="flex items-center justify-between mt-6">

              <span className="text-gray-400 text-sm">

                {job.salary}

              </span>



              <div className="px-4 py-2 rounded-full bg-fuchsia-500/10 text-fuchsia-300 text-sm">

                {title}

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  )
}

export default KanbanColumn
