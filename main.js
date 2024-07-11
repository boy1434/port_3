$(document).ready(function() {
    $('.x_btn').click(function() {
        $('.side_menus').animate({left: '-300px'}, 300); 
      });
      $('.menu-icon').click(function() {
        $('.side_menus').animate({left: '0'}, 300);; // 버튼을 클릭할 때 메뉴 보이기/숨기기 토글
      });

      $('.search_icon').click(function() {
        $('.search_input').toggle(); // 검색 컨테이너를 토글하여 보이거나 숨김
      });
  });
const API_KEY = `50b049f2fbce4d8f94a2df193555ac3d`;
let newsList = [];
const getLatestNews = async () => {
    const url = new URL(`
            https://jade-marshmallow-4f5564.netlify.app//top-headlines
        `);
        const response = await fetch(url);
        const data = await response.json();
        newsList = data.articles;
        render();
        console.log(newsList);
}
const render= () => {
    const newsHTML = newsList.map((news)=>`
    <div class="row news">
          <div class="col-lg-4">
            <img
              class="news_img"
              src=${news.urlToImage}/>
          </div>
          <div class="col-lg-8">
            <h2>${news.title}</h2>
            <p>$${news.description}</p>
            <div>${news.source.name} * ${news.publishedAt}</div>
          </div>
        </div>`
    ).join('');

    document.getElementById("news_board".innerHTML = newsHTML)
}

getLatestNews();