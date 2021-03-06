//dependencies
var express = require('express');
var router = express.Router();
var multer = require('multer');
// const customerController = require('./controllers/customerController');
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const commentController = require('./controllers/commentController');
const orderController = require('./controllers/orderController');
var upload = multer({ dest: 'uploads/' });

//hello world
router.get('/', (req, res) => res.send('Wel come to CPD System'))

//customer routings

//customer get request
// router.get('/api/customer', function (req, res) {
//     customerController.getCustomer(function (err, customer) {
//         console.log(err);
//         console.log(customer);
//         if (err) {
//             res.send(err);
//         }
//         res.send(customer)
//     });

// });
//customer post request
// router.post('/api/customer', function (req, res) {
//     console.log(req.body);
//     customerController.saveCustomer(req.body, function (err, result) {
//         console.log(err);
//         console.log(result);
//         if (err) {
//             res.send(err);
//         }
//         res.send(result);
//     });

// });

//customer put request
// router.put('/api/customer', function (req, res) {
//     customerController.updateCustomer(req.body, function (err, result) {
//         if (err) {
//             res.send(err);
//         }
//         //res.send(result);
//         res.send('the data is updated');
//     });

// });
//customer delete request
// router.delete('/api/customer', function (req, res) {
//     customerController.deleteCustomer(req.body, function (err, result) {
//         if (err) {
//             res.send(err);
//         }
//         res.send('the data is deleted');
//     });
// });

/*-------------------------------------------------------- */
//user routings

//user login
router.post('/api/login', function (req, res) {
    console.log(req.body);

    userController.userLogin(req.body, function (err, user) {
        console.log(err);
        console.log(user);
        if (err) {
            res.send(err);
        }
        res.send(user)
    });

});

//user get request
router.get('/api/user', function (req, res) {
    userController.getUser(function (err, user) {
        console.log(err);
        console.log(user);
        if (err) {
            res.send(err);
        }
        res.send(user)
    });

});
//user post request
router.post('/api/user', function (req, res) {
    console.log(req.body);
    userController.saveUser(req.body, function (err, result) {
        console.log(err);
        console.log(result);
        if (err) {
            res.send(err);
        }
        res.send(result);
    });

});

//user put request
router.put('/api/user', function (req, res) {
    userController.updateUser(req.body, function (err, result) {
        if (err) {
            res.send(err);
        }
        //res.send(result);
        res.send(result);
    });

});
//user delete request
router.delete('/api/user', function (req, res) {
    userController.deleteUser(req.body, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});

/*-------------------------------------------------------- */
//product routings

//product get request
router.get('/api/product', function (req, res) {
        productController.getProduct(function (err, product) {
            console.log(err);
            console.log(product);
            if (err) {
                res.send(err);
            }
            res.send(product)
        });

    });

//product get request by id
router.get('/api/product/:id', function (req, res) {
    const productId = req.params.id;
    console.log(productId);
    productController.getProductById(productId, function (err, product) {
        console.log(err);
        console.log(product);
        if (err) {
            res.send(err);
        }
        res.send(product)
    });

});
//product post request
router.post('/api/product', function (req, res) {
    console.log(req.body);
    productController.saveProduct(req.body, function (err, result) {
        console.log(err);
        console.log(result);
        if (err) {
            res.send(err);
        }
        res.send(result);
    });

});

//product put request
router.put('/api/product', function (req, res) {
    productController.updateProduct(req.body, function (err, result) {
        if (err) {
            res.send(err);
        }
        //res.send(result);
        res.send('the product is updated');
    });

});
//product delete request
router.delete('/api/product', function (req, res) {
    productController.deleteProduct(req.body, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});

/*-------------------------------------------------------- */
//comment routings

//comment get request
router.get('/api/comment', function (req, res) {
    commentController.getComment(function (err, comment) {
        console.log(err);
        console.log(comment);
        if (err) {
            res.send(err);
        }
        res.send(comment)
    });

});
//comment post request
router.post('/api/comment', function (req, res) {
    console.log(req.body);
    commentController.saveComment(req.body, function (err, result) {
        console.log(err);
        console.log(result);
        if (err) {
            res.send(err);
        }
        res.send(result);
    });

});

//comment put request
router.put('/api/comment', function (req, res) {
    commentController.updateComment(req.body, function (err, result) {
        if (err) {
            res.send(err);
        }
        //res.send(result);
        res.send('the comment is updated');
    });

});
//comment delete request
router.delete('/api/comment', function (req, res) {
    commentController.deleteComment(req.body, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send('the comment is deleted');
    });
});

/*-------------------------------------------------------- */
//order routings

//order get request
router.get('/api/order', function (req, res) {
    orderController.getOrder(function (err, order) {
        console.log(err);
        console.log(order);
        if (err) {
            res.send(err);
        }
        res.send(order)
    });

});

//order get request by user id
router.get('/api/orderbyuser/:userId', function (req, res) {
    const userId = req.params.userId;
    console.log(req.params);
    orderController.getOrderByUserId(userId, function (err, order) {
        console.log(err);
        console.log(order);
        if (err) {
            res.send(err);
        }
        res.send(order)
    });

});
//order post request
router.post('/api/order', function (req, res) {
    console.log(req.body);
    orderController.saveOrder(req.body, function (err, result) {
        console.log(err);
        console.log(result);
        if (err) {
            res.send(err);
        }
        res.send(result);
    });

});

//order put request
router.put('/api/order', function (req, res) {
    orderController.updateOrder(req.body, function (err, result) {
        if (err) {
            res.send(err);
        }
        //res.send(result);
        res.send(result);
    });

});
//order delete request
router.delete('/api/order', function (req, res) {
    orderController.deleteOrder(req.body, function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
});

/*-------------------------------------------------------- */

/*upload photo */
router.post('/api/uploads', upload.any(), function (req, res) {
    res.send({'profileImage':req.files[0].filename});
    res.send(res);
});





// app.post("/api/uploads", upload.array("uploads[]", 12), function (req, res) {
//     console.log('files', req.files);
//     res.send(req.files);
//   });

// router.get('/api/profile', upload.any(), function (req, res) {
//     console.log('this is profile routing')
//     res.send(req.files);
// });

//return router
module.exports = router;