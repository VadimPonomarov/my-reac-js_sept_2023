export const myHttpUrls = {
    baseUrl: "https://jsonplaceholder.typicode.com/",
    todos: {
        all: "todos",
    },
    albums: {
        all: "todos",
    },
    comments: {
        all: "comments",
        getById: (id) => `comments/${id}/posts`
    },
    posts: {
        all: "posts",
    }

};
