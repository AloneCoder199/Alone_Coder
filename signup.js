// Optional: script.js
document.getElementById('signupForm').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        event.preventDefault(); // Form ko submit hone se rok deta hai
    }
});


document.getElementById('openSignupBtn').onclick = function() {
    document.getElementById('signupModal').style.display = 'block';
}

document.querySelector('.close').onclick = function() {
    document.getElementById('signupModal').style.display = 'none';
}

document.getElementById('signupForm').onsubmit = function(e) {
    e.preventDefault();
    alert('Signup Successful!');
    document.getElementById('signupModal').style.display = 'none';
}
