const express = require('express');
const csv = require("csvtojson");



const router = express.Router();

router.get('/rental/25yoy', async (req, res) => {
    const myCSVFilePath = 'CSV_data/rental_data/Zip_Zri_SingleFamilyResidenceRental.csv';
    const jsonArray= await csv().fromFile(myCSVFilePath);
    const returnArr = []
    jsonArray.forEach(city => {
        const YoY = (city['2019-06'] - city['2018-06']) / city['2018-06']

        if (YoY > 0.25) {
            returnArr.push(city)
        } 
      })
    return res.json(returnArr)
});

router.get('/:type/:size/zip/:zip', async (req, res) => {
    const zip = req.params.zip
    const type = req.params.type
    const size = req.params.size
    console.log("-------Requested zip---------")
    console.log(type, size, zip)
    let myCSVFilePath
    if (type == "rental" && size == "sfh") {
        myCSVFilePath = 'CSV_data/rental_data/Zip_Zri_SingleFamilyResidenceRental.csv';
    } else if (type == "rental" && size == "multi") {
        myCSVFilePath = 'CSV_data/rental_data/Zip_Zri_MultiFamilyResidenceRental.csv';
    } else if (type == "list") {
        myCSVFilePath = 'CSV_data/listing_data/Zip_MedianListingPrice_AllHomes.csv';
    }
    const jsonArray= await csv().fromFile(myCSVFilePath);

    let cityObj = {}

    jsonArray.forEach(city => {
        if(city.RegionName == zip) {
            cityObj = city
        }
    })

    return res.json([cityObj])
});

router.get('/:type/:size/zips-in-metro/:metro', async (req, res) => {
    const metro = req.params.metro
    const type = req.params.type
    const size = req.params.size
    console.log("-------Requested metro---------")
    console.log(type, size, metro)
    let myCSVFilePath
    if (type == "rental" && size == "sfh") {
        myCSVFilePath = 'CSV_data/rental_data/Zip_Zri_SingleFamilyResidenceRental.csv';
    } else if (type == "rental" && size == "multi") {
        myCSVFilePath = 'CSV_data/rental_data/Zip_Zri_MultiFamilyResidenceRental.csv';
    } else if (type == "list") {
        myCSVFilePath = 'CSV_data/listing_data/Zip_MedianListingPrice_AllHomes.csv';
    }
    const jsonArray= await csv().fromFile(myCSVFilePath);

    let cityList = []

    jsonArray.forEach(city => {
        if(city.Metro == metro) {
            cityList.push(city)
        }
    })

    return res.json(cityList)
});

router.use((req, res, next) => {
    const err = new Error("API route not found!");
    err.status = 404;
    next(err);
});

module.exports = router