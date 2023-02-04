const { raw } = require('mysql2')
const { Association } = require('sequelize')
const User = require('../models/User')
const Livros = require('../models/Livros')


//LOGIN: 
const allUsers = async (req, res) => {
    const users = await User.findAll({
        raw:true
    }).catch(err => console.log(err))
    await res.render('dados', {users})
}
const userForm = async (req, res) => {
    await res.render('cadastro')
}
const saveUser = async (req, res) => {
    const { name, sobrenome, login, senha } = await req.body;
    const user = await User.create({
        name, sobrenome, login, senha
    }).catch(err => console.log(err));
    console.log(user)
    await res.redirect('/login');

}

const editUser = async (req, res) =>{
    const {id} = await req.params;
    const user = await User.findOne({
        where:{
            id:id
        },
        raw:true
    }).catch(err => console.log(err))
    res.render('edit', {user} )
}

const updateUser = async (req, res) =>{
    const {id} = req.params;
    const data = req.body;
    const selector = {where:{id:id}};
    await User.update(data, selector).catch(err => console.log(err))
    res.redirect('/' )
}

const viewUser = async (req, res) =>{
    const {id} = await req.params;
    const user = await User.findOne({
        where:{
            id:id
        },
        raw:true
    }).catch(err => console.log(err))
    res.render('user', {user} )
}

const deleteUser = async (req, res) =>{
    const {id} = await req.params;
    const user = await User.destroy({
        where:{
            id:id
        },
        raw:true
    }).catch(err => console.log(err))

 
    res.redirect('/')
}

//ADD LIVROS
const allBook = async (req, res) => {
    const livros = await Livros.findAll({
        raw:true
    }).catch(err => console.log(err))
    await res.render('dadosLivros', {livros})
}
const bookForm = async (req, res) => {
    await res.render('pagUsuarios')
}
const saveBook = async (req, res) => {
    const { titulo, ano, genero, nota } = await req.body;
    const book = await Livros.create({
        titulo, ano, genero, nota
    }).catch(err => console.log(err));
    console.log(book)
    await res.redirect('/dadosLivros');
}
const editBook = async (req, res) =>{
    const {id} = await req.params;
    const livro = await Livros.findOne({
        where:{
            id:id
        },
        raw:true
    }).catch(err => console.log(err))
    res.render('editBook', {livro} )
}

const updateBook = async (req, res) =>{
    const {id} = req.params;
    const data = req.body;
    const selector = {where:{id:id}};
    await Livros.update(data, selector).catch(err => console.log(err))
    res.redirect('/dadosLivros' )
}
const viewBook = async (req, res) =>{
    const {id} = await req.params;
    const livro = await Livros.findOne({
        where:{
            id:id
        },
        raw:true
    }).catch(err => console.log(err))
    res.render('cardsBook', {livro} )
}
const deleteBook = async (req, res) =>{
    const {id} = await req.params;
    const livro = await Livros.destroy({
        where:{
            id:id
        },
        raw:true
    }).catch(err => console.log(err))

 
    res.redirect('/dadosLivros')
}


module.exports = {
    allUsers, userForm, saveUser, editUser, updateUser, viewUser, deleteUser,  bookForm, saveBook, allBook, editBook, updateBook, viewBook, deleteBook
}