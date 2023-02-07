const router = require('express').Router();
const logicControles = require("../logic-functions/logic-controllers");




router.get("/add", logicControles.addPage);

router.get("/search", logicControles.search);

router.get("/:sortBy" , logicControles.sort);

router.get("/" , (req, res) => res.redirect("/default"));


router.get("/edit/:id", logicControles.editPage);

router.get("/delete/:id", logicControles.deleteBook);


router.post("/add", logicControles.addBook);

router.post("/edit/:id", logicControles.editBook);


module.exports = router;