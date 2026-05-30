 
const express = require("express")

const router = express.Router()

const Application = require("../models/Application")



/* GET ALL APPLICATIONS */

router.get("/", async (req, res) => {

  try {

    const applications =
      await Application.find()

    res.json(applications)

  }

  catch (error) {

    res.status(500).json({
      error: error.message,
    })

  }

})



/* CREATE APPLICATION */

router.post("/", async (req, res) => {

  try {

    const newApplication =
      new Application(req.body)

    const savedApplication =
      await newApplication.save()

    res.status(201).json(savedApplication)

  }

  catch (error) {

    res.status(500).json({
      error: error.message,
    })

  }

})



module.exports = router
