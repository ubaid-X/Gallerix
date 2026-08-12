let GalleryImages =
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
            category: "architechture"
        },
        {
            img: `/images/arch2.jfif`,
            category: "architechture"
        },
        {
            img: `/images/arch3.jfif`,
            category: "architechture"
        },
        {
            img: `/images/arch4.jfif`,
            category: "architechture"
        },
        {
            img: `/images/arch5.jfif`,
            category: "architechture"
        },
        {
            img: `/images/arch6.jfif`,
            category: "architechture"
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

let template = document.querySelector(".card-template");
let container = document.querySelector(".cards-container");

// function to get the data and append it to the container
let getData = (val) => {
    let cardClone = document.importNode(template.content, true);
    cardClone.querySelector(".card-img").src = val.img;
    cardClone.querySelector(".card-img").alt = `${val.category} image`;
    container.appendChild(cardClone);
}


// function to assign data based on the keyword
let assignData = (keyword) => {
    container.classList.add("opacity-0");

    setTimeout(() => {
        container.innerHTML = "";

        GalleryImages.forEach((val) => {
            if (keyword === "all" || val.category === keyword) {
                getData(val);
            }
        });

        container.classList.remove("opacity-0");
    }, 300);
};


        
  
// funtioanlity on clicking the buttons
document.querySelector(".btn-sec").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-all")) {
        assignData("all");
    } else if (e.target.classList.contains("btn-nature")) {
        assignData("nature");
    } else if (e.target.classList.contains("btn-arch")) {
        assignData("architechture");
    } else if (e.target.classList.contains("btn-urban")) {
        assignData("urban");
    } else if (e.target.classList.contains("btn-car")) {
        assignData("car");
    }
})

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("card-img")) {
        document.querySelector(".image-modal img").src = e.target.src;
        document.querySelector(".image-overlay").classList.remove("hidden");
        document.querySelector(".image-modal").classList.add("active");
    }
})

document.querySelector(".image-overlay").addEventListener("click", (e) => {
    if (e.target.classList.contains("image-overlay")) {
        document.querySelector(".image-overlay").classList.add("hidden");
        document.querySelector(".image-modal").classList.remove("active");
    }
})

document.querySelector(".close-btn").addEventListener("click", (e) => {
    if (e.target.classList.contains("close-btn")) {
        document.querySelector(".image-overlay").classList.add("hidden");
        document.querySelector(".image-modal").classList.remove("active");
    }
})

assignData("all");