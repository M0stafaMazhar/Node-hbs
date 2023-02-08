const router = require('express').Router();
const pagesControler = require('./pages-controlers');
const userControler = require('./user-controlers');

router.get('/', pagesControler.index);
router.get('/add', pagesControler.add);
router.get('/addget', pagesControler.addget);
router.get('/edit/:id', pagesControler.edit);
router.get('/showall', pagesControler.showAll);
router.get('/showsingle/:id', userControler.showOne);

//router.post('/showAll' , userControler.showUsers);
router.post('/adduser' , userControler.addUser);
router.get('/del/:id' , userControler.del);

router.post('/update/:id' , userControler.update);


router.get("/change/:id", userControler.change);


module.exports = router;