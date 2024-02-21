export const myHttpUrls = {
    baseUrl: "https://rickandmortyapi.com/api",
    episode: {
        all: (page: number) => `todos/?page=${page}`,
    },
};