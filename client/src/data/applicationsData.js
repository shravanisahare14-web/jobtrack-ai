
import axios from "axios"



const API_URL =
  "http://localhost:5000/api/applications"



/* DEMO DATA */

const demoApplications = [

  {
    _id: "1",
    company: "Google",
    role: "Frontend Engineer",
    status: "Interview",
    salary: "₹28 LPA",
    location: "Bangalore",
    workMode: "Hybrid",
    appliedDate: "May 20",
    matchScore: 92,
  },

  {
    _id: "2",
    company: "Microsoft",
    role: "Software Engineer",
    status: "OA",
    salary: "₹24 LPA",
    location: "Hyderabad",
    workMode: "Remote",
    appliedDate: "May 18",
    matchScore: 88,
  },

  {
    _id: "3",
    company: "Amazon",
    role: "SDE Intern",
    status: "Applied",
    salary: "₹18 LPA",
    location: "Chennai",
    workMode: "Onsite",
    appliedDate: "May 15",
    matchScore: 81,
  },

  {
    _id: "4",
    company: "Netflix",
    role: "UI Engineer",
    status: "Offer",
    salary: "₹42 LPA",
    location: "Remote",
    workMode: "Remote",
    appliedDate: "May 10",
    matchScore: 96,
  },

]



/* FETCH APPLICATIONS */

export async function fetchApplications() {

  try {

    const response =
      await axios.get(API_URL)



    /* if database empty */

    if (
      !response.data ||
      response.data.length === 0
    ) {

      return demoApplications

    }



    return response.data

  }

  catch (error) {

    console.log(error)



    /* fallback demo data */

    return demoApplications

  }

}



/* ADD APPLICATION */

export async function addApplication(data) {

  try {

    const response =
      await axios.post(
        API_URL,
        data
      )



    return response.data

  }

  catch (error) {

    console.log(error)

  }

}



/* compatibility */

export default demoApplications
