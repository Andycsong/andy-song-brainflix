const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');

const videosFile = require('../data/video-details.json');

router.post('/:id/comments', (req, res) => {
    // const videos = readVideosFile();
    const id = req.params.id
    const selectedVideo = videosFile.find(vid => vid.id === id)

    // if (!selectedVideo) {
    //     return res.status(404).send('Not found')
    // }

    // if (!req.body.content) {
    //     return res.status(400).send("Fill out the comment field")
    // }

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
    fs.writeFile(__dirname + '/../data/video-details.json', JSON.stringify(videosFile, null, 2), (err) => {
        if (err) {
            console.log(err);
        } else {
            res.status(201).send(postComment)
        }
    })
})


router.delete('/:id/comments/:commentId', (req, res) => {
    const id = req.params.id
    const commentId = req.params.commentId
    // const selectedVideo = videosFile.find(vid => vid.id === id)
    const selectedVideo = videosFile.findIndex(vid => vid.id === id)
    // const selectedComment = selectedVideo.comments.find(comment => comment.id === commentId)
    const commentsIndexed = videosFile.findIndex(comment => comment.id === commentId)

    if (!commentId || !id || commentsIndexed === -1) {
        return res.status(404).json('Comment was not found')
    }
    const deletedComment = selectedVideo.splice(commentsIndexed, 1)
    videosFile.map(comment => {
        if (comment.id === selectedVideo.id) {
            return comment = selectedVideo
        }
    })
    fs.writeFile(__dirname + '/../data/video-details.json', JSON.stringify(videosFile, null, 2), (err) => {
        if (err) {
            console.log(err);
        } else {
            res.status(201).send(deletedComment)
        }
    })


})


module.exports = router;