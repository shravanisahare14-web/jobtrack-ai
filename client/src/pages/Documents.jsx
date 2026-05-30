
import DashboardLayout from "../layouts/DashboardLayout"



const documents = [

  {
    title: "Frontend Resume",
    type: "Resume",
    updated: "2 days ago",
    score: "92%",
  },

  {
    title: "Backend Resume",
    type: "Resume",
    updated: "5 days ago",
    score: "88%",
  },

  {
    title: "Google Cover Letter",
    type: "Cover Letter",
    updated: "Yesterday",
    score: "95%",
  },

  {
    title: "System Design Notes",
    type: "Interview Notes",
    updated: "Today",
    score: "90%",
  },

]



function Documents() {

  return (

    <DashboardLayout>

      {/* HEADER */}

      <div>

        <p className="uppercase tracking-[5px] text-fuchsia-400 text-sm">

          Career Assets Vault

        </p>



        <h1 className="text-6xl font-black mt-5">

          Documents

        </h1>



        <p className="text-gray-400 text-xl mt-6 max-w-4xl leading-relaxed">

          Organize resumes, cover letters,
          interview notes, certificates,
          and portfolio assets
          in one premium workspace.

        </p>

      </div>



      {/* TOP STATS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

        <div className="rounded-[36px] border border-white/10 bg-white/5 p-8">

          <p className="text-gray-500">

            Total Assets

          </p>



          <h2 className="text-6xl font-black mt-5">

            24

          </h2>

        </div>



        <div className="rounded-[36px] border border-fuchsia-500/20 bg-white/5 p-8">

          <p className="text-gray-500">

            AI Resume Score

          </p>



          <h2 className="text-6xl font-black mt-5 text-fuchsia-400">

            92%

          </h2>

        </div>



        <div className="rounded-[36px] border border-emerald-500/20 bg-white/5 p-8">

          <p className="text-gray-500">

            Interview Readiness

          </p>



          <h2 className="text-6xl font-black mt-5 text-emerald-400">

            High

          </h2>

        </div>

      </div>



      {/* DOCUMENT GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-12">

        {documents.map((doc, index) => (

          <div
            key={index}
            className="rounded-[36px] border border-white/10 bg-white/5 p-8 hover:border-fuchsia-500/20 transition-all duration-300"
          >

            <div className="flex items-center justify-between">

              {/* LEFT */}

              <div>

                <p className="uppercase tracking-[4px] text-fuchsia-400 text-xs">

                  {doc.type}

                </p>



                <h2 className="text-3xl font-black mt-4">

                  {doc.title}

                </h2>

              </div>



              {/* ICON */}

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-fuchsia-600 to-violet-600 flex items-center justify-center text-3xl">

                📄

              </div>

            </div>



            {/* DETAILS */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="rounded-2xl bg-[#0B1120] p-5">

                <p className="text-gray-500 text-sm">

                  Last Updated

                </p>



                <h3 className="font-black text-xl mt-2">

                  {doc.updated}

                </h3>

              </div>



              <div className="rounded-2xl bg-[#0B1120] p-5">

                <p className="text-gray-500 text-sm">

                  AI Quality Score

                </p>



                <h3 className="font-black text-xl mt-2 text-fuchsia-400">

                  {doc.score}

                </h3>

              </div>

            </div>



            {/* ACTIONS */}

            <div className="flex gap-4 mt-8">

              <button className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:scale-[1.02] transition-all duration-300 font-semibold">

                Open

              </button>



              <button className="flex-1 py-4 rounded-2xl bg-white/10 hover:bg-white/15 transition-all duration-300 font-semibold">

                Download

              </button>

            </div>

          </div>

        ))}

      </div>



      {/* PORTFOLIO LINKS */}

      <div className="rounded-[36px] border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 p-10 mt-12">

        <p className="uppercase tracking-[4px] text-fuchsia-300 text-sm">

          Portfolio Links

        </p>



        <h2 className="text-5xl font-black mt-6">

          Professional Presence

        </h2>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="rounded-3xl bg-white/10 p-6">

            <p className="text-gray-400">

              GitHub

            </p>



            <h3 className="text-2xl font-black mt-4">

              github.com/username

            </h3>

          </div>



          <div className="rounded-3xl bg-white/10 p-6">

            <p className="text-gray-400">

              LinkedIn

            </p>



            <h3 className="text-2xl font-black mt-4">

              linkedin.com/in/username

            </h3>

          </div>



          <div className="rounded-3xl bg-white/10 p-6">

            <p className="text-gray-400">

              Portfolio

            </p>



            <h3 className="text-2xl font-black mt-4">

              yourportfolio.dev

            </h3>

          </div>

        </div>

      </div>

    </DashboardLayout>

  )
}

export default Documents
