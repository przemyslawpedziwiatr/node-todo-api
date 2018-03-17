const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5aad46bca8dc24ac0a55b60f';
var userId = '5aad26e995d82e180396d9de';

if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
}
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// })

Todo.findById(id).then((todo) => {
    if(!todo) {
        console.log('Id not found');
    }
    console.log('Todo By Id', todo)
}).catch((e) => console.log(e));

User.findById(userId).then((user) => {
    if(!user) {
        console.log('Id not found');
    }
    console.log('User By Id', user)
}).catch((e) => console.log(e));