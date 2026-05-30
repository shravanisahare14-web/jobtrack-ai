
import { useEffect, useState } from "react"

import DashboardLayout from "../layouts/DashboardLayout"

import {
  fetchApplications,
} from "../data/applicationsData"



function Calendar() {

  const [applications, setApplications] =
    useState([])



  useEffect(() => {

    const loadApplications = async () => {

      const data =
        await fetchApplications()

      setApplications(data)

    }

    loadApplications()

  }, [])



  return (

    <DashboardLayout>

      {/* HEADER */}

      <div>

        <p className="uppercase tracking-[5px] text-fuchsia-400 text-sm">

          Smart Scheduling

        </p>



        <h1 className="text-6xl font-black mt-5">

          Calendar

        </h1>



        <p className="text-gray-400 text-xl mt-6 max-w-4xl leading-relaxed">

          Track interviews, online assessments,
          hiring events, and application deadlines.

        </p>

      </div>



      {/* TIMELINE */}

      <div className="mt-16 space-y-8">

        {applications.map((app, index) => (

          <div
            key={app._id}
            className="flex gap-8"
          >

            {/* LEFT TIMELINE */}

            <div className="flex flex-col items-center">

              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500" />



              {index !==
                applications.length - 1 && (

                <div className="w-[2px] h-full bg-white/10 mt-2" />

              )}

            </div>



            {/* EVENT CARD */}

            <div className="flex-1 rounded-[36px] border border-white/10 bg-white/5 p-8 mb-8 hover:border-fuchsia-500/20 transition-all">

              <div className="flex items-center justify-between">

                <div>

                  <p className="uppercase tracking-[4px] text-fuchsia-400 text-sm">

                    {app.status} Event

                  </p>



                  <h2 className="text-4xl font-black mt-4">

                    {app.company}

                  </h2>



                  <p className="text-gray-400 text-lg mt-3">

                    {app.role}

                  </p>

                </div>



                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-fuchsia-600 to-violet-600 flex items-center justify-center text-2xl font-black">

                  {app.company.charAt(0)}

                </div>

              </div>



              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">

                <div className="rounded-2xl bg-[#0B1120] p-5">

                  <p className="text-gray-500 text-sm">

                    Date

                  </p>



                  <h3 className="font-black text-xl mt-2">

                    {app.appliedDate}

                  </h3>

                </div>



                <div className="rounded-2xl bg-[#0B1120] p-5">

                  <p className="text-gray-500 text-sm">

                    Location

                  </p>



                  <h3 className="font-black text-xl mt-2">

                    {app.location}

                  </h3>

                </div>



                <div className="rounded-2xl bg-[#0B1120] p-5">

                  <p className="text-gray-500 text-sm">

                    Work Mode

                  </p>



                  <h3 className="font-black text-xl mt-2">

                    {app.workMode}

                  </h3>

                </div>



                <div className="rounded-2xl bg-[#0B1120] p-5">

                  <p className="text-gray-500 text-sm">

                    Match

                  </p>



                  <h3 className="font-black text-xl mt-2 text-fuchsia-400">

                    {app.matchScore}%

                  </h3>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </DashboardLayout>

  )
}

export default Calendar
