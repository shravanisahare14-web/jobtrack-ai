
import { useEffect, useState } from "react"

import DashboardLayout from "../layouts/DashboardLayout"

import {
  fetchApplications,
} from "../data/applicationsData"



function Analytics() {

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



  const applied =
    applications.filter(
      app => app.status === "Applied"
    ).length



  const oa =
    applications.filter(
      app => app.status === "OA"
    ).length



  const interview =
    applications.filter(
      app => app.status === "Interview"
    ).length



  const offer =
    applications.filter(
      app => app.status === "Offer"
    ).length



  const interviewRate =
    applications.length
      ? Math.round(
          (interview /
            applications.length) *
            100
        )
      : 0



  const offerRate =
    applications.length
      ? Math.round(
          (offer /
            applications.length) *
            100
        )
      : 0



  return (

    <DashboardLayout>

      {/* HEADER */}

      <div>

        <p className="uppercase tracking-[5px] text-fuchsia-400 text-sm">

          Hiring Intelligence

        </p>



        <h1 className="text-6xl font-black mt-5">

          Analytics

        </h1>



        <p className="text-gray-400 text-xl mt-6 max-w-3xl leading-relaxed">

          Track hiring performance,
          application growth,
          conversion rates,
          and career progress analytics.

        </p>

      </div>



      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-14">

        {/* APPLIED */}

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">

          <p className="text-gray-400">

            Total Applied

          </p>



          <h2 className="text-6xl font-black mt-5">

            {applied}

          </h2>

        </div>



        {/* OA */}

        <div className="rounded-[32px] border border-cyan-500/20 bg-white/5 p-8">

          <p className="text-gray-400">

            Online Assessments

          </p>



          <h2 className="text-6xl font-black mt-5 text-cyan-400">

            {oa}

          </h2>

        </div>



        {/* INTERVIEW */}

        <div className="rounded-[32px] border border-fuchsia-500/20 bg-white/5 p-8">

          <p className="text-gray-400">

            Interviews

          </p>



          <h2 className="text-6xl font-black mt-5 text-fuchsia-400">

            {interview}

          </h2>

        </div>



        {/* OFFER */}

        <div className="rounded-[32px] border border-emerald-500/20 bg-white/5 p-8">

          <p className="text-gray-400">

            Offers

          </p>



          <h2 className="text-6xl font-black mt-5 text-emerald-400">

            {offer}

          </h2>

        </div>

      </div>



      {/* ANALYTICS SECTIONS */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-12">

        {/* INTERVIEW RATE */}

        <div className="rounded-[36px] border border-white/10 bg-white/5 p-8">

          <p className="uppercase tracking-[4px] text-fuchsia-400 text-sm">

            Performance

          </p>



          <h2 className="text-4xl font-black mt-5">

            Interview Conversion Rate

          </h2>



          <div className="mt-10">

            <div className="w-full h-5 rounded-full bg-[#111827] overflow-hidden">

              <div
                className="h-full rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600"
                style={{
                  width: `${interviewRate}%`,
                }}
              />

            </div>



            <p className="text-gray-400 mt-5 text-lg">

              {interviewRate}%
              of applications reached
              interview stage.

            </p>

          </div>

        </div>



        {/* OFFER RATE */}

        <div className="rounded-[36px] border border-emerald-500/20 bg-white/5 p-8">

          <p className="uppercase tracking-[4px] text-emerald-400 text-sm">

            Hiring Success

          </p>



          <h2 className="text-4xl font-black mt-5">

            Offer Success Rate

          </h2>



          <div className="mt-10">

            <div className="w-full h-5 rounded-full bg-[#111827] overflow-hidden">

              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400"
                style={{
                  width: `${offerRate}%`,
                }}
              />

            </div>



            <p className="text-gray-400 mt-5 text-lg">

              {offerRate}%
              of applications converted
              into offers.

            </p>

          </div>

        </div>

      </div>



      {/* AI INSIGHT */}

      <div className="rounded-[36px] border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 p-10 mt-12">

        <p className="uppercase tracking-[4px] text-fuchsia-300 text-sm">

          AI Career Insight

        </p>



        <h2 className="text-5xl font-black mt-6 leading-tight">

          Your strongest hiring traction
          is currently in frontend-focused
          engineering roles.

        </h2>



        <p className="text-gray-300 text-xl mt-8 max-w-4xl leading-relaxed">

          Applications with higher match scores
          and frontend engineering positions
          are progressing faster toward interviews
          and final offers. AI recommends focusing on:

        </p>



        <div className="flex flex-wrap gap-4 mt-8">

          <div className="px-5 py-3 rounded-2xl bg-white/10">

            React Architecture

          </div>



          <div className="px-5 py-3 rounded-2xl bg-white/10">

            UI Performance

          </div>



          <div className="px-5 py-3 rounded-2xl bg-white/10">

            Frontend System Design

          </div>



          <div className="px-5 py-3 rounded-2xl bg-white/10">

            Accessibility

          </div>



          <div className="px-5 py-3 rounded-2xl bg-white/10">

            Animation & UX

          </div>

        </div>

      </div>



      {/* RECENT APPLICATION INSIGHTS */}

      <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 mt-12">

        <div className="flex items-center justify-between">

          <div>

            <p className="uppercase tracking-[4px] text-fuchsia-400 text-sm">

              Recent Insights

            </p>



            <h2 className="text-4xl font-black mt-4">

              Application Performance

            </h2>

          </div>

        </div>



        <div className="space-y-6 mt-10">

          {applications.map((app) => (

            <div
              key={app._id}
              className="rounded-[28px] border border-white/10 bg-[#0B1120]/70 p-6"
            >

              <div className="flex items-center justify-between">

                {/* LEFT */}

                <div className="flex items-center gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-violet-600 flex items-center justify-center text-2xl font-black">

                    {app.company.charAt(0)}

                  </div>



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

                      Match Score

                    </p>



                    <h4 className="font-bold mt-1">

                      {app.matchScore}%

                    </h4>

                  </div>



                  <div>

                    <p className="text-gray-500 text-sm">

                      Status

                    </p>



                    <h4 className="font-bold mt-1 text-fuchsia-400">

                      {app.status}

                    </h4>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </DashboardLayout>

  )
}

export default Analytics
