window.addEventListener('DOMContentLoaded', checkUserLoggedIn);
let logged = false;
async function checkUserLoggedIn() {

        const res = await fetch('http://192.168.10.18:6500/api/auth/validate', {
            method: 'GET', 
            credentials: 'include'
        });

        const data = await res.json();
        console.log(data);

        const card2 = document.querySelector('.card2');
        const plus = document.querySelector('.circle');

        if (data.loggedIn) {
            logged = true;
            card2.style.display = 'flex';
        } else {
            logged = false;
            card2.style.display = 'none';
            plus.style.display = 'none';
            getPosts();
        }
    }
       


async function getPosts() {
    const res = await fetch('http://192.168.10.18:6500/api/forum/allposts', {
        method: 'GET',
        credentials: 'include'
    });
    const data = await res.json();
    console.log(data);
    renderPosts(data);
}

function renderPosts(posts) {
    const row = document.getElementsByClassName('row')[0];
    row.innerHTML = '';
    for (const forum of posts) {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        cardHeader.textContent = forum.username;
        card.appendChild(cardHeader);


        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.textContent = forum.title;
        card.appendChild(cardBody);


        const line = document.createElement('div');
        line.classList.add('line');
        card.appendChild(line);

        const cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer');

        const commentCount = document.createElement('span');
        commentCount.classList.add('comment-count');
        commentCount.textContent = `${forum.comments}`;
        cardFooter.appendChild(commentCount);
        const postDate = document.createElement('span');
        postDate.classList.add('post-date');
        const date = new Date(forum.time).toISOString().split('T')[0].replace('-', '.');
        postDate.textContent = `${date.replace('-', '.')}`;
        cardFooter.appendChild(postDate);

        card.appendChild(cardFooter);

        card.setAttribute('postid', forum.post_id);

        card.addEventListener('click', () => {
            window.location.href = `post.html?postid=${card.getAttribute('postid')}`;
        });
        console.log(card);
        row.appendChild(card);
    }
}
