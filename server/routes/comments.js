const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');

const videosFile = require('../data/video-details.json');

router.post('/:id/comments', (req, res) => {
    // const videos = readVideosFile();
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
    fs.writeFile(`${videosFile}`, JSON.stringify(videosFile), (err) => {
        try {
            res.status(201).send(postComment)
        } catch (error) {
            console.log(error);
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
            return comment - selectedVideo
        }
    })
    fs.writeFile(`${videosFile}`, JSON.stringify(videosFile), (err) => {
        try {
            res.status(200).send(comments)
        } catch (error) {
            console.log(error);
        }
    })

})

module.exports = router;