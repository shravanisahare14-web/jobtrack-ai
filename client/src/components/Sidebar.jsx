
import { NavLink, useNavigate } from "react-router-dom"



const navLinks = [

  {
    title: "Dashboard",
    path: "/dashboard",
  },

  {
    title: "Applications",
    path: "/applications",
  },

  {
    title: "Pipeline",
    path: "/pipeline",
  },

  {
    title: "Analytics",
    path: "/analytics",
  },

  {
    title: "AI Assistant",
    path: "/ai-assistant",
  },

  {
    title: "Calendar",
    path: "/calendar",
  },

  {
    title: "Reminders",
    path: "/reminders",
  },

  {
    title: "Documents",
    path: "/documents",
  },

  {
    title: "Add Application",
    path: "/add-application",
  },

]



function Sidebar() {

  const navigate = useNavigate()



  const handleLogout = () => {

    navigate("/login")

  }



  return (

    <aside className="w-[290px] min-h-screen border-r border-white/10 bg-[#060816] px-6 py-8 hidden lg:flex flex-col">

      {/* LOGO */}

      <div>

        <p className="uppercase tracking-[5px] text-fuchsia-400 text-sm">

          AI Career OS

        </p>



        <h1 className="text-4xl font-black mt-4 bg-gradient-to-r from-fuchsia-500 to-violet-500 bg-clip-text text-transparent">

          JobTrack AI

        </h1>

      </div>



      {/* NAVIGATION */}

      <div className="flex flex-col gap-3 mt-14">

        {navLinks.map((link) => (

          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>

              `px-5 py-4 rounded-2xl transition-all duration-300 font-medium

              ${

                isActive

                  ? "bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white"

                  : "bg-white/5 hover:bg-white/10 text-gray-300"

              }`
            }
          >

            {link.title}

          </NavLink>

        ))}

      </div>



      {/* PREMIUM CARD */}

      <div className="mt-auto rounded-[32px] border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 p-6">

        <p className="uppercase tracking-[4px] text-fuchsia-300 text-xs">

          Premium Workspace

        </p>



        <h2 className="text-2xl font-black mt-4 leading-snug">

          Track applications,
          interviews,
          offers,
          and career growth.

        </h2>



        <p className="text-gray-400 mt-5 text-sm leading-relaxed">

          Smart analytics +
          premium workflow management
          for ambitious students.

        </p>



        {/* LOGOUT */}

        <button
          onClick={handleLogout}
          className="w-full mt-8 py-4 rounded-2xl bg-white/10 hover:bg-red-500/20 border border-white/10 hover:border-red-500/30 transition-all duration-300 font-semibold"
        >

          Logout

        </button>

      </div>

    </aside>

  )
}

export default Sidebar
