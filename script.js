var url = 'https://jsonp.afeld.me/?callback=?&url=https://www.freetogame.com/api/games?platform=pc';


$.getJSON(url, function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {


        display.innerHTML += `
        <ul>  <u><h2>     ${data[i].title} </h2></u>
              
              ${data[i].developer}
             <br>
              ${data[i].genre}
              <br>
<a href="${data[i].game_url}">More info</a></ul>
<br>
              `;

    }
});