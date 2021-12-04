import client from "../client";

export default {
    Post:{
        user: async ({userId}) => await client.user.findUnique({where:{id:userId}}),
        comments: async ({id}) => await client.postComment.findMany({where:{postId:id}}),
        totalLikes: async ({id}) => await client.postLike.count({where:{postId:id}}),
        isMine: async ({id},__,{loggedInUser}) => {
            const post = await client.post.findUnique({
                where: {id},
                select: {userId: true},
            })
            return post.userId === loggedInUser.id
        }
    },
    PostCategory:{
        posts: async ({id}) => await client.post.findMany({
            where:{categoryId:id}
        })
    },
    PostComment:{
        user: async ({userId}) => await client.user.findUnique({
            where:{id:userId}
        }),
        post: async ({postId}) => await client.post.findUnique({
            where:{id:postId}
        }),
        isMine: async ({id},__,{loggedInUser}) => {
            const comment = await client.postComment.findUnique({
                where: {id},
                select: {userId: true},
            })
            return comment.userId === loggedInUser.id
        }
    }
}
