const axios = require("axios");
const router = require("express").Router();

router.get("/search", (req, res) => {
    // var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    //     url += '?' + $.param({
    //     'api-key': "568aa0391f604ada83257de382efeee4",
    //     'q': req.query,
    //     'begin_date': `${req.startYear}0101`,
    //     'end_date': `${req.endYear}0101`
    //     });
    req.query["api-key"] = "568aa0391f604ada83257de382efeee4";
    console.log(req.query);
  axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", { params: req.query })
    .then((results) => res.json(results.data))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
