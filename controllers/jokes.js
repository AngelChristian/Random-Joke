const axios = require("axios");
require('dotenv').config();
exports.getJokes =  (req,res)=>{
    res.render('index',{
    list: "",
  }); 
};

exports.postJokes = async(req,res)=>{

    axios({
      method: "GET",
      url: "https://joke3.p.rapidapi.com/v1/joke",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "joke3.p.rapidapi.com",
        "x-rapidapi-key": process.env.API_KEY,
        useQueryString: true,
      },
    })
      .then((response) => {
        
        res.render("index", {
          list: response,
        }); 
        
      })
      .catch((error) => {
        console.log(error);
      });   
}