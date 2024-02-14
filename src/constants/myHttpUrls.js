export const myHttpUrls = {
    baseUrl: "https://jsonplaceholder.typicode.com/",
    todos: {
        all: "todos",
        getById: (id) => `todos/${id}`
    },
    albums: {
        all: "albums",
        getById: (id) => `albums/${id}`
    },
    comments: {
        all: "comments",
        getById: (id) => `comments/${id}`,
    },
    posts: {
        all: "posts",
        getById: (id) => `posts/${id}`,
        getCommentsByPostId: (id) => `posts/${id}/comments`
    }

};
