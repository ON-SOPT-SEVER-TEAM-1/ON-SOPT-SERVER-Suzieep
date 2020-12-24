const sequelize = require('sequelize');
const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const {
    User,
    Post,
    Like
} = require('../models');

module.exports = {
    createPost: async (req, res) => {
        const {
            userId,
            title,
            contents
        } = req.body;
        try {
            const user = await User.findOne({
                where: {
                    id: userId
                }
            });
            const post = await Post.create({
                title,
                contents
            });
            await user.addPost(post);
            return res.status(sc.OK).send(ut.success(sc.OK, rm.CREATE_POST_SUCCESS, post));
        } catch (err) {
            console.log(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_POST_FAIL));
        }
    },
    readPosts: async (req, res) => {
        try {
            const posts = await Post.findAll({
                
                include: [{
                    model: User,
                    attributes: ['email', 'userName']
                }, {
                    model: User,
                    as: 'Liker',
                    attributes: ['userName'],
                }]
            });
            console.log(JSON.stringify(posts, null, 2));
            return res
                .status(sc.OK)
                .send(ut.success(sc.OK, rm.READ_POST_ALL_SUCCESS, posts));
        } catch (err) {
            console.log(err);
            return res
                .status(sc.INTERNAL_SERVER_ERROR)
                .send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.READ_POST_ALL_FAIL));
        }
    },
    createLike: async (req, res) => {
        const PostId = req.params.postId;
        const UserId = req.body.userId;
        try {
            const like = await Like.create({
                PostId,
                UserId
            });
            return res
                .status(sc.OK)
                .send(ut.success(sc.OK, rm.CREATE_LIKE_SUCCESS, like));
        } catch (err) {
            console.log(err);
            return res
                .status(sc.INTERNAL_SERVER_ERROR)
                .send(ut.success(sc.INTERNAL_SERVER_ERROR, rm.CREATE_LIKE_FAIL));
        }
    },

    deleteLike: async(req,res)=>{
        const PostId = req.params.postId;
        const UserId = req.body.userId;
        try {
            const like = await Like.findOne({
                PostId,
                UserId
            })
            if (!like) {
                console.log("존재하지 않는 like입니다.");
                return res
                    .status(sc.BAD_REQUEST)
                    .send(util.fail(sc.BAD_REQUEST, rm.DELETE_LIKE_FAIL));
            }
            await Like.destroy({
                where:{
                    PostId,
                    UserId}
            })
            return res
                .status(sc.OK)
                .send(ut.success(sc.OK, rm.DELETE_LIKE_SUCCESS, like));
        } catch (err) {
            console.log(err);
            return res
                .status(sc.INTERNAL_SERVER_ERROR)
                .send(ut.success(sc.INTERNAL_SERVER_ERROR, rm.DELETE_LIKE_FAIL));
        }
    },
    getAllUser :async (req, res) => {
        //1. 모든 사용자 정보 (id, email, userName ) 리스폰스!
    
        try {
            const users = await User.findAll({
                attributes: ['id', 'email', 'userName']
            })
    
            console.log(users);
            return res
                .status(statusCode.OK)
                .send(util.success(statusCode.OK, responseMessage.USER_READ_ALL_SUCCESS, users))
    
        } catch (error) {
            return res
                .status(statusCode.INTERNAL_SERVER_ERROR)
                .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.USER_READ_ALL_FAIL));
    
        }
        // status: 200, message: READ_USER_ALL_SUCCESS, data: id, email, userName 반환
    }
}
