document.addEventListener('DOMContentLoaded', () => {
    // Az elemek kiválasztása
    const csatlakozz = document.querySelector('.csatlakozz');
    const forum = document.querySelector('.forum');
    const home = document.querySelector('.home');
    const iconLogout = document.getElementsByClassName('icon-logout')[0];
    // Az fo id-jú div szélessége mindig akkora, mint az ablak szélessége
    const fo = document.getElementById('fo');
    const button = document.querySelectorAll('button')[0];
    const results = document.getElementById('results');
    if (fo) {
        const updateFoWidth = () => {
            fo.style.width = `${window.innerWidth}px`;
        };

        // Kezdeti szélesség beállítása
        updateFoWidth();

        // Az ablakméret változására frissítjük az #fo szélességét
        window.addEventListener('resize', updateFoWidth);
    }

//keresés
    button.addEventListener('click', searchProducts);
    async function searchProducts() {
        const search = document.getElementById('search').value;
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';
    
        const response = await fetch(`http://localhost:3000/products/${search}`);
    
        const products = await response.json();
    
        if (products.length === 0) {
            const noProductsMessage = document.createElement('p');
            noProductsMessage.textContent = 'A termék nem található.';
            resultsDiv.appendChild(noProductsMessage);
        } else {
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
    
                const productName = document.createElement('h2');
                productName.textContent = product.name;
                productDiv.appendChild(productName);
    
                const productDescription = document.createElement('p');
                productDescription.textContent = product.description;
                productDiv.appendChild(productDescription);
    
                const productPrice = document.createElement('p');
                const strongElement = document.createElement('strong');
                strongElement.textContent = 'Price: ';
                productPrice.appendChild(strongElement);
                productPrice.appendChild(document.createTextNode(`$${product.price}`));
                productDiv.appendChild(productPrice);
    
                resultsDiv.appendChild(productDiv);
            });
        }
    }









    iconLogout.addEventListener('click', logout);

    async function logout(upload_id){
        console.log(upload_id);
        const res = await fetch(`http://192.168.10.18:6500/api/auth/logout`, {
            method: 'POST',
            credentials: 'include'
        });
    
        const data = await res.json();
        
        if(res.ok){
            alert(data.message);
            window.location.href='../index.html';
        }else{
            alert('Hiba a kijelentkezéskor');
       
        }
    
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
