fetch('https://ghibliapi.herokuapp.com/films')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        for (let i = 0; i < 20; i++) {
            console.log(json[i]);
            let gTitle = json[i].title;
            document.getElementsByClassName("title").item(i).innerHTML = gTitle;
            let gDescription = json[i].description;
            document.getElementsByClassName("description").item(i).innerHTML = gDescription;
            let gDirector = json[i].director;
            document.getElementsByClassName("director").item(i).innerHTML = "Director: " + gDirector;
            let gProducer = json[i].producer;
            document.getElementsByClassName("producer").item(i).innerHTML = "Producer: " + gProducer;
            let gDate = json[i].release_date;
            document.getElementsByClassName("date").item(i).innerText = "Release Date: " + gDate;
            let gRt = json[i].rt_score;
            document.getElementsByClassName("rt").item(i).innerText = `Rotten Tomatoes Score: ${gRt}`;
            
        }
        // let imageRick = json.results[0].image;
        // let imageMorty = json.results[1].image;
        // document.getElementById("imageOne").src = imageRick;
        // document.getElementById("imageTwo").src = imageMorty;
    });


