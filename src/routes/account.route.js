const router = require("express").Router();
const accountController = require("../controllers/account.controller");
const jwt = require("../configs/jwt");

router.post("/register", accountController.register);
router.post("/login", accountController.login);
router.get("/info", jwt.verifyToken, accountController.info);
router.get("/gettest", accountController.getTest);
router.get("/updatetest", accountController.updateTest);

module.exports = router;
