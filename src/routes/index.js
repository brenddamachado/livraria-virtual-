const express = require('express');
const router = express.Router();
const {allUsers, userForm, saveUser, editUser, updateUser, deleteUser, bookForm, saveBook, allBook, editBook, updateBook, viewBook, deleteBook} = require('../controllers/UserController')



router.get("/", function (req, res) {
    res.render('home') 
})

router.get("/duvidas", function (req, res) {
    res.render('duvidas') 
})

router.get("/login", function (req, res) {
    res.render('login') 
})


router.get("/quemSomos", function (req, res) {
    res.render('quemSomos') 
})


router.get('/dados', allUsers);
router.get('/cadastro', userForm); 
router.post('/cadastro', saveUser);
router.get('/edit/:id', editUser);
router.post('/update/:id', updateUser);
router.get('/delete/:id', deleteUser);


router.get('/dadosLivros', allBook);
router.get('/pagUsuarios', bookForm);
router.post('/pagUsuarios', saveBook);
router.get('/editBook/:id', editBook);
router.post('/updateBook/:id', updateBook);
router.get('/cardsBook/:id', viewBook);
router.get('/deleteBook/:id', deleteBook);


module.exports = router;