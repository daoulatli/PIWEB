var Product = require('../models/product');
var mongoose = require('mongoose');



mongoose.connect('localhost:27017/mbDB');


var products = [
    new Product({
        imagePath: 'https://critizr.com/media/image/brand/mrbricolage.png',
        title: '300x300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
        price: 10
    }),
     new Product({
        imagePath: 'https://critizr.com/media/image/brand/mrbricolage.png',
        title: '300x300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
        price: 20
    }),
     new Product({
        imagePath: 'https://critizr.com/media/image/brand/mrbricolage.png',
        title: '300x300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
        price: 15
    }),
     new Product({
        imagePath: 'https://critizr.com/media/image/brand/mrbricolage.png',
        title: '300x300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
        price: 40
    }),
      new Product({
        imagePath: 'https://critizr.com/media/image/brand/mrbricolage.png',
        title: '300x300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
        price: 50
    })
];
var done = 0;
for (i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }

    });
}

function exit() {
    mongoose.disconnect();
}
