
import { useEffect, useState } from "react"

import DashboardLayout from "../layouts/DashboardLayout"

import {
  fetchApplications,
} from "../data/applicationsData"



function Reminders() {

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

          Smart Reminder Center

        </p>



        <h1 className="text-6xl font-black mt-5">

          Reminders

        </h1>



        <p className="text-gray-400 text-xl mt-6 max-w-4xl leading-relaxed">

          AI-powered follow-up tracking,
          pending action alerts,
          and hiring workflow reminders.

        </p>

      </div>



      {/* ALERTS */}

      <div className="space-y-8 mt-16">

        {applications.map((app) => (

          <div
            key={app._id}
            className="rounded-[36px] border border-white/10 bg-white/5 p-8 hover:border-fuchsia-500/20 transition-all duration-300"
          >

            {/* TOP */}

            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

              {/* LEFT */}

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-fuchsia-600 to-violet-600 flex items-center justify-center text-2xl font-black">

                  {app.company.charAt(0)}

                </div>



                <div>

                  <h2 className="text-4xl font-black">

                    {app.company}

                  </h2>



                  <p className="text-gray-400 text-lg mt-3">

                    {app.role}

                  </p>

                </div>

              </div>



              {/* STATUS */}

              <div className="px-6 py-4 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 font-semibold">

                {app.status}

              </div>

            </div>



            {/* AI ALERT */}

            <div className="rounded-3xl bg-[#0B1120] border border-white/5 p-6 mt-8">

              <p className="uppercase tracking-[4px] text-fuchsia-400 text-xs">

                AI Suggested Action

              </p>



              <h3 className="text-2xl font-black mt-4 leading-relaxed">

                {app.status === "Applied" &&

                  "Send a follow-up email within the next 3 days to improve response probability."}



                {app.status === "OA" &&

                  "Complete the online assessment preparation and revise DSA patterns."}



                {app.status === "Interview" &&

                  "Prepare frontend system design and behavioral interview answers."}



                {app.status === "Offer" &&

                  "Review compensation structure and negotiate benefits if needed."}

              </h3>

            </div>



            {/* ACTION GRID */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

              {/* PRIORITY */}

              <div className="rounded-2xl bg-[#0B1120] p-5">

                <p className="text-gray-500 text-sm">

                  Priority Level

                </p>



                <h3 className="font-black text-2xl mt-2 text-orange-400">

                  High

                </h3>

              </div>



              {/* FOLLOW UP */}

              <div className="rounded-2xl bg-[#0B1120] p-5">

                <p className="text-gray-500 text-sm">

                  Recommended Follow-Up

                </p>



                <h3 className="font-black text-xl mt-2">

                  2 Days

                </h3>

              </div>



              {/* MATCH */}

              <div className="rounded-2xl bg-[#0B1120] p-5">

                <p className="text-gray-500 text-sm">

                  Match Score

                </p>



                <h3 className="font-black text-2xl mt-2 text-fuchsia-400">

                  {app.matchScore}%

                </h3>

              </div>

            </div>

          </div>

        ))}

      </div>

    </DashboardLayout>

  )
}

export default Reminders
