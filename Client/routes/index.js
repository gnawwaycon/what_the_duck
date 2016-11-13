var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var model = require('../models/model');
var Demo = model.Demo;

mongoose.connect('mongodb://localhost/express_demo');

// 首页 Index
router.get('/', function(req, res, next) {
    Demo.find(function(err, docs) {
        res.render('index', {
            title: 'Main',
            demos: docs
        });
    });
});

// Test
router.get('/test.html', function(req, res, next) {
    Demo.find(function(err, docs) {
        res.render('test', {
            title: 'TEST PAGE',
            demos: docs
        });
    });
});

// 跳转到添加数据页面
router.get('/add.html', function(req, res, next) {
    Demo.find(function(err, docs) {
        res.render('add', {
            title: 'Adding Data',
            demos: docs
        });
    });
});

// 添加一条数据
router.post('/add.html', function(req, res, next) {

    var demo = new Demo({
        Name_g: req.body.Name_g,
        Name_s: req.body.Name_s,
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

// 根据id删除对应的数据
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

// 查询对应修改记录，并跳转到修改页面
router.get('/update.html', function(req, res, next) {

    var id = req.query.id;

    // if (id && id != '') {
        Demo.findById(id, function(err, docs) {
            console.log('========================findById(\"' + id + '\")=======================\n' + docs);
            res.render('update', {
                title: 'Modify the Data',
                demo: docs
            });
        });
    // }

});

// 修改数据
router.post('/update.html', function(req, res, next) {

    var demo = {
        Name_g: req.body.Name_g,
        Name_s: req.body.Name_s,
        Difficulty: req.body.Difficulty,
        Engagement: req.body.Engagement,
        Review: req.body.Review
    };

    var id = req.body.id;

    if (id && id != '') {
        console.log('=======================update id = ' + id);
        Demo.findByIdAndUpdate(id, demo, function(err, docs) {
            console.log(docs);
            res.redirect('/');
        });
    }

});


module.exports = router;
