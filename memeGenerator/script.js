
// const memeImgs = [
//     "img/1.jfif"
//     , "img/2.jfif"
//     , "img/3.jfif"
//     , "img/4.jfif"
//     , "img/5.jfif"
//     , "img/6.jfif"
//     , "img/7.jfif"
//     , "img/8.jfif"
//     , "img/9.jfif"
//     , "img/10.jfif"
//     , "img/11.jfif"
//     , "img/12.jfif"
//     , "img/14.jfif"
//     , "img/15.jfif"
//     , "img/16.jfif"
// ];

// const MemeContainer = document.querySelector(".memeContainer");
// const currentMeme = document.querySelector(".memeContainer img");
// const nextMemeButton = document.querySelector(".nextMeme");

// currentMeme.style.width = "inherit";

// currentMeme.src = "img/programming.gif";
// const generateMeme = () => {
//     const randomIndex = Math.floor(Math.random() * memeImgs.length);
//     currentMeme.src = memeImgs[randomIndex];

// };

// nextMemeButton.addEventListener("click", generateMeme);

// trying to refactor the code:

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: completed");
        init();
    }
});

const init = () => {
    const memeImgs = [
        "img/1.jfif"
        , "img/2.jfif"
        , "img/3.jfif"
        , "img/4.jfif"
        , "img/5.jfif"
        , "img/6.jfif"
        , "img/7.jfif"
        , "img/8.jfif"
        , "img/9.jfif"
        , "img/10.jfif"
        , "img/11.jfif"
        , "img/12.jfif"
        , "img/14.jfif"
        , "img/15.jfif"
        , "img/16.jfif"
    ];

    const MemeContainer = document.querySelector(".memeContainer");
    const currentMeme = document.querySelector(".memeContainer img");
    const nextMemeButton = document.querySelector(".nextMeme");

    currentMeme.style.width = "inherit";
    currentMeme.src = "img/programming.gif";


    nextMemeButton.addEventListener("click", ()=>{
        const randomIndex = Math.floor(Math.random() * memeImgs.length);
        currentMeme.src = memeImgs[randomIndex];
    });

};
