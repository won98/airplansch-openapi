const express = require("express");
const request = require("request");
const converter = require("xml-js");
const router = express.Router();

const axios = require("axios");
require("dotenv").config();

const url =
  "http://openapi.airport.co.kr/service/rest/AirportCodeList/getAirportCodeList";
const SERVICE_KEY = process.env.SERVICE_KEY;
var queryParams = `?serviceKey=${SERVICE_KEY}&pageNo=1`;

// queryParams +=
//   `${url}?serviceKey=${SERVICE_KEY}` +
//   encodeURIComponent("pageNo") +
//   "=" +
//   encodeURIComponent("4");
// queryParams +=
//   "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("10");
// request(requestUrl, (err, response, body) => {
//   if (err) throw err;
//   parseString(body, (err, result) => {
//     if (err) throw err;
//     let parseData = result;
//     console.log(parseData);
//   });
//   console.log(body);
// });
router.get("/code", (req, res) => {
  //const baseUrl = `http://openapi.airport.co.kr/service/rest/AirportCodeList/getAirportCodeList?serviceKey=${SERVICE_KEY}&pageNo=1`;
  // await axios
  //   .get(baseUrl)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  request(
    {
      url: url + queryParams,
      method: "GET",
    },
    (err, response, body) => {
      console.log(url);
      const xmlTOJson = converter.xml2json(body);
      res.send(xmlTOJson);
    }
  );
});

module.exports = router;
