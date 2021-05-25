const getRandomImage = () => {
    setLoading();
    const xhttp = new XMLHttpRequest();
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

const setLoading = () => {
    document.querySelector('#image').src = chrome.extension.getURL('assets/loading.gif')
}

const throwError = () => {
   undefinedFunction(100)
}

// setInterval(() => getRandomImage(), 5000);

window.addEventListener("load", () => {
    getRandomImage();
    document.querySelector("#btn").addEventListener("click", getRandomImage)
    document.querySelector("#err-btn").addEventListener("click", throwError)
})