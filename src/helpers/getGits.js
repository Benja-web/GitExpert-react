
export const getGifs = async (categorias) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(categorias)}&api_key=eGeUnIK8RzlLPWfJWzV8FePFqk55QiYU`;
    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
};