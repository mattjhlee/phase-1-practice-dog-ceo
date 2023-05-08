console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(data => {
            const imageContainer = document.getElementById('dog-image-container');
            data.message.forEach(element => {
                const image = document.createElement('img');
                image.src = element;
                imageContainer.appendChild(image);
            });
        })
    
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(data => {
            const breedsList = document.querySelector("#dog-breeds");
            const breeds = data.message;
            Object.keys(breeds).forEach((breed) =>{
                const li = document.createElement('li');
                li.textContent = breed;
                breedsList.appendChild(li);
                li.addEventListener("click", function() {
                    li.style.color = 'blue';
                })
            })
        
            const dropDown = document.getElementById('breed-dropdown');
            dropDown.addEventListener('change', function(event) {
                const selectedLetter = event.target.value;
                breedsList.textContent = ' ';
                Object.keys(breeds).forEach( (breed) => {
                    if(breed.startsWith(selectedLetter)) {
                        const li = document.createElement('li');
                        li.textContent = breed;
                        breedsList.appendChild(li);
                        li.addEventListener("click", function() {
                        li.style.color = 'blue'
                    })}
                })
            })
        
        
        })
    }
    )