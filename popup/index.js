const getRandomImage = () => {
    const xhttp = new XMLHttpRequest();
    // xhttp.open("GET", "https://api.giphy.com/v1/gifs/search?api_key=oWskRqAliCwuyzc6QAJPOBcf9Xxxa2K0&q=cheeseburger&rating=pg", true);
    xhttp.open("GET", "https://api.giphy.com/v1/gifs/random?api_key=oWskRqAliCwuyzc6QAJPOBcf9Xxxa2K0&rating=g", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Response
            const img = JSON.parse(this.responseText).data;
            document.querySelector('#image').src = img.images.fixed_height.url
        }
    };
    xhttp.send();
}



setInterval(() => getRandomImage(), 5000);
getRandomImage();

window.addEventListener("load", () => document.querySelector("#btn").addEventListener("click", getRandomImage))