const express = require("express");
const request = require("request");
const converter = require("xml-js");
const router = express.Router();
require("dotenv").config();

const url =
  "http://openapi.airport.co.kr/service/rest/AirportCodeList/getAirportCodeList";
const SERVICE_KEY = process.env.SERVICE_KEY;

var queryParams = `?serviceKey=${SERVICE_KEY}&pageNo=1schDate=2022-05-09`;

queryParams +=
  `${url}?serviceKey=${SERVICE_KEY}` +
  encodeURIComponent("pageNo") +
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
  router.get("/iflight", (req, res) => {
    request(
      {
        url: url + queryParams,
        method: "GET",
      },
      (err, response, body) => {
        console.log(url + queryParams);
        const xmlTOJson = converter.xml2json(body);
        res.send(xmlTOJson);
      }
    );
  });

module.exports = router;
