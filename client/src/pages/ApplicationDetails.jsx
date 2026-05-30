
import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

import DashboardLayout from "../layouts/DashboardLayout"

import {
  fetchApplications,
} from "../data/applicationsData"



function ApplicationDetails() {

  const { company } = useParams()



  const [application, setApplication] =
    useState(null)



  useEffect(() => {

    const loadApplication = async () => {

      const data =
        await fetchApplications()



      const foundApplication =
        data.find(

          app =>
            app.company.toLowerCase() ===
            company.toLowerCase()

        )



      setApplication(foundApplication)

    }



    loadApplication()

  }, [company])



  if (!application) {

    return (

      <DashboardLayout>

        <div className="flex items-center justify-center h-[70vh]">

          <h1 className="text-5xl font-black">

            Application Not Found

          </h1>

        </div>

      </DashboardLayout>

    )

  }



  return (

    <DashboardLayout>

      {/* HERO */}

      <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 p-10">

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10">

          {/* LEFT */}

          <div className="flex items-center gap-6">

            <div className="w-24 h-24 rounded-[32px] bg-gradient-to-br from-fuchsia-600 to-violet-600 flex items-center justify-center text-5xl font-black">

              {application.company.charAt(0)}

            </div>



            <div>

              <p className="uppercase tracking-[4px] text-fuchsia-300 text-sm">

                Company Overview

              </p>



              <h1 className="text-6xl font-black mt-4">

                {application.company}

              </h1>



              <p className="text-gray-300 text-2xl mt-4">

                {application.role}

              </p>

            </div>

          </div>



          {/* STATUS */}

          <div className="px-8 py-5 rounded-3xl bg-white/10 border border-white/10">

            <p className="text-gray-400 text-sm">

              Current Status

            </p>



            <h2 className="text-4xl font-black mt-3 text-fuchsia-400">

              {application.status}

            </h2>

          </div>

        </div>

      </div>



      {/* INFO GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-10">

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">

          <p className="text-gray-500">

            Salary

          </p>



          <h2 className="text-4xl font-black mt-5 text-emerald-400">

            {application.salary}

          </h2>

        </div>



        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">

          <p className="text-gray-500">

            Location

          </p>



          <h2 className="text-4xl font-black mt-5">

            {application.location}

          </h2>

        </div>



        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">

          <p className="text-gray-500">

            Work Mode

          </p>



          <h2 className="text-4xl font-black mt-5">

            {application.workMode}

          </h2>

        </div>



        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">

          <p className="text-gray-500">

            Match Score

          </p>



          <h2 className="text-4xl font-black mt-5 text-fuchsia-400">

            {application.matchScore}%

          </h2>

        </div>

      </div>



      {/* MATCH SCORE */}

      <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 mt-10">

        <p className="uppercase tracking-[4px] text-fuchsia-400 text-sm">

          AI Compatibility Analysis

        </p>



        <h2 className="text-4xl font-black mt-5">

          Match Strength

        </h2>



        <div className="w-full h-6 rounded-full bg-[#111827] overflow-hidden mt-10">

          <div
            className="h-full rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600"
            style={{
              width: `${application.matchScore}%`,
            }}
          />

        </div>



        <p className="text-gray-400 text-xl mt-6 leading-relaxed">

          Your profile alignment for this role is exceptionally strong based on
          skill match, role relevance, and hiring trend analysis.

        </p>

      </div>



      {/* TIMELINE */}

      <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 mt-10">

        <p className="uppercase tracking-[4px] text-fuchsia-400 text-sm">

          Hiring Timeline

        </p>



        <div className="mt-10 space-y-8">

          <div className="flex gap-5">

            <div className="w-5 h-5 rounded-full bg-fuchsia-500 mt-2" />



            <div>

              <h3 className="text-2xl font-black">

                Application Submitted

              </h3>



              <p className="text-gray-400 mt-2">

                {application.appliedDate}

              </p>

            </div>

          </div>



          <div className="flex gap-5">

            <div className="w-5 h-5 rounded-full bg-cyan-400 mt-2" />



            <div>

              <h3 className="text-2xl font-black">

                Resume Screening

              </h3>



              <p className="text-gray-400 mt-2">

                AI screening completed successfully.

              </p>

            </div>

          </div>



          <div className="flex gap-5">

            <div className="w-5 h-5 rounded-full bg-emerald-400 mt-2" />



            <div>

              <h3 className="text-2xl font-black">

                Current Stage

              </h3>



              <p className="text-gray-400 mt-2">

                {application.status}

              </p>

            </div>

          </div>

        </div>

      </div>



      {/* AI INSIGHTS */}

      <div className="rounded-[36px] border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 p-10 mt-10">

        <p className="uppercase tracking-[4px] text-fuchsia-300 text-sm">

          AI Recommendation

        </p>



        <h2 className="text-5xl font-black mt-6 leading-tight">

          Strong opportunity detected for this role.

        </h2>



        <p className="text-gray-300 text-xl mt-8 leading-relaxed max-w-4xl">

          Your application shows high alignment with the role requirements.
          Continue strengthening frontend architecture and system design
          preparation for maximum interview conversion probability.

        </p>



        <div className="flex flex-wrap gap-4 mt-8">

          <div className="px-5 py-3 rounded-2xl bg-white/10">

            React Architecture

          </div>



          <div className="px-5 py-3 rounded-2xl bg-white/10">

            Frontend Performance

          </div>



          <div className="px-5 py-3 rounded-2xl bg-white/10">

            UI System Design

          </div>



          <div className="px-5 py-3 rounded-2xl bg-white/10">

            Behavioral Prep

          </div>

        </div>

      </div>

    </DashboardLayout>

  )
}

export default ApplicationDetails
