
import { useState } from "react"

import { useNavigate } from "react-router-dom"



function Login() {

  const navigate = useNavigate()



  const [email, setEmail] =
    useState("")



  const [password, setPassword] =
    useState("")



  const handleLogin = (e) => {

    e.preventDefault()



    /* SIMPLE DEMO LOGIN */

    if (email && password) {

      navigate("/dashboard")

    }

    else {

      alert("Enter credentials")

    }

  }



  return (

    <div className="min-h-screen bg-[#060816] text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">

        <p className="uppercase tracking-[5px] text-fuchsia-400 text-sm">

          Welcome Back

        </p>



        <h1 className="text-5xl font-black mt-5">

          Login

        </h1>



        <p className="text-gray-400 mt-4">

          Access your premium job
          tracking workspace.

        </p>



        <form
          onSubmit={handleLogin}
          className="mt-10 space-y-6"
        >

          {/* EMAIL */}

          <div>

            <label className="text-gray-300">

              Email

            </label>



            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Enter email"
              className="w-full mt-3 rounded-2xl bg-[#0B1120] border border-white/10 px-5 py-4 outline-none"
            />

          </div>



          {/* PASSWORD */}

          <div>

            <label className="text-gray-300">

              Password

            </label>



            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter password"
              className="w-full mt-3 rounded-2xl bg-[#0B1120] border border-white/10 px-5 py-4 outline-none"
            />

          </div>



          {/* BUTTON */}

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:scale-[1.02] transition-all duration-300 font-semibold"
          >

            Login

          </button>

        </form>

      </div>

    </div>

  )
}

export default Login
