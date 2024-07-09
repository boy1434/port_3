const API_KEY = `50b049f2fbce4d8f94a2df193555ac3d`;

const getLatestNews = async () => {
    const url = new URL(`
            http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines
        `);
        const response = await fetch(url);
        const data = await response.json();
        news = data.articles;
        console.log(news);
}

getLatestNews();