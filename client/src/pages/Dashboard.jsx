
import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

import DashboardLayout from "../layouts/DashboardLayout"

import {

  fetchApplications,

} from "../data/applicationsData"



function Dashboard() {

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



  const totalApplications =
    applications.length



  const interviews =
    applications.filter(

      app =>
        app.status === "Interview"

    ).length



  const offers =
    applications.filter(

      app =>
        app.status === "Offer"

    ).length



  const oa =
    applications.filter(

      app =>
        app.status === "OA"

    ).length



  return (

    <DashboardLayout>

      {/* HEADER */}

      <div>

        <p className="uppercase tracking-[5px] text-fuchsia-400 text-sm">

          Career Overview

        </p>



        <h1 className="text-6xl font-black mt-5">

          Dashboard

        </h1>



        <p className="text-gray-400 text-xl mt-6 max-w-3xl leading-relaxed">

          Track applications,
          interviews,
          offers,
          and career growth
          inside one intelligent workspace.

        </p>

      </div>



      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-14">

        {/* TOTAL */}

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-7">

          <p className="text-gray-400">

            Total Applications

          </p>



          <h2 className="text-5xl font-black mt-4">

            {totalApplications}

          </h2>

        </div>



        {/* INTERVIEWS */}

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-7">

          <p className="text-gray-400">

            Interviews

          </p>



          <h2 className="text-5xl font-black mt-4 text-fuchsia-400">

            {interviews}

          </h2>

        </div>



        {/* OA */}

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-7">

          <p className="text-gray-400">

            Online Assessments

          </p>



          <h2 className="text-5xl font-black mt-4 text-cyan-400">

            {oa}

          </h2>

        </div>



        {/* OFFERS */}

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-7">

          <p className="text-gray-400">

            Offers

          </p>



          <h2 className="text-5xl font-black mt-4 text-emerald-400">

            {offers}

          </h2>

        </div>

      </div>



      {/* RECENT APPLICATIONS */}

      <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 mt-10">

        <div className="flex items-center justify-between">

          <div>

            <p className="uppercase tracking-[4px] text-fuchsia-400 text-sm">

              Recent Applications

            </p>



            <h2 className="text-4xl font-black mt-4">

              Latest Activity

            </h2>

          </div>



          <Link
            to="/applications"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:scale-105 transition"
          >

            View All

          </Link>

        </div>



        {/* APPLICATION LIST */}

        <div className="space-y-6 mt-10">

          {applications.map((app) => (

            <div
              key={app._id}
              className="rounded-[30px] border border-white/10 bg-[#0B1120]/70 p-6 hover:border-fuchsia-500/20 transition-all duration-300"
            >

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                {/* LEFT */}

                <div className="flex items-center gap-5">

                  {/* ICON */}

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-violet-600 flex items-center justify-center text-2xl font-black">

                    {app.company.charAt(0)}

                  </div>



                  {/* INFO */}

                  <div>

                    <h3 className="text-2xl font-black">

                      {app.company}

                    </h3>



                    <p className="text-gray-400 mt-2">

                      {app.role}

                    </p>

                  </div>

                </div>



                {/* RIGHT */}

                <div className="flex items-center gap-10">

                  <div>

                    <p className="text-gray-500 text-sm">

                      Status

                    </p>



                    <h4 className="font-bold mt-1 text-fuchsia-400">

                      {app.status}

                    </h4>

                  </div>



                  <div>

                    <p className="text-gray-500 text-sm">

                      Match

                    </p>



                    <h4 className="font-bold mt-1">

                      {app.matchScore}%

                    </h4>

                  </div>



                  <div>

                    <p className="text-gray-500 text-sm">

                      Salary

                    </p>



                    <h4 className="font-bold mt-1 text-emerald-400">

                      {app.salary}

                    </h4>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>



      {/* AI INSIGHT */}

      <div className="rounded-[36px] border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 p-8 mt-10">

        <p className="uppercase tracking-[4px] text-fuchsia-300 text-sm">

          AI Career Insight

        </p>



        <h2 className="text-4xl font-black mt-4 leading-tight">

          Your frontend-focused applications
          show strong interview conversion potential.

        </h2>



        <p className="text-gray-300 text-lg mt-6 max-w-3xl leading-relaxed">

          AI recommends focusing on:
          React optimization,
          frontend architecture,
          accessibility,
          and system design preparation
          for higher hiring success.

        </p>

      </div>

    </DashboardLayout>

  )
}

export default Dashboard
