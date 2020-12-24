const sequelize = require('sequelize');
const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');

module.exports = {
    postProfile: async (req, res) => {
        const image = req.file.location;
        const userName = req.userName;
        const userEmail = req.userEmail
        
        try{
        
        //const editProfile = await profileController.postProfile(image,userName,userEmail)
        return res.status("성공").send({ imageUrl: image, file: req.file, body:req.body})
        }
        catch(e){
            return res.status("실패").send("입력에러")
        }
    }
}
