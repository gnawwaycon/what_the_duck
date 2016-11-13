var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var model = require('../models/model');
var Demo = model.Demo;

mongoose.connect('mongodb://localhost/express_demo');

// router.get('/', function(req, res, next) {
//     Demo.find(function(err, docs) {
//         res.render('index', {
//             title: 'Main',
//             demos: docs
//         });
//     });
// });

router.get('/', function(req, res, next) {
    Demo.find().distinct('Name_g', function(error, subjects) {
        res.render('index', {
            title: 'Main',
            demos: subjects
        });
    });
});

router.get('/test.html', function(req, res, next) {
    Demo.find().distinct('Name_s', function(error, subjects) {
        res.render('test', {
            title: 'test',
            demos: subjects
        });
    });
});


router.get('/add.html', function(req, res, next) {
    Demo.find(function(err, docs) {
        res.render('add', {
            title: 'Add New Review',
            demos: docs
        });
    });
});

router.post('/add.html', function(req, res, next) {

    var demo = new Demo({
        Name_g: req.body.Name_g.replace(/\s/g, '-'),
        Name_s: req.body.Name_s.replace(/\s/g, '-'),
        Difficulty: req.body.Difficulty,
        Engagement: req.body.Engagement,
        Review: req.body.Review
    });

    console.log('======================create========================');

    demo.save(function(err, doc) {
        console.log(doc);
        res.redirect('/');
    });

});

router.get('/del.html', function(req, res, next) {

    var id = req.query.id;

    if (id && id != '') {
        console.log('=====================delete id = ' + id);
        Demo.findByIdAndRemove(id, function(err, docs) {
            console.log(docs);
            res.redirect('/');
        });
    }

});

router.get('/update.html', function(req, res, next) {

    var Name_s = req.query.Name_s;

    if (Name_s && Name_s != '') {
        Demo.find({'Name_s' : Name_s}, function(err, docs) {
            res.render('update', {
                title: 'Show me the fuking info I want bitch',
                demos: docs
            });
        });
        // Demo.findById(Name_s, function(err, docs) {
        //     console.log('========================findById(\"' + Name_s + '\")=======================\n' + docs);
        //     res.render('update', {
        //         title: '修改数据',
        //         demo: docs
        //     });
        // });
    }

});

// router.post('/update.html', function(req, res, next) {

//     var demo = {
//         uid: req.body.uid,
//         title: req.body.title,
//         content: req.body.content
//     };

//     var id = req.body.id;

//     if (id && id != '') {
//         console.log('=======================update id = ' + id);
//         Demo.findByIdAndUpdate(id, demo, function(err, docs) {
//             console.log(docs);
//             res.redirect('/');
//         });
//     }

// });


module.exports = router;
