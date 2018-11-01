const router = require("express").Router();
const articleRoutes = require("./articles");
const apiRoutes = require("./apiRoutes")
// Book routes
router.use("/articles", articleRoutes);
router.use("/nyt", apiRoutes);

module.exports = router;
