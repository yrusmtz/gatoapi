function getRandomCat() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const catImage = document.getElementById('cat-image');
            catImage.src = data[0].url;
            catImage.style.transform = 'scale(1.1)';
            setTimeout(() => {
                catImage.style.transform = 'scale(1)';
            }, 300);
        })
        .catch(error => console.error('Error al obtener imagen de gato:', error));
}

function toggleTheme() {
    const body = document.body;
    const navbar = document.getElementById('navbar');
    const buttons = document.querySelectorAll('button');
    const catContainer = document.getElementById('cat-container');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';

    if (currentTheme === 'light') {
        body.classList.add('dark-theme');
        navbar.style.backgroundColor = '#555';
        buttons.forEach(button => {
            button.style.backgroundColor = '#333';
            button.style.color = '#fff';
        });
        catContainer.style.backgroundColor = '#444';
        title.style.color = '#fff';
        description.style.color = '#fff';
        themeIcon.innerHTML = '🌞';
    } else {
        body.classList.remove('dark-theme');
        navbar.style.backgroundColor = '#4caf50';
        buttons.forEach(button => {
            button.style.backgroundColor = '#fff';
            button.style.color = '#333';
        });
        catContainer.style.backgroundColor = '#fff';
        title.style.color = '#333';
        description.style.color = '#555';
        themeIcon.innerHTML = '🌜';
    }
}

// Cargar un gato al cargar la página
getRandomCat();