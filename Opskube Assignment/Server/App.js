const express = require("express");
const app = express();
const object = [
  {
    id: 34,
    Book_name: "Twinte",
    Author_name: "Transcof",
    Release_date: "1/29/2022",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO33JRxV3wWV4PiJ6bSrAIBUvd7GEOyjbWCw&usqp=CAU",
  },
  {
    id: 35,
    Book_name: "Rhybox",
    Author_name: "Solarbreeze",
    Release_date: "3/17/2022",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4_OFT5yCNqdp2sDUbFas9MRJZySA4vSezw&usqp=CAU",
  },
  {
    id: 36,
    Book_name: "Fliptune",
    Author_name: "Ronstring",
    Release_date: "2/13/2022",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSShrc6VhL403cT_r1uH6QeAz_Lgb3a1t3NpQ&usqp=CAU",
  },

  {
    id: 37,
    Book_name: "Twinte",
    Author_name: "Y-Solowarm",
    Release_date: "9/16/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gQVtMAbgCNYx36YEAKVg5knAe5Py3M2zdg&usqp=CAU",
  },
  {
    id: 38,
    Book_name: "Flipopia",
    Author_name: "Zoolab",
    Release_date: "5/7/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqJVh6c8HoBuV0qx2Q0ymE3VOB-V8cY0dwQ&usqp=CAU",
  },
  {
    id: 39,
    Book_name: "Yombu",
    Author_name: "Bamity",
    Release_date: "10/23/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xgz161OmPQku0q19--Y3rId1MTuAdDYdAA&usqp=CAU",
  },
  {
    id: 40,
    Book_name: "Voonyx",
    Author_name: "Tempsoft",
    Release_date: "6/22/2021",
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQJbb9hKXpyve2JPGeWxg6rawLdcYUQkR9os7gRL2uLsEurxf4Dh0drULOu8U9bsoJmERAJaiyp62fhEf35kYfTn3GYdnZpqFbGFW8fvCQ&usqp=CAc",
  },
  {
    id: 41,
    Book_name: "Yacero",
    Author_name: "Mat Lam Tam",
    Release_date: "7/4/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCki_0D2VpTtYAN_wMGcul0Df0runfsmGwlQ&usqp=CAU",
  },
  {
    id: 42,
    Book_name: "Tagpad",
    Author_name: "Zaam-Dox",
    Release_date: "6/14/2021",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQMyLaELQMxk5Pi35Wj5IDgkFTsiz8zYr8hSr59kxaAJx-kTKmwY5mzMCnDjPSzMsatwqHVOyfMmuQtIQHcJPZhSnjh--6Y29d0Z7YPDs7pW-ukRYdvq-6H&usqp=CAc",
  },
  {
    id: 43,
    Book_name: "Ainyx",
    Author_name: "Tampflex",
    Release_date: "8/13/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqgddQVvSyT9K1d3lFGVvQKD3PgDkmmMEKbQ&usqp=CAU",
  },
  {
    id: 44,
    Book_name: "Devify",
    Author_name: "Prodder",
    Release_date: "1/10/2022",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3sWc8_UfRIXNRvMkPMjbgkLaj1Z7OXIJJw&usqp=CAU",
  },
  {
    id: 45,
    Book_name: "Voomm",
    Author_name: "Fixflex",
    Release_date: "10/15/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCki_0D2VpTtYAN_wMGcul0Df0runfsmGwlQ&usqp=CAU",
  },
  {
    id: 46,
    Book_name: "Agivu",
    Author_name: "Transcof",
    Release_date: "4/16/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCki_0D2VpTtYAN_wMGcul0Df0runfsmGwlQ&usqp=CAU",
  },
  {
    id: 47,
    Book_name: "Feedspan",
    Author_name: "Lotlux",
    Release_date: "1/12/2022",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xgz161OmPQku0q19--Y3rId1MTuAdDYdAA&usqp=CAU",
  },
  {
    id: 48,
    Book_name: "Meemm",
    Author_name: "Bitchip",
    Release_date: "9/27/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Ng27a7Or_ifzMeWKw29KNtTM2Fj7374mQA&usqp=CAU",
  },
  {
    id: 49,
    Book_name: "Meembee",
    Author_name: "Konklab",
    Release_date: "12/24/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RybyRAIIUMTmmsjnjsUTLZQ_5OrgtJbx3w&usqp=CAU",
  },
  {
    id: 50,
    Book_name: "Shufflebeat",
    Author_name: "Bitwolf",
    Release_date: "5/17/2021",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkb6lmCvTFdrF2A2F8S8iE7q-sD_ZP7Jstw&usqp=CAU",
  },
  {
    id: 51,
    Book_name: "Shufflebeat",
    Author_name: "Bitwolf",
    Release_date: "5/17/2021",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQgPh9dd4_cGOidYLCSZg_UmAff-0te95xDS4t4Mje9vvUs8b0slvfaYKOQwV-16UR4CSnMoAcu_A&usqp=CAc",
  },
];
app.get("/getBooks", (req, res) => {
  res.send({ object });
});
app.post("/", (req, res) => {
  res.send({ object });
});
app.listen(5000, () => console.log("Listneing on port 5000"));
