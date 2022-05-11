const express = require("express");
const request = require("request");
const converter = require("xml-js");
const router = express.Router();
const axios = require("axios");

const url =
  "http://openapi.airport.co.kr/service/rest/FlightScheduleList/getDflightScheduleList";
const SERVICE_KEY =
  "Q7%2FpRWuKhwwSm%2Bkd7%2FlVUkpaH0zYa5VVbX0zR5bXllnufFZ%2BOFRNyAfIFhLCMP%2F7GjssVtnxYXAEAOstIrbANg%3D%3D";
var queryParams = `?serviceKey=${SERVICE_KEY}&pageNo=1&schDate=2022-05-09`;

queryParams +=
  `${url}?serviceKey=${SERVICE_KEY}` + encodeURIComponent("pageNo");
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
// queryParams +=
//   "&" + encodeURIComponent("start") + "=" + encodeURIComponent(start);
// queryParams += "&" + encodeURIComponent("end") + "=" + encodeURIComponent(end);
router.get("/dflight", (req, res) => {
  // //const baseUrl = `http://openapi.airport.co.kr/service/rest/FlightScheduleList/getDflightScheduleList?serviceKey=${SERVICE_KEY}&pageNo=0&schDate=2022-05-09`;
  // const response = await axios.get(url);
  // console.log(response);
  request(
    {
      url: url + queryParams,
      method: "GET",
    },
    (err, response, body) => {
      // let { start, end } = req.body;
      //const baseUrl = `http://openapi.airport.co.kr/service/rest/FlightScheduleList/getDflightScheduleList?serviceKey=${SERVICE_KEY}&pageNo=0&schDate=2022-05-09&schDeptCityCode=${end}&schArrvCityCode${start}`;
      console.log(url);
      const xmlTOJson = converter.xml2json(body);
      res.send(xmlTOJson);
    }
  );
});

module.exports = router;
