async function login() {
    const email = document.getElementById('email').value;
    const psw = document.getElementById('psw').value;

    const res = await fetch('http://192.168.10.18:6500/api/auth/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, psw }),
        credentials: 'include'
    });

    const data = await res.json();

    if (res.ok) {
        resetInputs();
        alert(data.message);
        window.location.href = '../index.html';
    } else if (data.errors) {
        let errorMessage = '';
        data.errors.forEach(error => {
            errorMessage += `${error.error}\n`;
        });
        alert(errorMessage);
    } else if (data.error) {
        alert(data.error);
    } else {
        alert('Ismeretlen hiba');
    }
}

function resetInputs() {
    document.getElementById('email').value = '';
    document.getElementById('psw').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.querySelector('.login');
    const csatlakozz = document.querySelector('.csatlakozz');
    const forum = document.querySelector('.forum');
    const home = document.querySelector('.home');
    const fo = document.getElementById('fo');
    const hamburgerIcon = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav');
    const lightLabel = document.querySelector('#light label');

    if (fo) {
        const updateFoWidth = () => {
            fo.style.width = `${window.innerWidth}px`;
        };
        updateFoWidth();
        window.addEventListener('resize', updateFoWidth);
    }

    csatlakozz?.addEventListener('click', () => {
        window.location.href = '../csatlakozz.html';
    });
    home?.addEventListener('click', () => {
        window.location.href = '../index.html';
    });
    forum?.addEventListener('click', () => {
        window.location.href = '../forum.html';
    });
    btnLogin?.addEventListener('click', login);

    if (hamburgerIcon && navMenu) {
        hamburgerIcon.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    const setPosition = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 430) {
            lightLabel.style.transform = 'translate(50%,-670%)';
        } else if (windowWidth <= 932) {
            lightLabel.style.transform = 'translate(50%,-250%)';
        } else {
            lightLabel.style.transform = '';
        }
    };

    setPosition();
    window.addEventListener('resize', setPosition);
});