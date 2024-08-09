document.getElementById('openLoginBtn').onclick = function() {
    document.getElementById('loginModal').style.display = 'block';
}

document.querySelector('.close').onclick = function() {
    document.getElementById('loginModal').style.display = 'none';
}

document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    alert('Login Successful!');
    document.getElementById('loginModal').style.display = 'none';
}
