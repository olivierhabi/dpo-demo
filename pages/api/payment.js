import nextConnect from "next-connect";
import axios from "axios";
import { parseString } from "xml2js";
import moment from "moment";

const handler = nextConnect().post(async (req, res) => {
  var config = {
    headers: {
      "Content-Type": "text/xml",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  var xmlBodyStr = `
  <?xml version="1.0" encoding="utf-8"?>
  <API3G>
  <CompanyToken>${process.env.COMPANY_TOKEN}</CompanyToken>
  <Request>createToken</Request>
  <Transaction>
  <PaymentAmount>${req.body.price}</PaymentAmount>
  <PaymentCurrency>USD</PaymentCurrency>
  <CompanyRef>49FKEOA</CompanyRef>
  <RedirectURL>${req.body.redirectUrl}</RedirectURL>
  <BackURL>${req.body.backUrl} </BackURL>
  <CompanyRefUnique>0</CompanyRefUnique>
  <PTL>5</PTL>
  </Transaction>
  <Services>
    <Service>
      <ServiceType>${req.body.serviceCode}</ServiceType>
      <ServiceDescription>${req.body.serviceDescription}</ServiceDescription>
      <ServiceDate>${req.body.serviceDate}</ServiceDate>
    </Service>
  </Services>
  </API3G>`;

  const data = await axios
    .post("https://secure.3gdirectpay.com/API/v6/", xmlBodyStr, config)
    .then((response) => {
      let self;
      parseString(response.data, (err, result) => {
        self = result;
      });
      return self;
    });
  return res.json({ data: data });
});

export default handler;
