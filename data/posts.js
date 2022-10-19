import { USERS } from './users'

export const POSTS = [
    {
        imageUrl: "https://images.unsplash.com/photo-1666065988253-3ad95ca4404f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        user: USERS[0].user,
        likes: 7870,
        caption: "what a beautiful place!",
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'joshua',
                comment: "Wowww! You so have a wonderful day there!"
            },
            {
                user: 'lively',
                comment: "yoh, man!! XD"
            },
        ]
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1666114478847-c478d8669cf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
        user: USERS[3].user,
        likes: 1234,
        caption: "This vibe",
        profile_picture: USERS[3].image,
        comments: [
            {
                user: 'bejamin',
                comment: "you are so coooool, man!"
            },
        ]
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1601941188273-51a23bd2cad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
        user: USERS[1].user,
        likes: 179,
        caption: "This pic I love",
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'aya',
                comment: "where are you! I wanna be there too XD"
            },
            {
                user: 'jung_lee',
                comment: "hey take me there so coool place"
            },
        ]
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
        user: USERS[4].user,
        likes: 43,
        caption: "startup vibe (not so real lol)",
        profile_picture: USERS[4].image,
        comments: [

        ]
    },
]