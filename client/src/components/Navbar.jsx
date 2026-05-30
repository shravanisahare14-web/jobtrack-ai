
import {
  Bell,
  Moon,
  Search,
} from "lucide-react"

function Navbar() {

  return (

    <div className="fixed top-0 left-[280px] right-0 z-40 px-8 py-6 bg-[#050816]/80 backdrop-blur-2xl border-b border-white/5">



      <div className="flex items-center justify-between">



        {/* SEARCH */}

        <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 w-[500px]">



          <Search
            size={18}
            className="text-gray-400"
          />



          <input
            type="text"
            placeholder="Search applications, companies..."
            className="bg-transparent outline-none w-full text-sm text-white placeholder:text-gray-500"
          />

        </div>



        {/* RIGHT */}

        <div className="flex items-center gap-4">



          <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">

            <Bell size={20} />

          </button>



          <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">

            <Moon size={20} />

          </button>

        </div>

      </div>

    </div>

  )
}

export default Navbar
