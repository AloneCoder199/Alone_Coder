

 const texts = ["Learn Programming !", "Learn Html !", "Learn Css", "Learn c++ Programming","Learn C Programming","Learn Java Script","Learn c# Programming","Play Coding Games" , "With M.Bilal"];
const typingTextElement = document.getElementById("typing-text");
let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[textIndex].length) {
        typingTextElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Adjust the speed here
    } else {
        setTimeout(eraseText, 1000); // Delay before erasing the text
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingTextElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50); // Adjust the speed here
    } else {
        textIndex = (textIndex + 1) % texts.length; // Move to the next text or loop back to the first text
        setTimeout(typeText, 500); // Delay before starting to type the next text
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, 500); // Initial delay before starting the typing animation
});





document.getElementById('mobile-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('mobile-nav').classList.toggle('active');
});



window.onload = function() {
    // Loader function
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2000); // 2000 milliseconds = 2 seconds
};

// skills 


document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');
    
    function updateProgressArray() {
        progressBars.forEach(bar => {
            const skillName = bar.parentElement.querySelector('p')?.textContent.trim();
            const value = bar.getAttribute('data-progress');
            bar.style.width = '0'; // Reset width to 0 before animating
            bar.textContent = '0%'; // Reset text to 0% before animating
        });
    }

    function animateProgressBars() {
        progressBars.forEach(bar => {
            const value = bar.getAttribute('data-progress');
            bar.style.width = value + '%';
            bar.textContent = value + '%';
        });
    }

    function resetProgressBars() {
        progressBars.forEach(bar => {
            bar.style.width = '0';
            bar.textContent = '0%';
        });
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom > 0
        );
    }

    function handleScroll() {
        const skillsSection = document.getElementById('skills');
        if (skillsSection && isInViewport(skillsSection)) {
            animateProgressBars();
        } else {
            resetProgressBars();
        }
    }

    // Initial call to set the progress bars with defined percentages
    updateProgressArray();
    
    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // Initial check in case skills section is already in view on page load
    handleScroll();
});


// mission and vision

document.addEventListener('DOMContentLoaded', function() {
    // Add any interactivity here if needed
    console.log('Our Mission & Vision section loaded successfully.');
});



// courses java script code 


document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const courseCard = button.parentElement;
            const courseDetails = courseCard.querySelector('.course-details');

            if (courseDetails.style.display === 'none' || courseDetails.style.display === '') {
                courseDetails.style.display = 'block';
                button.textContent = 'Hide details';
            } else {
                courseDetails.style.display = 'none';
                button.textContent = 'Read more about this course';
            }
        });
    });
});