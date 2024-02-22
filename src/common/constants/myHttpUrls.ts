const baseUrl = "https://rickandmortyapi.com/api";
const episodes = "/episode";
const characters = "/characters";
const myHttpUrls = {
    episodes,
    characters: {
        byIds: (ids: number[] | number) => `${characters}/${ids}`
    }
};

export {baseUrl, myHttpUrls}