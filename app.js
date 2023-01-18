// local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem porro voluptates dolore repudiandae ut amet reiciendis nam pariatur nihil assumenda?"
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem porro voluptates dolore repudiandae ut amet reiciendis nam pariatur nihil assumenda?"
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",

        text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem porro voluptates dolore repudiandae ut amet reiciendis nam pariatur nihil assumenda?"
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",

        text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem porro voluptates dolore repudiandae ut amet reiciendis nam pariatur nihil assumenda?"
    }
];

// select items
const imgEl = document.getElementById("person-img");
const authorEl = document.getElementById("author");
const jobEl = document.getElementById("job");
const infoEl = document.getElementById("info");

const prevBtnEl = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem = 0;

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * reviews.length);

    return randomNumber;
};
console.log(Math.random() * reviews.length);
getRandomNumber();
// load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem)
});

//show person based on item

function showPerson() {
    const item = reviews[currentItem];
    // img.src = reviews[currentItem].img;
    imgEl.src = item.img;
    authorEl.textContent = item.name;
    jobEl.textContent = item.job;
    infoEl.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})
// show previous person
prevBtnEl.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
})


randomBtn.addEventListener('click', function () {
    currentItem = getRandomNumber();
    
    showPerson(currentItem);
})