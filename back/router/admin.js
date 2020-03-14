const express = require('express');
const router = express.Router();
const Lesson = require('../models/Lesson');
const Chapter = require('../models/Chapter')
router.post('/createLesson', (req, res) => {
    const {teacher_id, student_id, lesson_title, teacher, university, number, price, pic} = req.body;
    var les = new Lesson({
        teacher_id,
        student_id,
        lesson_title,
        teacher,
        university,
        number,
        price,
        pic
    });

    les.save((err, les) => {
        if (err) throw err;
        res.json({
            code: 0,
            message: '创建课程成功',
            data: les
        })
    });
});

router.post('/createChapter', (req, res) => {
    const {lesson_id, chapter_name, section_name, chapter_number, section_number, teacher_id, teacher, student_id, timeLong, video} = req.body    
   console.log(chapter_number, section_number, section_name) 
    const chapter = new Chapter({
        lesson_id,
        chapter_name,
        section_name,
        chapter_number,
        section_number,
        teacher_id,
        teacher,
        student_id,
        timeLong,
        video
    })
    chapter.save((err, data) => {
        if(err) throw err;
        res.json({
            code: 0,
            message: '添加章节成功',
            data: data
        });
    })
});
router.post('/getChapters', (req, res) => {
    const {lesson_id} = req.body;
    Chapter.find({
        lesson_id: lesson_id
    }, (err, data) => {
        if(err) {
            throw err
        }else {
            const result = [];
            
            data.forEach(item => {                if(result[item.chapter_number]) {
                result[item.chapter_number].sections.push(item)
                }else {
                    result[item.chapter_number] = {}
                    result[item.chapter_number].sections = [].concat(item)
                    result[item.chapter_number].chapter_name = item.chapter_name;
                }
            })
            res.json({
                code: 0,
                message: '查询成功',
                data: result
            })
        }
    })
})
module.exports = router;