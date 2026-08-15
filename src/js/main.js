const GalleryImages =
    [
        {
            img: `/images/nature1.jfif`,
            category: "nature"
        },
        {
            img: `/images/nature2.jfif`,
            category: "nature"
        },
        {
            img: `/images/nature3.jfif`,
            category: "nature"
        },
        {
            img: `/images/nature4.jfif`,
            category: "nature"
        },
        {
            img: `/images/nature5.jfif`,
            category: "nature"
        },
        {
            img: `/images/nature6.jfif`,
            category: "nature"
        },
        {
            img: `/images/arch1.jfif`,
            category: "architecture"
        },
        {
            img: `/images/arch2.jfif`,
            category: "architecture"
        },
        {
            img: `/images/arch3.jfif`,
            category: "architecture"
        },
        {
            img: `/images/arch4.jfif`,
            category: "architecture"
        },
        {
            img: `/images/arch5.jfif`,
            category: "architecture"
        },
        {
            img: `/images/arch6.jfif`,
            category: "architecture"
        },
        {
            img: `/images/urban1.jfif`,
            category: "urban"
        },
        {
            img: `/images/urban2.jfif`,
            category: "urban"
        },
        {
            img: `/images/urban3.jfif`,
            category: "urban"
        },
        {
            img: `/images/urban4.jfif`,
            category: "urban"
        },
        {
            img: `/images/urban5.jfif`,
            category: "urban"
        },
        {
            img: `/images/urban6.jfif`,
            category: "urban"
        },
        {
            img: `/images/car1.jfif`,
            category: "car"
        },
        {
            img: `/images/car2.jfif`,
            category: "car"
        },
        {
            img: `/images/car3.jfif`,
            category: "car"
        },
        {
            img: `/images/car4.jfif`,
            category: "car"
        },
        {
            img: `/images/car5.jfif`,
            category: "car"
        },
        {
            img: `/images/car6.jfif`,
            category: "car"
        }
    ];

const template = document.querySelector(".card-template");
const container = document.querySelector(".cards-container");
let currGalleryImages = [];  // this variable will hold the current gallery images based on the selected category
let curIndex = 0;   // this variable will hold the current index of the image in the modal

// function to get the data and append it to the container
const getData = (val) => {
    const cardClone = document.importNode(template.content, true);
    cardClone.querySelector(".card-img").src = val.img;
    cardClone.querySelector(".card-img").alt = `${val.category} image`;
    container.appendChild(cardClone);
}


// function to assign data based on the keyword
const assignData = (keyword) => {
    container.classList.add("opacity-0");

    setTimeout(() => {
        container.innerHTML = "";

        // filter the images based on the keyword and assign it to the currGalleryImages variable
        currGalleryImages = GalleryImages.filter((val) => {
            if (keyword === "all" || val.category === keyword) {
                return val;
            }
        });
        // loop through the currGalleryImages and call the getData function to append the images to the container
        currGalleryImages.forEach((val) => {
            getData(val);
        });

        container.classList.remove("opacity-0");
    }, 300);
};


        
  
// funtioanlity on clicking the buttons
document.querySelector(".btn-sec").addEventListener("click", (e) => {
    // if the button is not select so return
    if (!e.target.classList.contains("gallery-filter")) {
        return;
    }

    const buttons = document.querySelectorAll(".gallery-filter");
    // remove the classes from all buttons and add to the clicked button
    buttons.forEach((val) => {
            val.classList.remove("text-white", "bg-blue-700");  
    });
    e.target.classList.add("text-white", "bg-blue-700");

    // check which button is clicked and call the assignData function with the respective keyword
    if (e.target.classList.contains("btn-all")) {
        assignData("all");
    } else if (e.target.classList.contains("btn-nature")) {
        assignData("nature");
    } else if (e.target.classList.contains("btn-arch")) {
        assignData("architecture");
    } else if (e.target.classList.contains("btn-urban")) {
        assignData("urban");
    } else if (e.target.classList.contains("btn-car")) {
        assignData("car");
    }
})

// functionality to open the modal on clicking the image
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("card-img")) {
        document.querySelector(".image-modal img").src = e.target.src;
        document.querySelector(".image-overlay").classList.remove("hidden");
        document.querySelector(".image-modal").classList.add("active");
    }
})

// functionality to close the modal on clicking the overlay or close button
document.querySelector(".image-overlay").addEventListener("click", (e) => {
    if (e.target.classList.contains("image-overlay")) {
        document.querySelector(".image-overlay").classList.add("hidden");
    }
})

// functionality to close the modal on clicking the overlay or close button
document.querySelector(".close-btn").addEventListener("click", (e) => {
        document.querySelector(".image-overlay").classList.add("hidden");
})

// functionality to change the image on clicking the next and previous buttons
document.querySelector(".prev-btn").addEventListener("click", (e) => {
    curIndex--;
    if (curIndex < 0) {
        curIndex = currGalleryImages.length - 1;
    }
    document.querySelector(".image-modal img").src = currGalleryImages[curIndex].img;
});

// functionality to change the image on clicking the next and previous buttons
document.querySelector(".next-btn").addEventListener("click", (e) => {
    curIndex++;
    if (curIndex >= currGalleryImages.length) {
        curIndex = 0;
    }
    document.querySelector(".image-modal img").src = currGalleryImages[curIndex].img;
});

// functionality to change the image on pressing the left and right arrow keys
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        document.querySelector(".prev-btn").click();
    } else if (e.key === "ArrowRight") {
        document.querySelector(".next-btn").click();
    } else if (e.key === "Escape") {
        document.querySelector(".close-btn").click();
    }
});

// call the assignData function with the keyword "all" to display all the images on page load
assignData("all");