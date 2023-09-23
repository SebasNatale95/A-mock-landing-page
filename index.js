const apiKeyParam = '/?client_id=rZm2kqOg-DBejXWEk3Y3oBhwWBX-yX_rrBGhHlMVzTs';

const portfolioImageContainer = document.querySelectorAll(".portfolio_image_container");
const portfolioImageMarco = document.querySelectorAll(".portfolio_image_marco");

async function getImages() {
    let foundImages = await fetch('https://api.unsplash.com/photos' + apiKeyParam)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            return error;
        });
    for(let i = 0; i < foundImages.length; i++) {
        var image = document.createElement("img");
        image.setAttribute("src", foundImages[i].urls.small);
        portfolioImageContainer[i].appendChild(image);
        portfolioImageContainer[i].onmouseover = () => {
            portfolioImageMarco[i].style.display = "block";
        }
        portfolioImageContainer[i].onmouseout = () => {
            portfolioImageMarco[i].style.display = "none";
        }
    };
};

window.onload = async () => {
    await getImages();
}