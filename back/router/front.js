const express = require('express');
const router = express.Router();
const Lesson = require('../models/Lesson');
const Timeline = require('../models/Timeline');
const User = require('../models/User');

router.get('/', (req, res) => {
    res.send('hello')
});
router.get('/lesson', (req, res) => {
    Lesson.find({}, function (err, lessons) {
        if (err) {
            throw err;
        }
        res.json(lessons);
    })
});

router.get('/living', (req, res) => {
    let curId = req.query._id
    console.log(curId)
    Timeline.find({ "_id": curId, }, function (err, livings) {
        if (err) {
            throw err;
        }
        res.json(livings[0]);
    })
})
router.post('/living', (req, res) => {
    var timeline = new Timeline({
        lesson_title: "express搭建博客",
        teacher: "admin2",
        chapter: "青青课堂",
        living_time: "2020/20/20",
        pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDQmr4USIicRvRDuPvoqxSrFkP1eCFdO8KtXGvDsncvSjZGute2heeGBCiblPsebfE4s/356'
    });

    timeline.save((err, user) => {
        if (err) throw err;
        console.log('user saved')
        res.json(user)
    });
});

router.get('/timeline', (req, res) => {
    Timeline.find({}, function (err, livings) {
        if (err) {
            throw err;
        }
        let timeline = livings.map(({ _id, living_time, lesson_title }) => {
            return { _id, living_time, lesson_title }
        })
        res.json(timeline.slice(0, 6));
    })
})
// router.post('/timeline', (req, res) => {
//     var timeline = new Timeline({
//         lesson_title:"express搭建博客",
//         teacher:"admin2",
//         chapter: "青青课堂",
//         living_time: "2020/20/20",
//         pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDQmr4USIicRvRDuPvoqxSrFkP1eCFdO8KtXGvDsncvSjZGute2heeGBCiblPsebfE4s/356'
//     });

//     timeline.save( (err, user) => {
//         if(err) throw err;
//         console.log('user saved')
//         res.json(user)
//     });
// });
router.post('/login', function (req, res, next) {
    const {username, password, role} = req.body;
    var resData = {
        code: 0,
        message: '',
    };
    if (username == '' || password == '') {
        resData.code = 1;
        resData.message = '用户名或密码不能为空';
        res.json(resData);
        return;
    }
    //查询数据库验证用户名和密码
    User.findOne({
        username: username,
        password: password,
        role: role
    }).then(function (userInfo) {
        if (!userInfo) {
            resData.code = 2;
            resData.message = '用户名或密码错误';
            res.json(resData);
            return;
        }
        //验证通过则登录
        resData.message = '登录成功';
        resData.userInfo = {
            _id: userInfo._id,
            username: userInfo.username,
            role: role
        };
        res.json(resData);
        return;
    })

})

router.post('/register', function (req, res, next) {
    // 拿到前台传过来的值
    // console.log("Data from submit form", req.body);
    const {username, password, checkPass, role} = req.body;
    var resData = {
        code: 0,
        message: ''
    };
    // console.log(req)
    console.log(username)
    console.log(password, role)
    //用户名不能空
    if (username == '') {
        resData.code = 1;
        resData.message = '用户名不能为空';
        res.json(resData); //使用res.json的方法返回前端数据
        return;
    }
    //密码不能为空
    if (password == '') {
        resData.code = 2;
        resData.message = '密码不能为空';
        res.json(resData);
        return;
    }
    //两次密码不能不一样
    if (password != checkPass) {
        resData.code = 3;
        resData.message = '两次输入的密码不一致';
        res.json(resData);
        return;
    }

    // 查找数据库有没有相同的用户名 ，没有的话保存到数据库
    User.findOne({
        username: username
    }).then(function (userInfo) {
        console.log("查询结果：" + userInfo); //若控制台返回空表示没有查到数据
        if (userInfo) {
            //若数据库有该记录
            resData.code = 4;
            resData.message = '用户名已被注册';
            res.json(resData);
            return;
        }
        //用户名没有被注册则将用户保存在数据库中
        var user = new User({
            username: username,
            password: password,
            role: role ? 1 : 0
        }); //通过操作对象操作数据库
        return user.save();
    }).then(function (newUserInfo) {
        resData.message = '注册成功';
        res.json(resData);
    });
})


module.exports = router;