const axios = require('axios')

let getDoctors = async (req, res, next) => {
    try {
        let doctors = await axios.post('http://localhost:9000/auth/doctor/getBySpeciality', {
            speciality: req.body.speciality
        })
        res.send(doctors.data)
    } catch (error) {
        next(error)
    }
}

let getDrug = async (req, res, next) => {
    try {
        let drug = await axios.post('http://localhost:9003/pharmacy/drug/findByName', {
            name: req.body.name
        })
        res.send(drug.data)
    } catch (error) {
        next(error)
    }
}

let getPharmacy = async (req, res, next) => {
    try {
        let pharmacy = await axios.post('http://localhost:9003/pharmacy/findByName', {
            name: req.body.name
        })
        res.send(pharmacy.data)
    } catch (error) {
        next(error)
    }
}

module.exports = { getDoctors, getDrug, getPharmacy }