async function register() {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const psw = document.getElementById('psw').value;
    const psw2 = document.getElementById('psw2').value;


    const res = await fetch('http://127.0.0.1:6500/api/auth/registration', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, username, psw}),
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
    document.getElementById('username').value = '';
    document.getElementById('psw').value = '';
    document.getElementById('psw2').value = '';
}





document.addEventListener('DOMContentLoaded', () => {
    const btnReg = document.getElementsByClassName('reg')[0];
    const csatlakozz = document.querySelector('.csatlakozz');
    const forum = document.querySelector('.forum');
    const home = document.querySelector('.home');
    const hamburgerIcon = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav');
    const lightLabel = document.querySelector('#light label'); // A gomb kiválasztása
    const fo = document.getElementById('fo');

    if (fo) {
        const updateFoWidth = () => {
            fo.style.width = `${window.innerWidth}px`;
        };
    
        // Kezdeti szélesség beállítása
        updateFoWidth();
    
        // Az ablakméret változására frissítjük az #fo szélességét
        window.addEventListener('resize', updateFoWidth);
    }
    
    // Gombok funkcióinak hozzáadása
    csatlakozz?.addEventListener('click', () => {
        window.location.href = '../csatlakozz.html';
    });
    
    home?.addEventListener('click', () => {
        window.location.href = '../index.html';
    });
    
    forum?.addEventListener('click', () => {
        window.location.href = '../forum.html';
    });
    
    
    btnReg.addEventListener('click',register);
    
      
    
        if (hamburgerIcon && navMenu) {
            // Kattintás esemény a hamburger menü ikonra
            hamburgerIcon.addEventListener('click', () => {
                // Menü megjelenítése vagy elrejtése
                navMenu.classList.toggle('active');
            });
        }
    
        
    
        const setPosition = () => {
            const windowWidth = window.innerWidth; // Ablak szélessége
    
            // 430px alatti képernyőméret esetén
            if (windowWidth <= 430) {
                lightLabel.style.transform = 'translate(50%,-670%)'; // Kisméretű gomb pozíció
            }
            // 932px alatti képernyőméret esetén
            else if (windowWidth <= 932) {
                lightLabel.style.transform = 'translate(50%,-250%)'; // Kisebb mobil pozíció
            }
            // Nagyobb képernyőméretek (asztali nézet)
            else {
                lightLabel.style.transform = ''; // Eltávolítjuk a transformot asztali nézetben
            }
        };
    
        // Alapértelmezett pozíció beállítása betöltéskor
        setPosition();
    
        // Ablakméret változásra reagálunk
        window.addEventListener('resize', setPosition);
    });
    