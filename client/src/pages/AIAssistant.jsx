
import { useEffect, useState } from "react"

import DashboardLayout from "../layouts/DashboardLayout"

import {
  fetchApplications,
} from "../data/applicationsData"



function AIAssistant() {

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



  const interviewCount =
    applications.filter(
      app => app.status === "Interview"
    ).length



  const offerCount =
    applications.filter(
      app => app.status === "Offer"
    ).length



  const sortedApplications =
    [...applications].sort(

      (a, b) =>
        b.matchScore - a.matchScore

    )



  const topMatch =
    sortedApplications[0]



  return (

    <DashboardLayout>

      {/* HEADER */}

      <div>

        <p className="uppercase tracking-[5px] text-fuchsia-400 text-sm">

          AI Career Intelligence

        </p>



        <h1 className="text-6xl font-black mt-5">

          AI Assistant

        </h1>



        <p className="text-gray-400 text-xl mt-6 max-w-4xl leading-relaxed">

          Smart hiring insights powered
          by application analytics,
          role matching,
          and AI-driven recommendations.

        </p>

      </div>



      {/* TOP GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-14">

        {/* INSIGHT */}

        <div className="rounded-[36px] border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 p-8">

          <p className="uppercase tracking-[4px] text-fuchsia-300 text-sm">

            Smart Insight

          </p>



          <h2 className="text-4xl font-black mt-5 leading-tight">

            Frontend-focused roles are producing the highest interview traction.

          </h2>



          <p className="text-gray-300 mt-6 text-lg leading-relaxed">

            Applications with high frontend alignment
            are progressing faster through hiring stages.

          </p>

        </div>



        {/* INTERVIEWS */}

        <div className="rounded-[36px] border border-white/10 bg-white/5 p-8">

          <p className="uppercase tracking-[4px] text-cyan-400 text-sm">

            Interviews

          </p>



          <h2 className="text-7xl font-black mt-6">

            {interviewCount}

          </h2>



          <p className="text-gray-400 mt-5">

            Active interview-stage applications.

          </p>

        </div>



        {/* OFFERS */}

        <div className="rounded-[36px] border border-emerald-500/20 bg-white/5 p-8">

          <p className="uppercase tracking-[4px] text-emerald-400 text-sm">

            Offers

          </p>



          <h2 className="text-7xl font-black mt-6 text-emerald-400">

            {offerCount}

          </h2>



          <p className="text-gray-400 mt-5">

            Offer conversion performance.

          </p>

        </div>

      </div>



      {/* TOP MATCH */}

      {topMatch && (

        <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 mt-10">

          <p className="uppercase tracking-[4px] text-fuchsia-400 text-sm">

            Best Opportunity Match

          </p>



          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10 mt-8">

            <div>

              <h2 className="text-5xl font-black">

                {topMatch.company}

              </h2>



              <p className="text-gray-400 text-2xl mt-4">

                {topMatch.role}

              </p>

            </div>



            <div className="text-right">

              <p className="text-gray-500">

                Match Score

              </p>



              <h3 className="text-7xl font-black text-fuchsia-400 mt-3">

                {topMatch.matchScore}%

              </h3>

            </div>

          </div>

        </div>

      )}



      {/* SKILLS */}

      <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 mt-10">

        <p className="uppercase tracking-[4px] text-fuchsia-400 text-sm">

          Recommended Skills

        </p>



        <div className="flex flex-wrap gap-5 mt-8">

          <div className="px-6 py-4 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20">

            React Architecture

          </div>



          <div className="px-6 py-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">

            Frontend System Design

          </div>



          <div className="px-6 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">

            UI Performance

          </div>



          <div className="px-6 py-4 rounded-2xl bg-orange-500/10 border border-orange-500/20">

            Accessibility

          </div>



          <div className="px-6 py-4 rounded-2xl bg-violet-500/10 border border-violet-500/20">

            Animation & UX

          </div>

        </div>

      </div>

    </DashboardLayout>

  )
}

export default AIAssistant
