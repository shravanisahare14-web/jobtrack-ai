
import { Link } from "react-router-dom"

function Register() {

  return (

    <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6 relative overflow-hidden">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-fuchsia-600/20 blur-[180px] rounded-full" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-violet-600/20 blur-[180px] rounded-full" />



      {/* REGISTER CARD */}

      <div className="relative z-10 w-full max-w-lg bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-[0_0_60px_rgba(168,85,247,0.2)]">

        {/* LOGO */}

        <div className="flex flex-col items-center">

          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-fuchsia-600 to-violet-600 flex items-center justify-center text-3xl font-black shadow-[0_0_40px_rgba(168,85,247,0.45)]">

            J

          </div>



          <h1 className="text-4xl font-black mt-6">

            Create Account 🚀

          </h1>



          <p className="text-gray-400 mt-3 text-center">

            Start your AI-powered job tracking journey today.

          </p>

        </div>



        {/* FORM */}

        <form className="mt-10 space-y-6">

          {/* NAME */}

          <div>

            <label className="text-sm text-gray-400">

              Full Name

            </label>



            <input
              type="text"
              placeholder="Shravani Sahare"
              className="w-full mt-3 bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-fuchsia-500 transition"
            />

          </div>



          {/* EMAIL */}

          <div>

            <label className="text-sm text-gray-400">

              Email Address

            </label>



            <input
              type="email"
              placeholder="shravi@gmail.com"
              className="w-full mt-3 bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-fuchsia-500 transition"
            />

          </div>



          {/* PASSWORD */}

          <div>

            <label className="text-sm text-gray-400">

              Password

            </label>



            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-3 bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-fuchsia-500 transition"
            />

          </div>



          {/* ROLE */}

          <div>

            <label className="text-sm text-gray-400">

              Target Role

            </label>



            <select
              className="w-full mt-3 bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-fuchsia-500 transition"
            >

              <option>Frontend Developer</option>

              <option>Backend Developer</option>

              <option>Full Stack Developer</option>

              <option>AI Engineer</option>

              <option>Data Scientist</option>

            </select>

          </div>



          {/* BUTTON */}

          <button
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 font-semibold text-lg hover:scale-[1.02] transition shadow-[0_0_40px_rgba(168,85,247,0.45)]"
          >

            Create Account

          </button>

        </form>



        {/* LOGIN */}

        <p className="text-center text-gray-400 mt-8">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-fuchsia-400 hover:text-fuchsia-300 font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  )
}

export default Register
