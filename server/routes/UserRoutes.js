const router = require("express").Router();
const controller = require("../controllers/UserController");

router.get("/getCurrentUserId", controller.getCurrentUserId);
router.get("/getUserById/:id", controller.getUserById);
router.put("/updateUser/:id/:username/:email/:password", controller.updateUser);

module.exports = router;