
import { Link } from "react-router-dom"

function Home() {

  return (

    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-fuchsia-600/20 blur-[180px] rounded-full" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-violet-600/20 blur-[180px] rounded-full" />



      {/* NAVBAR */}

      <nav className="relative z-50 flex items-center justify-between px-12 py-8 border-b border-white/10 backdrop-blur-xl">

        {/* LOGO */}

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-violet-600 flex items-center justify-center text-2xl font-bold shadow-[0_0_35px_rgba(168,85,247,0.45)]">

            J

          </div>



          <div>

            <h1 className="text-3xl font-black">

              JobTrack

            </h1>



            <p className="text-gray-400 text-sm">

              AI Career OS

            </p>

          </div>

        </div>



        {/* NAV LINKS */}

        <div className="hidden lg:flex items-center gap-10 text-gray-300 font-medium">

          <a href="#">Features</a>

          <a href="#">Dashboard</a>

          <a href="#">Analytics</a>

          <a href="#">AI Assistant</a>

        </div>



        {/* BUTTONS */}

        <div className="flex items-center gap-5">

          <Link
            to="/login"
            className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            Login
          </Link>



          <Link
            to="/register"
            className="px-7 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:scale-105 transition shadow-[0_0_35px_rgba(168,85,247,0.45)]"
          >
            Get Started
          </Link>

        </div>

      </nav>



      {/* HERO SECTION */}

      <section className="relative z-10 px-12 pt-20 pb-24">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SECTION */}

          <div>

            {/* TAG */}

            <div className="inline-block px-5 py-3 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-300 text-sm font-medium">

              AI-Powered Career Intelligence

            </div>



            {/* HEADING */}

            <h1 className="text-7xl xl:text-8xl font-black leading-[0.95] mt-10">

              Organize Your

              <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">

                Job Journey Smarter.

              </span>

            </h1>



            {/* DESCRIPTION */}

            <p className="text-gray-400 text-xl mt-10 leading-relaxed max-w-2xl">

              Track applications, interviews,
              reminders, AI insights, analytics,
              and offers inside one futuristic productivity workspace.

            </p>



            {/* BUTTONS */}

            <div className="flex items-center gap-6 mt-12">

              <Link
                to="/register"
                className="px-8 py-5 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:scale-105 transition font-semibold shadow-[0_0_40px_rgba(168,85,247,0.45)]"
              >
                Get Started Free
              </Link>



              <Link
                to="/dashboard"
                className="px-8 py-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition font-semibold"
              >
                Explore Demo
              </Link>

            </div>



            {/* STATS */}

            <div className="flex items-center gap-6 mt-16">

              <div className="bg-white/5 border border-white/10 rounded-3xl px-8 py-6">

                <h2 className="text-4xl font-black">

                  12K+

                </h2>



                <p className="text-gray-400 mt-2">

                  Applications Tracked

                </p>

              </div>



              <div className="bg-white/5 border border-white/10 rounded-3xl px-8 py-6">

                <h2 className="text-4xl font-black text-fuchsia-400">

                  82%

                </h2>



                <p className="text-gray-400 mt-2">

                  AI Match Accuracy

                </p>

              </div>

            </div>

          </div>



          {/* RIGHT SECTION */}

          <div className="relative flex justify-center items-center">

            {/* MAIN HERO IMAGE */}

            <img

              src="/hero.png"

              alt="hero"

              className="relative z-10 w-[760px] object-contain drop-shadow-[0_0_90px_rgba(168,85,247,0.45)]"

            />



            {/* FLOATING CARD 1 */}

            <div className="absolute top-10 right-0 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl px-6 py-5 shadow-[0_0_40px_rgba(168,85,247,0.25)]">

              <p className="text-sm text-gray-400">

                Interview

              </p>



              <h3 className="text-xl font-bold mt-1">

                Today • 2:30 PM

              </h3>

            </div>



            {/* FLOATING CARD 2 */}

            <div className="absolute top-[300px] right-[-20px] bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl px-6 py-5 shadow-[0_0_40px_rgba(34,211,238,0.2)]">

              <p className="text-sm text-gray-400">

                Offer Received

              </p>



              <h3 className="text-xl font-bold mt-1">

                2 Offers

              </h3>

            </div>



            {/* FLOATING CARD 3 */}

            <div className="absolute bottom-10 left-0 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl px-6 py-5 shadow-[0_0_40px_rgba(168,85,247,0.25)]">

              <p className="text-sm text-gray-400">

                AI Match Score

              </p>



              <h3 className="text-3xl font-black text-fuchsia-400 mt-1">

                82%

              </h3>

            </div>

          </div>

        </div>

      </section>

    </div>

  )
}

export default Home
