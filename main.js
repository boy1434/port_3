const API_KEY = `50b049f2fbce4d8f94a2df193555ac3d`;

const getLatestNews = async () => {
    const url = new URL(`
            https://jade-marshmallow-4f5564.netlify.app//top-headlines
        `);
        const response = await fetch(url);
        const data = await response.json();
        news = data.articles;
        console.log(news);
}

getLatestNews();