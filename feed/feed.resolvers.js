import client from "../client";

export default {
    Feed: {
        user: ({userId}) => client.user.findUnique({where:{id:userId}}),
        totalLikes: ({id}) => client.feedLike.count({where:{feedId:id}}),
        photos:({id}) => client.feedPhoto.findMany({where:{feedId:id}}),
        comments:({id}) => client.feedComment.findMany({where:{feedId:id}})
    },
    FeedPhoto: {
        feed: ({feedId}) => client.feed.findUnique({where:{id:feedId}})
    },
    FeedComment:{
        feed: ({feedId}) => client.feed.findUnique({where:{id:feedId}})
    }
}
