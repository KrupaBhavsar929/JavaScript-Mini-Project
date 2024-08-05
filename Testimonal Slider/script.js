const imgProfile=document.querySelector('img');
const container=document.querySelector('.container');
const Profile=document.querySelector('.profile');
const headingInformation=document.querySelector('.information');
const headingAuthor=document.querySelector('.author');


const cycleImages = [
"images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg"
]

const informationArray = [
    "hi",
      "hello",
      "dear",
      "bear"
    ]

    const authorArray = [
        "krupa",
          "zeal",
          "gneya",
          "khushi"
        ]
let currentIndex = 0;


// Function to update the image
function updateImage() {
    imgProfile.src = cycleImages[currentIndex];
    headingInformation.innerText=informationArray[currentIndex];
    headingAuthor.innerText=authorArray[currentIndex];
    currentIndex = (currentIndex + 1) % cycleImages.length;
}


const intervalID = setInterval(updateImage, 2000);

// Initial call to display the first image
updateImage();