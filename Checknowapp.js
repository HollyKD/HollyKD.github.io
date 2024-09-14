document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");
    
    for(const image of images){
        fetch("https://unsplash.com/photos/road-with-assorted-cars-m2TKgpU3cvc?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash")
        .then(response => response.json())
        .then(data => {
            image.src = data.message
            image.width = 100;
            image.height = 100;
        })
    }

})