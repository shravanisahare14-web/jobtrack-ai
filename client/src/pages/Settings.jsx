
import DashboardLayout from "../layouts/DashboardLayout"

function Settings() {

  return (

    <DashboardLayout>

      {/* HEADER */}

      <div>

        <p className="uppercase tracking-[5px] text-fuchsia-400 text-sm">

          Personal Workspace

        </p>



        <h1 className="text-6xl font-black mt-5">

          Settings

        </h1>



        <p className="text-gray-400 text-xl mt-6 max-w-3xl leading-relaxed">

          Manage your account,
          notifications,
          appearance,
          AI preferences,
          and productivity settings.

        </p>

      </div>



      {/* MAIN GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-[0.8fr_1.2fr] gap-8 mt-14">

        {/* PROFILE CARD */}

        <div className="rounded-[36px] border border-white/10 bg-white/5 p-8">

          <div className="flex flex-col items-center text-center">

            <img
              src="https://i.pravatar.cc/200?img=32"
              alt="profile"
              className="w-32 h-32 rounded-full border-4 border-fuchsia-500/30"
            />



            <h2 className="text-3xl font-black mt-6">

              Shravani Sahare

            </h2>



            <p className="text-gray-400 mt-3">

              Frontend Engineer

            </p>



            <button className="mt-8 px-7 py-4 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:scale-105 transition shadow-[0_0_35px_rgba(168,85,247,0.35)]">

              Edit Profile

            </button>

          </div>



          {/* STATS */}

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="rounded-3xl bg-[#0B1120]/70 border border-white/10 p-5 text-center">

              <h3 className="text-3xl font-black">

                54

              </h3>



              <p className="text-gray-400 mt-2">

                Applications

              </p>

            </div>



            <div className="rounded-3xl bg-[#0B1120]/70 border border-white/10 p-5 text-center">

              <h3 className="text-3xl font-black text-fuchsia-400">

                82%

              </h3>



              <p className="text-gray-400 mt-2">

                AI Match

              </p>

            </div>

          </div>

        </div>



        {/* SETTINGS PANEL */}

        <div className="space-y-8">

          {/* ACCOUNT */}

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8">

            <h2 className="text-3xl font-black">

              Account Settings

            </h2>



            <div className="space-y-6 mt-8">

              <div>

                <label className="text-sm text-gray-400">

                  Full Name

                </label>



                <input
                  type="text"
                  value="Shravani Sahare"
                  className="w-full mt-3 bg-[#0B1120] border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />

              </div>



              <div>

                <label className="text-sm text-gray-400">

                  Email Address

                </label>



                <input
                  type="email"
                  value="shravi@gmail.com"
                  className="w-full mt-3 bg-[#0B1120] border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />

              </div>



              <div>

                <label className="text-sm text-gray-400">

                  Target Role

                </label>



                <input
                  type="text"
                  value="Frontend Engineer"
                  className="w-full mt-3 bg-[#0B1120] border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />

              </div>

            </div>

          </div>



          {/* PREFERENCES */}

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8">

            <h2 className="text-3xl font-black">

              Preferences

            </h2>



            <div className="space-y-6 mt-8">

              {/* TOGGLE */}

              <div className="flex items-center justify-between rounded-3xl bg-[#0B1120]/70 border border-white/10 p-5">

                <div>

                  <h3 className="text-xl font-bold">

                    Email Notifications

                  </h3>



                  <p className="text-gray-400 mt-2">

                    Receive interview reminders and updates.

                  </p>

                </div>



                <div className="w-16 h-9 rounded-full bg-fuchsia-600 flex items-center px-1">

                  <div className="w-7 h-7 rounded-full bg-white ml-auto" />

                </div>

              </div>



              {/* TOGGLE */}

              <div className="flex items-center justify-between rounded-3xl bg-[#0B1120]/70 border border-white/10 p-5">

                <div>

                  <h3 className="text-xl font-bold">

                    AI Suggestions

                  </h3>



                  <p className="text-gray-400 mt-2">

                    Enable personalized AI recommendations.

                  </p>

                </div>



                <div className="w-16 h-9 rounded-full bg-fuchsia-600 flex items-center px-1">

                  <div className="w-7 h-7 rounded-full bg-white ml-auto" />

                </div>

              </div>



              {/* TOGGLE */}

              <div className="flex items-center justify-between rounded-3xl bg-[#0B1120]/70 border border-white/10 p-5">

                <div>

                  <h3 className="text-xl font-bold">

                    Dark Mode

                  </h3>



                  <p className="text-gray-400 mt-2">

                    Use futuristic dark appearance.

                  </p>

                </div>



                <div className="w-16 h-9 rounded-full bg-fuchsia-600 flex items-center px-1">

                  <div className="w-7 h-7 rounded-full bg-white ml-auto" />

                </div>

              </div>

            </div>

          </div>



          {/* SAVE BUTTON */}

          <button className="w-full py-5 rounded-3xl bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:scale-[1.01] transition font-semibold text-lg shadow-[0_0_40px_rgba(168,85,247,0.35)]">

            Save Changes

          </button>

        </div>

      </div>

    </DashboardLayout>

  )
}

export default Settings
