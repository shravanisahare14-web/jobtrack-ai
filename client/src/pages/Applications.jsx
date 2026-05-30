
import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

import DashboardLayout from "../layouts/DashboardLayout"

import {

  fetchApplications,

} from "../data/applicationsData"



function Applications() {

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

      <div>

        <p className="uppercase tracking-[5px] text-fuchsia-400 text-sm">

          Job Management

        </p>



        <h1 className="text-6xl font-black mt-5">

          Applications

        </h1>

      </div>



      <div className="space-y-6 mt-14">

        {applications.map((app) => (

          <div
            key={app._id}
            className="rounded-[36px] border border-white/10 bg-white/5 p-8"
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-violet-600 flex items-center justify-center text-2xl font-black">

                  {app.company.charAt(0)}

                </div>



                <div>

                  <h2 className="text-3xl font-black">

                    {app.company}

                  </h2>



                  <p className="text-gray-400 mt-2">

                    {app.role}

                  </p>

                </div>

              </div>



              <Link
                to={`/application/${app.company.toLowerCase()}`}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600"
              >

                View Details

              </Link>

            </div>

          </div>

        ))}

      </div>

    </DashboardLayout>

  )
}

export default Applications
