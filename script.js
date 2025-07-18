
function red_whatsapp() {
    window.open("https://wa.me/917621856487");
}

// Function to test alerts (This doesn't seem related to the issue)
function caazy() {
    alert("azim");
}

// This will be executed once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Intersection Observer for the skill boxes

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the element is in view, add the 'visible' class
                entry.target.classList.add('visible');
                // entry.target.classList.add('active');
                // Stop observing the element once it is in view
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });


    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the active class to simulate the hover effect
                entry.target.classList.add("active");
            } else {
                // Optionally remove the class if you want the effect to reset
                entry.target.classList.remove("active");
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Add the #services .content element to the existing observer
    const servicesContent = document.querySelector("#services .content");
    if (servicesContent) {
        obs.observe(servicesContent);
    }


    // Select all the skill boxes and initialize the observer
    const skillBoxes = document.querySelectorAll('.box');
    skillBoxes.forEach(box => {
        // Initially hide the boxes
        box.classList.add('hidden');
        // Start observing each box
        observer.observe(box);
    });

    // Intersection Observer for the '.myimgdiv' element
    const myImgDiv = document.querySelector('.myimgdiv');
    if (myImgDiv) {
        const imgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    myImgDiv.classList.add('active'); // Add the 'active' class when in view
                } else {
                    myImgDiv.classList.remove('active'); // Optionally remove it when out of view
                }
            });
        });

        imgObserver.observe(myImgDiv); // Observe the myimgdiv element
    }


    //content
    const servicesSection = document.querySelector("#services .content");

    // Intersection Observer to detect when the services section is visible



    // Code for the mobile feedback slider (not related to the box animation, but keeping it here)
    const wrapper = document.querySelector('.mobile-feedback-wrapper');
    const cards = document.querySelectorAll('.mobile-feedback-card');
    const cardCount = cards.length;
    let currentIndex = 0;

    if (wrapper && cards.length > 0) {
        function slideFeedback() {
            const cardWidth = cards[0].offsetWidth + 20; // 20px accounts for the margin
            currentIndex = (currentIndex + 1) % cardCount;
            wrapper.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
        }

        // Start the sliding effect every 2 seconds
        setInterval(slideFeedback, 3000);
    }
     // Get all the certificate images
    const certImages = document.querySelectorAll('.cert-img');
    // Lightbox Modal Code
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const closeBtn = document.getElementById('closeBtn');

    // Select all certificate images
    // const certImages = document.querySelectorAll('.certificate-img'); // Ensure your images have this class

    // Loop through each certificate image and add an event listener
    certImages.forEach(img => {
        img.addEventListener('click', function() {
            // Set the source of the lightbox image to the clicked image's source
            lightboxImage.src = img.src;
            lightbox.style.display = 'flex'; // Show the lightbox
        });
    });

    // Close the lightbox when the close button is clicked
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none'; // Hide the lightbox
    });

    // Close the lightbox if the user clicks outside the image
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none'; // Hide the lightbox
        }
    });
});
