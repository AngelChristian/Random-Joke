const router = require('express').Router();
const { getJokes, postJokes } = require("../controllers/jokes");

router.get('/', getJokes);

router.post("/", postJokes);


module.exports = router;