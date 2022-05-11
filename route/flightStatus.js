const express = require("express");
const request = require("request");
const converter = require("xml-js");
const router = express.Router();

const url =
  "http://openapi.airport.co.kr/service/rest/FlightStatusList/getFlightStatusList";
const SERVICE_KEY =
  "Q7%2FpRWuKhwwSm%2Bkd7%2FlVUkpaH0zYa5VVbX0zR5bXllnufFZ%2BOFRNyAfIFhLCMP%2F7GjssVtnxYXAEAOstIrbANg%3D%3D";
var queryParams = `?serviceKey=${SERVICE_KEY}&pageNo=1`;

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
  router.get("/status", (req, res) => {
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
