const express = require('express');
const router = express.Router();
const Lesson = require('../models/Lesson');
const Timeline = require('../models/Timeline');

router.get('/', (req, res) => {
    res.send('hello')
});
router.get('/lesson', (req, res) => {
    Lesson.find({}, function(err, lessons){
        if(err){
            throw err;
        }
        res.json(lessons);
    })
});
router.post('/lesson', (req, res) => {
    var les = new Lesson({
        lesson_title:"admin2",
        teacher:"admin2",
        university: "青青课堂",
        number: 23434,
        price: 23443,
        pic: "https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDQmr4USIicRvRDuPvoqxSrFkP1eCFdO8KtXGvDsncvSjZGute2heeGBCiblPsebfE4s/356"
    });
    
    les.save( (err, user) => {
        if(err) throw err;
        console.log('user saved')
        res.json(user)
    });
});
router.get('/living', (req, res) => {
    let curId = req.query._id
    console.log(curId)
    Timeline.find({"_id": curId,}, function(err, livings){
        if(err){
            throw err;
        }
        res.json(livings[0]);
    })
})
router.post('/living', (req, res) => {
    var timeline = new Timeline({
        lesson_title:"express搭建博客",
        teacher:"admin2",
        chapter: "青青课堂",
        living_time: "2020/20/20",
        pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDQmr4USIicRvRDuPvoqxSrFkP1eCFdO8KtXGvDsncvSjZGute2heeGBCiblPsebfE4s/356'
    });
    
    timeline.save( (err, user) => {
        if(err) throw err;
        console.log('user saved')
        res.json(user)
    });
});

router.get('/timeline', (req, res) => {
    Timeline.find({}, function(err, livings){
        if(err){
            throw err;
        }
        let timeline = livings.map(({_id, living_time, lesson_title}) => {
            return {_id, living_time, lesson_title}
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

module.exports = router;