document.getElementById('fetch-joke').addEventListener('click', () => {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('joke').innerText = data.joke;
    })
    .catch(error => {
        document.getElementById('joke').innerText = 'Oops! Something went wrong.';
        console.error('Error fetching joke:', error);
    });
});
