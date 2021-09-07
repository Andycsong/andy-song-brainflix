const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');

const videosFile = require('../data/video-details.json');
const fsDirectory = './data/video-details.json'

router.post('/:id/comments', (req, res) => {
    const id = req.params.id
    const selectedVideo = videosFile.find(vid => vid.id === id)

    const postComment = {
        "id": uniqid(),
        "timestamp": Date.now(),
        "name": req.body.name,
        "comment": req.body.comment
    }
    selectedVideo.comments.push(postComment)
    videosFile.map(comment => {
        if (comment.id === selectedVideo.id) {
            return comment = selectedVideo
        }
    })
    fs.writeFile(`${fsDirectory}`, JSON.stringify(videosFile), (err) => {
        if (err)
            console.log(err);
        else {
            res.status(201).send(postComment)
        }
    })
})

router.delete('/:id/comments/:commentId', (req, res) => {
    const id = req.params.id
    const commentId = req.params.commentId
    const selectedVideo = videosFile.find(vid => vid.id === id)
    const comments = selectedVideo.comments.find(comment => comment.id === commentId)
    const indexOfComment = selectedVideo.comments.indexOf(comments)

    selectedVideo.comments.splice(indexOfComment, 1)
    videosFile.map(comment => {
        if (comment.id === selectedVideo.id) {
            return comment = selectedVideo
        }
    })
    fs.writeFile(`${fsDirectory}`, JSON.stringify(videosFile), (err) => {
        if (err)
            console.log(err);
        else {
            res.status(200).send(comments)
        }
    })

})

module.exports = router;