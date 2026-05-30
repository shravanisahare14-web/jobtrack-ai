function ActivityCard({

  company,
  action,
  time,

}) {

  return (

    <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition-all duration-300">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-xl font-bold">

            {company}

          </h3>



          <p className="text-gray-400 mt-2">

            {action}

          </p>

        </div>



        <span className="text-sm text-gray-500">

          {time}

        </span>

      </div>

    </div>

  )
}

export default ActivityCard