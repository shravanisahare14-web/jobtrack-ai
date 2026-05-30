
import { useEffect, useState } from "react"

import DashboardLayout from "../layouts/DashboardLayout"

import {

  fetchApplications,

} from "../data/applicationsData"



function Pipeline() {

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

      app =>
        app.status === "Applied"

    )



  const oa =
    applications.filter(

      app =>
        app.status === "OA"

    )



  const interview =
    applications.filter(

      app =>
        app.status === "Interview"

    )



  const offer =
    applications.filter(

      app =>
        app.status === "Offer"

    )



  const PipelineColumn = ({

    title,

    applications,

    glow,

  }) => (

    <div
      className={`rounded-[36px] border ${glow} bg-white/5 p-6 flex-1`}
    >

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-black">

          {title}

        </h2>



        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">

          {applications.length}

        </div>

      </div>



      {/* CARDS */}

      <div className="space-y-5 mt-8">

        {applications.map((app) => (

          <div
            key={app._id}
            className="rounded-[28px] border border-white/10 bg-[#0B1120]/80 p-5 hover:border-fuchsia-500/20 transition-all duration-300"
          >

            <div className="flex items-center gap-4">

              {/* ICON */}

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-violet-600 flex items-center justify-center text-xl font-black">

                {app.company.charAt(0)}

              </div>



              {/* INFO */}

              <div>

                <h3 className="font-black text-lg">

                  {app.company}

                </h3>



                <p className="text-gray-400 text-sm mt-1">

                  {app.role}

                </p>

              </div>

            </div>



            {/* FOOTER */}

            <div className="flex items-center justify-between mt-6">

              <div>

                <p className="text-gray-500 text-xs">

                  Match Score

                </p>



                <h4 className="font-bold mt-1">

                  {app.matchScore}%

                </h4>

              </div>



              <div>

                <p className="text-gray-500 text-xs">

                  Salary

                </p>



                <h4 className="font-bold mt-1 text-emerald-400">

                  {app.salary}

                </h4>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  )



  return (

    <DashboardLayout>

      {/* HEADER */}

      <div>

        <p className="uppercase tracking-[5px] text-fuchsia-400 text-sm">

          Job Pipeline

        </p>



        <h1 className="text-6xl font-black mt-5">

          Application Pipeline

        </h1>



        <p className="text-gray-400 text-xl mt-6 max-w-3xl leading-relaxed">

          Manage every stage of your
          hiring journey from application
          to final offer.

        </p>

      </div>



      {/* PIPELINE */}

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-7 mt-14">

        <PipelineColumn
          title="Applied"
          applications={applied}
          glow="border-cyan-500/20"
        />



        <PipelineColumn
          title="OA"
          applications={oa}
          glow="border-violet-500/20"
        />



        <PipelineColumn
          title="Interview"
          applications={interview}
          glow="border-fuchsia-500/20"
        />



        <PipelineColumn
          title="Offer"
          applications={offer}
          glow="border-emerald-500/20"
        />

      </div>

    </DashboardLayout>

  )
}

export default Pipeline
