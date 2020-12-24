const express = require('express');
const router = express.Router();
const upload = require('../../modules/multer')

const profileController = require('../../controller/profileController');

router.post('/a', upload.single('image'), async (req, res) => {
    const image = req.file.location;
    const userName = req.userName;
    const userEmail = req.userEmail
    
    try{
    //const editProfile = await profileController.postProfile(image,userName,userEmail)
    return res.send({ imageUrl: image, name:userName, email:userEmail})
    }
    catch(e){
        return res.status("실패").send("입력에러")
    }
});

router.post('/b', upload.single('image'), async (req, res) => {
    const image = req.file.location;
    const userName = req.userName;
    const userEmail = req.userEmail

    res.send({
        imageUrl : image,
        file: req.file,
        body: req.body
    });
});


module.exports = router;
