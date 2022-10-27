//The user will enter a date. Use that date to get the NASA picture of the day
document.querySelector('button').addEventListener('click', getPicture)

function getPicture() {
    let date = document.querySelector('input').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=Sw80tXzrDUQQOekQofcLEYumUvxtD8b4GtJOQQkO&date=${date}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        if (data.media_type === 'video') {
            document.querySelector('img').src = ""
            document.querySelector('iframe').src = data.url
            document.querySelector('h3').innerText = data.explanation
            document.querySelector('h2').innerText = data.title
        } else {
            document.querySelector('iframe').src = ""
            document.querySelector('img').src = data.hdurl
            document.querySelector('h3').innerText = data.explanation
            document.querySelector('h2').innerText = data.title
        }        
    })

    .catch(err => {
        console.log(`error ${err}`)
    });
}