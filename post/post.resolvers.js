import client from "../client";

export default {
    Post:{
        user: ({userId}) => client.user.findUnique({where:{id:userId}}),
        comments: ({id}) => client.postComment.findMany({where:{postId:id}}),
        totalLikes: ({id}) => client.postLike.count({where:{postId:id}})
    }
}