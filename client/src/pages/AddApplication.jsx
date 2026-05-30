
import { useState } from "react"

import toast from "react-hot-toast"

import DashboardLayout from "../layouts/DashboardLayout"

import {
  addApplication,
} from "../data/applicationsData"



function AddApplication() {

  const [formData, setFormData] =
    useState({

      company: "",

      role: "",

      status: "Applied",

      salary: "",

      location: "",

      workMode: "Remote",

      appliedDate: "",

      matchScore: "",

    })



  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    })

  }



  const handleSubmit = async (e) => {

    e.preventDefault()



    await addApplication({

      ...formData,

      matchScore: Number(
        formData.matchScore
      ),

    })



    toast.success(
      "Application Added Successfully"
    )



    setFormData({

      company: "",

      role: "",

      status: "Applied",

      salary: "",

      location: "",

      workMode: "Remote",

      appliedDate: "",

      matchScore: "",

    })

  }



  return (

    <DashboardLayout>

      {/* HEADER */}

      <div>

        <p className="uppercase tracking-[5px] text-fuchsia-400 text-sm">

          Career Manager

        </p>



        <h1 className="text-6xl font-black mt-5">

          Add Application

        </h1>



        <p className="text-gray-400 text-xl mt-6 max-w-3xl leading-relaxed">

          Add and track premium job opportunities
          inside your AI-powered career workspace.

        </p>

      </div>



      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="rounded-[36px] border border-white/10 bg-white/5 p-10 mt-14"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* COMPANY */}

          <div>

            <label className="text-gray-300">

              Company

            </label>



            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="Google"
              className="w-full mt-3 rounded-2xl bg-[#0B1120] border border-white/10 px-5 py-4 outline-none focus:border-fuchsia-500/40 transition-all"
            />

          </div>



          {/* ROLE */}

          <div>

            <label className="text-gray-300">

              Role

            </label>



            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              placeholder="Frontend Engineer"
              className="w-full mt-3 rounded-2xl bg-[#0B1120] border border-white/10 px-5 py-4 outline-none focus:border-fuchsia-500/40 transition-all"
            />

          </div>



          {/* STATUS */}

          <div>

            <label className="text-gray-300">

              Status

            </label>



            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full mt-3 rounded-2xl bg-[#0B1120] border border-white/10 px-5 py-4 outline-none focus:border-fuchsia-500/40 transition-all"
            >

              <option>Applied</option>

              <option>OA</option>

              <option>Interview</option>

              <option>Offer</option>

            </select>

          </div>



          {/* SALARY */}

          <div>

            <label className="text-gray-300">

              Salary

            </label>



            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="₹28 LPA"
              className="w-full mt-3 rounded-2xl bg-[#0B1120] border border-white/10 px-5 py-4 outline-none focus:border-fuchsia-500/40 transition-all"
            />

          </div>



          {/* LOCATION */}

          <div>

            <label className="text-gray-300">

              Location

            </label>



            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Bangalore"
              className="w-full mt-3 rounded-2xl bg-[#0B1120] border border-white/10 px-5 py-4 outline-none focus:border-fuchsia-500/40 transition-all"
            />

          </div>



          {/* WORK MODE */}

          <div>

            <label className="text-gray-300">

              Work Mode

            </label>



            <select
              name="workMode"
              value={formData.workMode}
              onChange={handleChange}
              className="w-full mt-3 rounded-2xl bg-[#0B1120] border border-white/10 px-5 py-4 outline-none focus:border-fuchsia-500/40 transition-all"
            >

              <option>Remote</option>

              <option>Hybrid</option>

              <option>Onsite</option>

            </select>

          </div>



          {/* APPLIED DATE */}

          <div>

            <label className="text-gray-300">

              Applied Date

            </label>



            <input
              type="text"
              name="appliedDate"
              value={formData.appliedDate}
              onChange={handleChange}
              placeholder="May 30"
              className="w-full mt-3 rounded-2xl bg-[#0B1120] border border-white/10 px-5 py-4 outline-none focus:border-fuchsia-500/40 transition-all"
            />

          </div>



          {/* MATCH SCORE */}

          <div>

            <label className="text-gray-300">

              Match Score

            </label>



            <input
              type="number"
              name="matchScore"
              value={formData.matchScore}
              onChange={handleChange}
              placeholder="92"
              className="w-full mt-3 rounded-2xl bg-[#0B1120] border border-white/10 px-5 py-4 outline-none focus:border-fuchsia-500/40 transition-all"
            />

          </div>

        </div>



        {/* BUTTON */}

        <button
          type="submit"
          className="mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:scale-105 transition-all duration-300 font-semibold"
        >

          Add Application

        </button>

      </form>

    </DashboardLayout>

  )
}

export default AddApplication
