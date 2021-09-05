const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');


const videosFile = './data/video-details.json';

const readVideosFile = () => {
    const videosFileContent = fs.readFileSync(videosFile);
    const parsedVideosFileContent = JSON.parse(videosFileContent)
    return parsedVideosFileContent;
}

const writeVideosFile = (info) => {
    const infoStringify = JSON.stringify(info);
    fs.writeFileSync(videosFile, infoStringify)
}


router.get('/', (req, res) => {
    try {
        const videos = readVideosFile();
        return res.status(200).json(videos);
    } catch (error) {
        return res.status(500).json({ error: 'The file cannot be read.' })
    }
});

router.get('/:id', (req, res) => {
    const id = readVideosFile();
    const individualId = id.find((eyedee) => eyedee.id === req.params.id);
    if (!individualId) {
        return res.status(404).send('Id not found');
    }

    res.json(individualId);

})


router.post("/", (req, res) => {
    const videos = readVideosFile();
    const imageGenerator = Math.floor(Math.random() * 9);

    const newVideo = {
        id: uniqid(),
        title: req.body.title,
        "channel": 'BrainSchool',
        "image": (`http://localhost:8080/images/image${imageGenerator}.jpeg`),
        "description": req.body.description,
        "views": "999999",
        "likes": "333333",
        "duration": '4:20',
        "video": req.body.video,
        "timestamp": req.body.timestamp,
        "comments": []
    }

    videos.push(newVideo)
    writeVideosFile(videos);

    try {
        return res.status(200).json(newVideo)
    } catch (error) {
        return res.status(404).send('Failed to post')
    }
});


module.exports = router;