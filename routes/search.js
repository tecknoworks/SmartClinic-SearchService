var express = require("express");
var router = express.Router();
const SearchService = require('../services/SearchService')

router.get("/doctors", SearchService.getDoctors)
router.get("/drug", SearchService.getDrug)
router.get("/pharmacy", SearchService.getPharmacy)

module.exports = router