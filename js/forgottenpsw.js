document.addEventListener('DOMContentLoaded', () => {
    const btnKuld = document.getElementById('kuldgomb');
    const csatlakozz = document.querySelector('.csatlakozz');
    const forum = document.querySelector('.forum');
    const home = document.querySelector('.home');
    
    // Az fo id-jú div szélessége mindig akkora, mint az ablak szélessége
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
    
    
    btnKuld.addEventListener('click', () => {
        window.location.href = '../csatlakozz.html';
    });
    
   
    
        // Hamburger menü ikon és a navigáció
        const hamburgerIcon = document.querySelector('.hamburger-menu');
        const navMenu = document.querySelector('nav');
    
        if (hamburgerIcon && navMenu) {
            // Kattintás esemény a hamburger menü ikonra
            hamburgerIcon.addEventListener('click', () => {
                // Menü megjelenítése vagy elrejtése
                navMenu.classList.toggle('active');
            });
        }
    
        // Light mode gomb pozíciójának beállítása
        const lightLabel = document.querySelector('#light label'); // A gomb kiválasztása
    
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
    