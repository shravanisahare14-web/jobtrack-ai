function InterviewCard({

  company,
  role,
  time,

}) {

  return (

    <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 p-6">

      <p className="text-gray-400 text-sm">

        Upcoming Interview

      </p>



      <h2 className="text-3xl font-black mt-4">

        {company}

      </h2>



      <p className="text-gray-300 mt-2">

        {role}

      </p>



      <div className="mt-6 inline-flex px-5 py-3 rounded-2xl bg-white/10 border border-white/10 text-sm">

        {time}

      </div>

    </div>

  )
}

export default InterviewCard