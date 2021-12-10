// Semicolons are not required
// for JavaScript programming, nevertheless I advice you to use it.It makes your code more readable and is actually a good practice, and almost all cool programming languages uses it.
// Take a stand and use it, it 's up to you now!

const col21 = document.querySelector(".col2-1");
const col22 = document.querySelector(".col2-2");
const col23 = document.querySelector(".col2-3");
const col24 = document.querySelector(".col2-4");
const col25 = document.querySelector(".col2-5");

const col31 = document.querySelector(".col3-1")
const col32 = document.querySelector(".col3-2")
const col33 = document.querySelector(".col3-3")
const col34 = document.querySelector(".col3-4")
const col35 = document.querySelector(".col3-5")

const col41 = document.querySelector(".col4-1")
const col42 = document.querySelector(".col4-2")
const col43 = document.querySelector(".col4-3")
const col44 = document.querySelector(".col4-4")
const col45 = document.querySelector(".col4-5")

const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const row4 = document.querySelector(".row4");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const body = document.querySelector("body");
const hovermsg = document.querySelector(".hovermsg");
const TechIcons = document.querySelector(".tech-icons");
const IconsBtnDiv = document.querySelector(".icons-div-2");

//IconsBtnDiv changing bg color on hover
IconsBtnDiv.addEventListener("mouseover", funct63)
IconsBtnDiv.addEventListener("mouseleave", funct64)

function funct63() {
    IconsBtnDiv.style.transition = "all ease 3s"
    IconsBtnDiv.style.padding = "0px 250px 400px 350px"
    IconsBtnDiv.style.backgroundColor = "#dee2e6"
    btnIcons.style.marginBottom = "20px" // a button
}

function funct64() {
    IconsBtnDiv.style.transition = "all ease 3s"
    IconsBtnDiv.style.padding = ""
    IconsBtnDiv.style.backgroundColor = ""
    btnIcons.style.marginBottom = ""
}

//TechIcons increase Padding on hover
TechIcons.addEventListener("mouseover", () => {
    TechIcons.style.transition = "all ease 3s"
    TechIcons.style.padding = "0px 50px 200px 150px" // why not  working ? ==> the solution : move the code up 
    TechIcons.style.backgroundColor = "#A8A7A7"

})

TechIcons.addEventListener("mouseleave", funct42)

function funct42() {
    TechIcons.style.transition = "all ease 3s"
    TechIcons.style.padding = ""
    TechIcons.style.backgroundColor = ""
}


//for the tech icons (grayscale effect)
document.querySelectorAll(".img-icon").forEach((ImgIcon) => {
    ImgIcon.addEventListener("mouseover", funct00)
    ImgIcon.addEventListener("mouseleave", funct000)

    function funct00(params) {
        if (ImgIcon.style.filter == "") {
            ImgIcon.style.transition = "all ease 2s";
            ImgIcon.style.filter = "grayscale(100%)";
            ImgIcon.style.transform = "scale(1.2)";
            ImgIcon.style.outline = "medium double white";
            ImgIcon.style.margin = "20px";
        } else {
            ImgIcon.style.transition = "all ease 2s";
            ImgIcon.style.filter = "";
            ImgIcon.style.transform = "";
            ImgIcon.style.outline = "";
            ImgIcon.style.margin = "";
        }
    }

    function funct000(params) {
        if (ImgIcon.style.filter === "") {
            ImgIcon.style.transition = "all ease 2s";
            ImgIcon.style.filter = "grayscale(100%)";
            ImgIcon.style.transform = "scale(1.2)";
            ImgIcon.style.outline = "medium double white";
            ImgIcon.style.margin = "";
        } else {
            ImgIcon.style.filter = "";
            ImgIcon.style.transform = "";
            ImgIcon.style.outline = "";
        }
    }
});

//for the tech icons (grayscale effect) and showing them one by one
let toggleStatee = true

const wrapItems = document.querySelector(".wrapItems")
const btnIcons = document.querySelector(".btn-icons")
const disappear = document.querySelector(".disappear")

function toggleVisibily() {

    toggleStatee = !toggleStatee

    if (toggleStatee) {
        IconsBtnDiv.style.animation = ""
        wrapItems.style.animation = ""

        setTimeout(() => {
            wrapItems.children[0].style.display = "inline-block"
        }, 1000);
        setTimeout(() => {
            wrapItems.children[1].style.display = "inline-block"
        }, 2000);
        setTimeout(() => {
            wrapItems.children[2].style.display = "inline-block"

        }, 3000);
        setTimeout(() => {
            wrapItems.children[3].style.display = "inline-block"

        }, 4000);
        setTimeout(() => {
            wrapItems.children[4].style.display = "inline-block"

        }, 5000);
        setTimeout(() => {
            wrapItems.children[5].style.display = "inline-block"
        }, 6000);
        setTimeout(() => {
            wrapItems.children[6].style.display = "inline-block"
        }, 7000);
        setTimeout(() => {
            wrapItems.children[7].style.display = "inline-block"
        }, 8000);
        setTimeout(() => {
            wrapItems.children[8].style.display = "inline-block"
        }, 9000);
        setTimeout(() => {
            wrapItems.children[9].style.display = "inline-block"
        }, 10000);
        setTimeout(() => {
            wrapItems.children[10].style.display = "inline-block"
        }, 11000);
        setTimeout(() => {
            wrapItems.children[11].style.display = "inline-block"
        }, 12000);
        setTimeout(() => {
            wrapItems.children[12].style.display = "inline-block"
        }, 13000);
        setTimeout(() => {
            wrapItems.children[13].style.display = "inline-block"
        }, 14000);
        setTimeout(() => {
            wrapItems.children[14].style.display = "inline-block"
        }, 15000);
        setTimeout(() => {
            wrapItems.children[15].style.display = "inline-block"
        }, 16000);
        setTimeout(() => {
            wrapItems.children[16].style.display = "inline-block"
        }, 17000);

    } else {
        IconsBtnDiv.style.animation = "shake 3s 2"
        wrapItems.style.animation = "shake 3s 1"
        disappear.style.display = "block"
        //make the msg disappear after 4s
        setTimeout(() => {
            disappear.style.display = "none"
        }, 4000);

        setTimeout(() => {
            wrapItems.children[0].style.display = "none"
        }, 1000);
        setTimeout(() => {
            wrapItems.children[1].style.display = "none"
        }, 2000);
        setTimeout(() => {
            wrapItems.children[2].style.display = "none"
        }, 3000);
        setTimeout(() => {
            wrapItems.children[3].style.display = "none"
        }, 4000);
        setTimeout(() => {
            wrapItems.children[4].style.display = "none"
        }, 5000);
        setTimeout(() => {
            wrapItems.children[5].style.display = "none"
        }, 6000);
        setTimeout(() => {
            wrapItems.children[6].style.display = "none"
        }, 7000);
        setTimeout(() => {
            wrapItems.children[7].style.display = "none"
        }, 8000);
        setTimeout(() => {
            wrapItems.children[8].style.display = "none"
        }, 9000);
        setTimeout(() => {
            wrapItems.children[9].style.display = "none"
        }, 10000);
        setTimeout(() => {
            wrapItems.children[10].style.display = "none"
        }, 11000);
        setTimeout(() => {
            wrapItems.children[11].style.display = "none"
        }, 12000);
        setTimeout(() => {
            wrapItems.children[12].style.display = "none"
        }, 13000);
        setTimeout(() => {
            wrapItems.children[13].style.display = "none"
        }, 14000);
        setTimeout(() => {
            wrapItems.children[14].style.display = "none"
        }, 15000);
        setTimeout(() => {
            wrapItems.children[15].style.display = "none"
        }, 16000);
        setTimeout(() => {
            wrapItems.children[16].style.display = "none"
        }, 17000);
    }
}
btnIcons.addEventListener("click", toggleVisibily);





document.querySelector("body").addEventListener("mouseover", funct0);
//You can also click msg
function funct0(e) {
    setTimeout(() => {
        hovermsg.style.display = "none"
    }, 8000);
}
//The first fourth divs in the first row ( same content for them) , script 1

document.querySelectorAll(".test").forEach((testt) => {

    testt.addEventListener("mouseover", funct1);
    testt.addEventListener("mouseleave", funct2);
    testt.addEventListener("click", funct3);
    body.addEventListener("click", funct4);
    // mouseover
    function funct1(e) {
        testt.style.transition = "all ease 4s"
        testt.style.backgroundColor = testt.classList.add("linear-gradient1")
        testt.children[0].innerHTML = "<span>First row,</span>" + "<span style='color:white;font-size:15px'> Click in this </span>" +
            "<small style='color:darkgrey;font-size:30px;font-weight:bolder'>area</small>"
        testt.children[1].innerHTML = "<strong>JS</strong> is awesome <br>"
        testt.children[2].innerHTML = "YEAH !!"
        testt.style.borderRadius = "25px"
        testt.style.marginLeft = "7px"
        // testt.style.padding= "70px"
        testt.style.cursor = "pointer";
    }
    // mouseleave
    function funct2(e) {
        testt.style.backgroundColor = testt.classList.remove("linear-gradient1")
        testt.children[0].innerHTML = "<small style='color:white;font-size:24px;font-weight:bolder'> Goodbye!</small>"
        testt.style.backgroundColor = "black"
        testt.children[1].innerHTML = ""
        testt.children[2].innerHTML = ""
        testt.style.borderRadius = "25px"
        testt.style.marginLeft = "-7px"
        testt.style.transition = "all ease 1s"
        testt.style.backgroundImage = "";
    }

    // click on the div
    function funct3(e) {
        testt.style.transition = "all ease 3s"
        testt.style.backgroundImage = "url('./images/javascript.png')";
        testt.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
        testt.style.backgroundPosition = "center center" //Change the position of a background-image:
        testt.style.backgroundRepeat = "no-repeat" //The backgroundRepeat property sets or returns how to repeat (tile) a background-image.
        testt.children[0].innerHTML = " "
        testt.children[1].innerHTML = " "
        testt.children[2].innerHTML = " "
        // testt.style.cursor = "progress";
    }

    // click on the body
    function funct4(e) {
        testt.children[0].innerHTML = ""
        testt.style.backgroundColor = "";

    }
});


// COL21 !!  ROW2
// JavaScript supports overriding not overloading, meaning, that if you define two functions with the same name, the last one defined will override the previously defined version 
// and every time a call will be made to the function, the last defined one will get executed.30 jan. 2010
col21.addEventListener("mouseover", functt1);
col21.addEventListener("mouseleave", functt2);
col21.addEventListener("click", functt3);
body.addEventListener("click", functt4);

// Hover
function functt1(e) {
    col21.style.backgroundColor = col21.classList.add("linear-gradient2")
    col21.children[0].innerHTML = "Second row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col21.children[1].innerHTML = "<strong>Angular</strong> is awesome <br>"
    col21.children[2].innerHTML = "YEAH !!"
    col21.style.borderRadius = "25px"
    col21.style.marginLeft = "15px"
    col21.style.transition = "all ease 2s"
    col21.style.cursor = "pointer";
}
// Leave the div
function functt2(e) {
    col21.style.backgroundColor = col21.classList.remove("linear-gradient2")
    col21.style.backgroundColor = ""
    col21.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    col21.children[1].innerHTML = ""
    col21.children[2].innerHTML = ""
    col21.style.borderRadius = ""
    col21.style.marginLeft = "-15px"
    col21.style.transition = "all ease 2s"
    col21.style.backgroundImage = "";
}
// Click on the div
function functt3(e) {
    col21.style.backgroundImage = "url('./images/angularjs-icon.png')"
    col21.style.backgroundRepeat = "no-repeat"
    col21.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col21.style.backgroundPosition = "center center" //Change the position of a background-image:
    col21.children[0].innerHTML = " "
    col21.children[1].innerHTML = " "
    col21.children[2].innerHTML = " "
    col21.style.transition = "all ease 2s"
    col21.style.cursor = "progress";
}

function functt4(e) {
    col21.children[0].innerHTML = ""
    col21.style.backgroundColor = ""
}




// COL22 !! ROW2
col22.addEventListener("mouseover", funct5);
col22.addEventListener("mouseleave", funct6);
col22.addEventListener("click", funct7);
body.addEventListener("click", funct8);

// Hover
function funct5(e) {
    col22.style.backgroundColor = col22.classList.add("linear-gradient3")
    col22.children[0].innerHTML = "Second row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col22.children[1].innerHTML = "<strong>Babel</strong> is awesome <br>"
    col22.children[2].innerHTML = "YEAH!!"
    col22.style.borderRadius = "25px"
    col22.style.marginLeft = "30px"
    col22.style.transition = "all ease 2s"
    col22.style.cursor = "pointer";
}
// Leave the div
function funct6(e) {
    col22.style.backgroundColor = col22.classList.remove("linear-gradient3")
    col22.style.backgroundColor = ""
    col22.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    col22.children[1].innerHTML = ""
    col22.children[2].innerHTML = ""
    col22.style.borderRadius = ""
    col22.style.marginLeft = "-15px"
    col22.style.transition = "all ease 2s"
    col22.style.backgroundImage = "";
}
// Click on the div
function funct7(e) {
    col22.style.backgroundImage = "url('./images/babel.png')"
    col22.style.backgroundRepeat = "no-repeat"
    col22.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col22.style.backgroundPosition = "center center" //Change the position of a background-image:
    col22.children[0].innerHTML = " "
    col22.children[1].innerHTML = " "
    col22.children[2].innerHTML = " "
    col22.style.transition = "all ease 2s"
    col22.style.cursor = "progress";
}

function funct8(e) {
    col22.children[0].innerHTML = ""
    col22.style.backgroundColor = ""
}



//COL23 , row2
col23.addEventListener("mouseover", funct9);
col23.addEventListener("mouseleave", funct10);
col23.addEventListener("click", funct11);
body.addEventListener("click", funct12);

// Hover
function funct9(e) {
    col23.style.backgroundColor = col23.classList.add("linear-gradient4")
    col23.children[0].innerHTML = "Second row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col23.children[1].innerHTML = "<strong>Bootstrap</strong>" + "is awesome<br>"
    col23.children[2].innerHTML = "YEAH!!"
    col23.style.borderRadius = "25px"
    col23.style.marginLeft = "30px"
    col23.style.transition = "all ease 2s"
    col23.style.cursor = "pointer";
}
// Leave the div
function funct10(e) {
    col23.style.backgroundColor = col23.classList.remove("linear-gradient4")
    col23.style.backgroundColor = ""
    col23.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    col23.children[1].innerHTML = ""
    col23.children[2].innerHTML = ""
    col23.style.borderRadius = ""
    col23.style.marginLeft = "-15px"
    col23.style.transition = "all ease 2s"
    col23.style.backgroundImage = "";
}
// Click on the div
function funct11(e) {
    col23.style.backgroundImage = "url('./images/bootstrap.png')"
    col23.style.backgroundRepeat = "no-repeat"
    col23.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col23.style.backgroundPosition = "center center" //Change the position of a background-image:
    col23.children[0].innerHTML = " "
    col23.children[1].innerHTML = " "
    col23.children[2].innerHTML = " "
    col23.style.transition = "all ease 2s"
    col23.style.cursor = "progress";
}

function funct12(e) {
    col23.children[0].innerHTML = ""
    col23.style.backgroundColor = ""
}

//COL24 , row2
col24.addEventListener("mouseover", funct13);
col24.addEventListener("mouseleave", funct14);
col24.addEventListener("click", funct15);
body.addEventListener("click", funct16);

// Hover
function funct13(e) {
    col24.style.backgroundColor = col24.classList.add("linear-gradient5")
    col24.children[0].innerHTML = "Second row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col24.children[1].innerHTML = "<strong>CSS3</strong>" + "is awesome<br>"
    col24.children[2].innerHTML = "YEAH!!"
    col24.style.borderRadius = "25px"
    col24.style.marginLeft = "30px"
    col24.style.transition = "all ease 2s"
    col24.style.cursor = "pointer";
}
// Leave the div
function funct14(e) {
    col24.style.backgroundColor = col24.classList.remove("linear-gradient5")
    col24.style.backgroundColor = ""
    col24.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    col24.children[1].innerHTML = ""
    col24.children[2].innerHTML = ""
    col24.style.borderRadius = ""
    col24.style.marginLeft = "-15px"
    col24.style.transition = "all ease 2s"
    col24.style.backgroundImage = "";
}
// Click on the div
function funct15(e) {
    col24.style.backgroundImage = "url('./images/css3.png')"
    col24.style.backgroundRepeat = "no-repeat"
    col24.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col24.style.backgroundPosition = "center center" //Change the position of a background-image:
    col24.children[0].innerHTML = " "
    col24.children[1].innerHTML = " "
    col24.children[2].innerHTML = " "
    col24.style.transition = "all ease 2s"
    col24.style.cursor = "progress";
}

function funct16(e) {
    col24.children[0].innerHTML = ""
    col24.style.backgroundColor = ""
}


//COL25 , row2
col25.addEventListener("mouseover", funct17);
col25.addEventListener("mouseleave", funct18);
col25.addEventListener("click", funct19);
body.addEventListener("click", funct20);

// Hover
function funct17(e) {
    col25.style.backgroundColor = col25.classList.add("linear-gradient6")
    col25.children[0].innerHTML = "Second row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col25.children[1].innerHTML = "<strong>Flutter</strong>" + "is awesome<br>"
    col25.children[2].innerHTML = "YEAH!!"
    col25.style.borderRadius = "25px"
    col25.style.marginLeft = "30px"
    col25.style.transition = "all ease 2s"
    col25.style.cursor = "pointer";
}
// Leave the div
function funct18(e) {
    col25.style.backgroundColor = col25.classList.remove("linear-gradient6")
    col25.style.backgroundColor = ""
    col25.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    col25.children[1].innerHTML = ""
    col25.children[2].innerHTML = ""
    col25.style.borderRadius = ""
    col25.style.marginLeft = "-15px"
    col25.style.transition = "all ease 2s"
    col25.style.backgroundImage = "";
}
// Click on the div
function funct19(e) {
    col25.style.backgroundImage = "url('./images/flutter.png')"
    col25.style.backgroundRepeat = "no-repeat"
    col25.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col25.style.backgroundPosition = "center center" //Change the position of a background-image:
    col25.children[0].innerHTML = " "
    col25.children[1].innerHTML = " "
    col25.children[2].innerHTML = " "
    col25.style.transition = "all ease 2s"
    col25.style.cursor = "progress";
}

function funct20(e) {
    col25.children[0].innerHTML = ""
    col25.style.backgroundColor = ""
}

//3rd ROW
//col31 , row3
col31.addEventListener("mouseover", funct21);
col31.addEventListener("mouseleave", funct22);
col31.addEventListener("click", funct23);
body.addEventListener("click", funct24);

// Hover
function funct21(e) {
    col31.style.backgroundColor = col31.classList.add("linear-gradient7")
    col31.children[0].innerHTML = "Third row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col31.children[1].innerHTML = "<strong>Git</strong>" + " is awesome<br>"
    col31.children[2].innerHTML = "YEAH!!"
    col31.style.borderRadius = "25px"
    // col31.style.marginLeft = "30px"
    col31.style.transition = "all ease 2s"
    col31.style.cursor = "pointer";
}
// Leave the div
function funct22(e) {
    col31.style.backgroundColor = col31.classList.remove("linear-gradient7")
    col31.style.backgroundColor = ""
    col31.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    col31.children[1].innerHTML = ""
    col31.children[2].innerHTML = ""
    col31.style.borderRadius = ""
    // col31.style.marginLeft = "-15px"
    col31.style.transition = "all ease 2s"
    col31.style.backgroundImage = "";
}
// Click on the div
function funct23(e) {
    col31.style.backgroundImage = "url('./images/git.png')"
    col31.style.backgroundRepeat = "no-repeat"
    col31.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col31.style.backgroundPosition = "center center" //Change the position of a background-image:
    col31.children[0].innerHTML = " "
    col31.children[1].innerHTML = " "
    col31.children[2].innerHTML = " "
    col31.style.transition = "all ease 2s"
    col31.style.cursor = "progress";
}

function funct24(e) {
    col31.children[0].innerHTML = ""
    col31.style.backgroundColor = ""
}

//col32 , row3
col32.addEventListener("mouseover", funct25);
col32.addEventListener("mouseleave", funct26);
col32.addEventListener("click", funct27);
body.addEventListener("click", funct28);

// Hover
function funct25(e) {
    col32.style.backgroundColor = col32.classList.add("linear-gradient8")
    col32.children[0].innerHTML = "Third row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col32.children[1].innerHTML = "<strong>HTML5</strong>" + " is awesome<br>"
    col32.children[2].innerHTML = "YEAH!!"
    col32.style.borderRadius = "25px"
    col32.style.marginLeft = "15px"
    col32.style.transition = "all ease 2s"
    col32.style.cursor = "pointer";
}
// Leave the div
function funct26(e) {
    // col32.style.backgroundColor = col32.classList.remove("linear-gradient8")
    col32.style.backgroundColor = col32.classList.add("linear-gradient8")
    col32.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    col32.children[1].innerHTML = ""
    col32.children[2].innerHTML = ""
    col32.style.borderRadius = ""
    col32.style.marginLeft = "-15px"
    col32.style.transition = "all ease 2s"
    col32.style.backgroundImage = "";
}
// Click on the div
function funct27(e) {
    col32.style.backgroundImage = "url('./images/html5.png')"
    col32.style.backgroundRepeat = "no-repeat"
    col32.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col32.style.backgroundPosition = "center center" //Change the position of a background-image:
    col32.children[0].innerHTML = " "
    col32.children[1].innerHTML = " "
    col32.children[2].innerHTML = " "
    col32.style.transition = "all ease 2s"
    col32.style.cursor = "progress";
}

function funct28(e) {
    col32.style.transition = "all ease 2s"
    col32.children[0].innerHTML = ""
    col32.style.backgroundColor = col32.classList.remove("linear-gradient8")
    col32.style.backgroundColor = ""
}

//col33 , row3
col33.addEventListener("mouseover", funct29);
col33.addEventListener("mouseleave", funct30);
col33.addEventListener("click", funct31);
body.addEventListener("click", funct32);

// Hover
function funct29(e) {
    col33.style.backgroundColor = col33.classList.add("linear-gradient9")
    col33.children[0].innerHTML = "Third row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col33.children[1].innerHTML = "<strong>jQuery</strong>" + " is awesome<br>"
    col33.children[2].innerHTML = "YEAH!!"
    col33.style.borderRadius = "25px"
    col33.style.marginLeft = "15px"
    col33.style.transition = "all ease 2s"
    col33.style.cursor = "pointer";
}
// Leave the div
function funct30(e) {
    col33.style.backgroundColor = col33.classList.remove("linear-gradient9")
    col33.style.backgroundColor = ""
    col33.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    col33.children[1].innerHTML = ""
    col33.children[2].innerHTML = ""
    col33.style.borderRadius = ""
    col33.style.marginLeft = "-15px"
    col33.style.transition = "all ease 2s"
    col33.style.backgroundImage = "";
}
// Click on the div
function funct31(e) {
    col33.style.backgroundImage = "url('./images/jquery.png')"
    col33.style.backgroundRepeat = "no-repeat"
    col33.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col33.style.backgroundPosition = "center center" //Change the position of a background-image:
    col33.children[0].innerHTML = " "
    col33.children[1].innerHTML = " "
    col33.children[2].innerHTML = " "
    col33.style.transition = "all ease 2s"
    col33.style.cursor = "progress";
}

function funct32(e) {
    col33.children[0].innerHTML = ""
    col33.style.backgroundColor = ""
}

//col34 , row3
col34.addEventListener("mouseover", funct33);
col34.addEventListener("mouseleave", funct34);
col34.addEventListener("click", funct35);
body.addEventListener("click", funct36);

// Hover
function funct33(e) {
    col34.style.backgroundColor = col34.classList.add("linear-gradient10")
    col34.children[0].innerHTML = "Third row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col34.children[1].innerHTML = "<strong>NodeJS</strong>" + " is awesome<br>"
    col34.children[2].innerHTML = "YEAH!!"
    col34.style.borderRadius = "25px"
    col34.style.marginLeft = "10px"
    col34.style.transition = "all ease 2s"
    col34.style.cursor = "pointer";
}
// Leave the div
function funct34(e) {
    // col34.style.backgroundColor = col34.classList.remove("linear-gradient8")
    col34.style.backgroundColor = col34.classList.add("linear-gradient10")
    col34.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    col34.children[1].innerHTML = ""
    col34.children[2].innerHTML = ""
    col34.style.borderRadius = ""
    col34.style.marginLeft = "-15px"
    col34.style.transition = "all ease 2s"
    col34.style.backgroundImage = "";
}
// Click on the div
function funct35(e) {
    col34.style.backgroundImage = "url('./images/nodejs.png')"
    col34.style.backgroundRepeat = "no-repeat"
    col34.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col34.style.backgroundPosition = "center center" //Change the position of a background-image:
    col34.children[0].innerHTML = " "
    col34.children[1].innerHTML = " "
    col34.children[2].innerHTML = " "
    col34.style.transition = "all ease 2s"
    col34.style.cursor = "progress";
}

function funct36(e) {
    col34.style.transition = "all ease 2s"
    col34.children[0].innerHTML = ""
    col34.style.backgroundColor = col34.classList.remove("linear-gradient10")
    col34.style.backgroundColor = ""
}

//col35 , row3
col35.addEventListener("mouseover", funct37);
col35.addEventListener("mouseleave", funct38);
col35.addEventListener("click", funct39);
body.addEventListener("click", funct40);

// Hover
function funct37(e) {
    col35.style.backgroundColor = col35.classList.add("linear-gradient11")
    col35.children[0].innerHTML = "Third row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col35.children[1].innerHTML = "<strong>ReactJS</strong>" + " is awesome<br>"
    col35.children[2].innerHTML = "YEAH!!"
    col35.style.borderRadius = "25px"
    col35.style.marginLeft = "5px"
    col35.style.transition = "all ease 2s"
    col35.style.cursor = "pointer";
}
// Leave the div
function funct38(e) {
    col35.style.backgroundColor = col35.classList.remove("linear-gradient11")
    col35.style.backgroundColor = ""
    col35.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    col35.children[1].innerHTML = ""
    col35.children[2].innerHTML = ""
    col35.style.borderRadius = ""
    col35.style.marginLeft = "-15px"
    col35.style.transition = "all ease 2s"
    col35.style.backgroundImage = "";
}
// Click on the div
function funct39(e) {
    col35.style.backgroundImage = "url('./images/react.png')"
    col35.style.backgroundRepeat = "no-repeat"
    col35.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col35.style.backgroundPosition = "center center" //Change the position of a background-image:
    col35.children[0].innerHTML = " "
    col35.children[1].innerHTML = " "
    col35.children[2].innerHTML = " "
    col35.style.transition = "all ease 2s"
    col35.style.cursor = "progress";
}

function funct40(e) {
    col35.children[0].innerHTML = ""
    col35.style.backgroundColor = ""
}




//  4th ROW
//col41 , row4
col41.addEventListener("mouseover", funct43);
col41.addEventListener("mouseleave", funct44);
col41.addEventListener("click", funct45);
body.addEventListener("click", funct46);

// Hover
function funct43(e) {
    col41.style.backgroundColor = col41.classList.add("linear-gradient12")
    col41.children[0].innerHTML = "Fourth row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col41.children[1].innerHTML = "<strong>Redux</strong>" + " is awesome<br>"
    col41.children[2].innerHTML = "YEAH!!"
    col41.style.borderRadius = "25px"
    col41.style.marginLeft = "30px"
    col41.style.transition = "all ease 2s"
    col41.style.cursor = "pointer";
}
// Leave the div
function funct44(e) {
    col41.style.backgroundColor = col41.classList.remove("linear-gradient12")
    col41.style.backgroundColor = ""
    col41.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    col41.children[1].innerHTML = ""
    col41.children[2].innerHTML = ""
    col41.style.borderRadius = ""
    col41.style.marginLeft = "-15px"
    col41.style.transition = "all ease 2s"
    col41.style.backgroundImage = "";
}
// Click on the div
function funct45(e) {
    col41.style.backgroundImage = "url('./images/redux1.png')"
    col41.style.backgroundRepeat = "no-repeat"
    col41.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col41.style.backgroundPosition = "center center" //Change the position of a background-image:
    col41.children[0].innerHTML = " "
    col41.children[1].innerHTML = " "
    col41.children[2].innerHTML = " "
    col41.style.transition = "all ease 2s"
    col41.style.cursor = "progress";
}
// Click on the body
function funct46(e) {
    col41.children[0].innerHTML = ""
    col41.style.backgroundColor = ""
}

//col42, row4
col42.addEventListener("mouseover", funct47);
col42.addEventListener("mouseleave", funct48);
col42.addEventListener("click", funct49);
body.addEventListener("click", funct50);

// Hover
function funct47(e) {
    col42.style.backgroundColor = col42.classList.add("linear-gradient13")
    col42.children[0].innerHTML = "Fourth row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col42.children[1].innerHTML = "<strong>Sass</strong>" + " is awesome<br>"
    col42.children[2].innerHTML = "YEAH!!"
    col42.style.borderRadius = "25px"
    col42.style.marginLeft = "15px"
    col42.style.transition = "all ease 2s"
    col42.style.cursor = "pointer";
}
// Leave the div
function funct48(e) {
    col42.style.backgroundColor = col42.classList.remove("linear-gradient13")
    col42.style.backgroundColor = ""
    col42.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    col42.children[1].innerHTML = ""
    col42.children[2].innerHTML = ""
    col42.style.borderRadius = ""
    col42.style.marginLeft = "-15px"
    col42.style.transition = "all ease 2s"
    col42.style.backgroundImage = "";
}
// Click on the div
function funct49(e) {
    col42.style.backgroundImage = "url('./images/sass.png')"
    col42.style.backgroundRepeat = "no-repeat"
    col42.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col42.style.backgroundPosition = "center center" //Change the position of a background-image:
    col42.children[0].innerHTML = " "
    col42.children[1].innerHTML = " "
    col42.children[2].innerHTML = " "
    col42.style.transition = "all ease 2s"
    col42.style.cursor = "progress";
}
// Click on the body
function funct50(e) {
    col42.children[0].innerHTML = ""
    col42.style.backgroundColor = ""
}

//col43, row4
col43.addEventListener("mouseover", funct51);
col43.addEventListener("mouseleave", funct52);
col43.addEventListener("click", funct53);
body.addEventListener("click", funct54);

// Hover
function funct51(e) {
    col43.style.backgroundColor = col43.classList.add("linear-gradient14")
    col43.children[0].innerHTML = "Fourth row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col43.children[1].innerHTML = "<strong>Tailwind</strong>" + " is awesome<br>"
    col43.children[2].innerHTML = "YEAH!!"
    col43.style.borderRadius = "25px"
    col43.style.marginLeft = "15px"
    col43.style.transition = "all ease 2s"
    col43.style.cursor = "pointer";
}
// Leave the div
function funct52(e) {
    col43.style.backgroundColor = col43.classList.remove("linear-gradient14")
    col43.style.backgroundColor = ""
    col43.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    col43.children[1].innerHTML = ""
    col43.children[2].innerHTML = ""
    col43.style.borderRadius = ""
    col43.style.marginLeft = "-15px"
    col43.style.transition = "all ease 2s"
    col43.style.backgroundImage = "";
}
// Click on the div
function funct53(e) {
    col43.style.backgroundImage = "url('./images/tailwind.png')"
    col43.style.backgroundRepeat = "no-repeat"
    col43.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col43.style.backgroundPosition = "center center" //Change the position of a background-image:
    col43.children[0].innerHTML = " "
    col43.children[1].innerHTML = " "
    col43.children[2].innerHTML = " "
    col43.style.transition = "all ease 2s"
    col43.style.cursor = "progress";
}
// Click on the body
function funct54(e) {
    col43.children[0].innerHTML = ""
    col43.style.backgroundColor = ""
}

//col44, row4
col44.addEventListener("mouseover", funct55);
col44.addEventListener("mouseleave", funct56);
col44.addEventListener("click", funct57);
body.addEventListener("click", funct58);

// Hover
function funct55(e) {
    col44.style.backgroundColor = col44.classList.add("linear-gradient15")
    col44.children[0].innerHTML = "Fourth row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col44.children[1].innerHTML = "<strong>Typescript</strong>" + " is awesome<br>"
    col44.children[2].innerHTML = "YEAH!!"
    col44.style.borderRadius = "25px"
    col44.style.marginLeft = "15px"
    col44.style.transition = "all ease 2s"
    col44.style.cursor = "pointer";
}
// Leave the div
function funct56(e) {
    col44.style.backgroundColor = col44.classList.remove("linear-gradient15")
    col44.style.backgroundColor = ""
    col44.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    col44.children[1].innerHTML = ""
    col44.children[2].innerHTML = ""
    col44.style.borderRadius = ""
    col44.style.marginLeft = "-15px"
    col44.style.transition = "all ease 2s"
    col44.style.backgroundImage = "";
}
// Click on the div
function funct57(e) {
    col44.style.backgroundImage = "url('./images/typescript.png')"
    col44.style.backgroundRepeat = "no-repeat"
    col44.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col44.style.backgroundPosition = "center center" //Change the position of a background-image:
    col44.childen[0].innerHTML = " "
    col44.children[1].innerHTML = " "
    col44.children[2].innerHTML = " "
    col44.style.transition = "all ease 2s"
    col44.style.cursor = "progress";
}
// Click on the body
function funct58(e) {
    col44.children[0].innerHTML = ""
    col44.style.backgroundColor = ""
}

//col45, row4
col45.addEventListener("mouseover", funct59);
col45.addEventListener("mouseleave", funct60);
col45.addEventListener("click", funct61);
body.addEventListener("click", funct62);

// Hover
function funct59(e) {
    col45.style.backgroundColor = col45.classList.add("linear-gradient16")
    col45.children[0].innerHTML = "Fourth row,<br>" + "<span style='color:white;font-size:15px'>Click in this </span>" + "<small style='color:black;font-size:20px'>&nbsp area</small>"
    col45.children[1].innerHTML = "<strong>VueJS</strong>" + " is awesome<br>"
    col45.children[2].innerHTML = "YEAH!!"
    col45.style.borderRadius = "25px"
    col45.style.marginLeft = "15px"
    col45.style.transition = "all ease 2s"
    col45.style.cursor = "pointer";
}
// Leave the div
function funct60(e) {
    col45.style.backgroundColor = col45.classList.remove("linear-gradient16")
    col45.style.backgroundColor = ""
    col45.children[0].innerHTML = "<span style='color:black;font-size:35px;'>Bye!</span>"
    col45.children[1].innerHTML = ""
    col45.children[2].innerHTML = ""
    col45.style.borderRadius = ""
    col45.style.marginLeft = "-15px"
    col45.style.transition = "all ease 2s"
    col45.style.backgroundImage = "";
}
// Click on the div
function funct61(e) {
    col45.style.backgroundImage = "url('./images/vuejs.png')"
    col45.style.backgroundRepeat = "no-repeat"
    col45.style.backgroundSize = "contain" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    col45.style.backgroundPosition = "center center" //Change the position of a background-image:
    col45.childen[0].innerHTML = " "
    col45.children[1].innerHTML = " "
    col45.children[2].innerHTML = " "
    col45.style.transition = "all ease 2s"
    col45.style.cursor = "progress";
}
// Click on the body
function funct62(e) {
    col45.children[0].innerHTML = ""
    col45.style.backgroundColor = ""
}

//changing the bg color of wrapitems (icons) div
wrapItems.addEventListener("mouseover", funct65)
wrapItems.addEventListener("mouseleave", () => {
    wrapItems.style.transition = "all ease 2s" // arrow function
    wrapItems.style.backgroundColor = ""
})

function funct65() {
    wrapItems.style.transition = "all ease 2s"
    wrapItems.style.backgroundColor = "rgb(190, 66, 66)"
} // arrow function

//Row 1 on hover and on mouse leave :
row1.addEventListener("mouseover", () => {
    row1.style.transition = "all ease 3s"
    row1.style.backgroundImage = "url('./images/untitled.png')";
    row1.style.marginLeft = "150px"
    row1.style.marginRight = "150px"
    row1.style.marginTop = "80px"
    row1.style.padding = "100px 0px 150px 0px"

})
row1.addEventListener("mouseleave", () => {
    row1.style.transition = "all ease 3s"
    row1.style.backgroundImage = "";
    row1.style.marginLeft = ""
    row1.style.marginRight = ""
    row1.style.marginTop = ""
    row1.style.padding = ""
})

//Row 2 on hover and on mouse leave :
const row2wrapper = document.querySelector(".row2-wrapper")
row2wrapper.addEventListener("mouseover", () => {
    row2wrapper.style.transition = "all ease 3s"
    row2wrapper.style.backgroundImage = "url('./images/bg2.png')";
    row2wrapper.style.backgroundSize = "cover" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    // row2wrapper.style.backgroundPosition = "center center" //Change the position of a background-image:
    row2wrapper.style.backgroundRepeat = "no-repeat"
    row2wrapper.style.margin = "0px 70px 70px 70px"
    row2wrapper.style.padding = "80px 0px 130px 0px"

})
row2wrapper.addEventListener("mouseleave", () => {
    row2wrapper.style.transition = "all ease 3s"
    row2wrapper.style.backgroundImage = "";
    row2wrapper.style.margin = ""
    row2wrapper.style.padding = ""
})

//Row 3 on hover and on mouse leave :

row3.addEventListener("mouseover", () => {
    row3.style.transition = "all ease 3s"
    row3.style.backgroundImage = "url('./images/untitled2.png')";
    row3.style.backgroundSize = "cover" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    row3.style.backgroundPosition = "center center" //Change the position of a background-image:
    row3.style.backgroundRepeat = "no-repeat" //The backgroundRepeat property sets or returns how to repeat (tile) a background-image.
    row3.style.marginLeft = "30px"
    row3.style.marginRight = "30px"
    // row3.style.marginTop = "80px"
    row3.style.padding = "150px 0px 300px 0px"

})
row3.addEventListener("mouseleave", () => {
    row3.style.transition = "all ease 3s"
    row3.style.backgroundImage = "";
    row3.style.marginLeft = ""
    row3.style.marginRight = ""
    row3.style.marginTop = ""
    row3.style.padding = ""
})


//Row 4 on hover and on mouse leave :

row4.addEventListener("mouseover", () => {
    row4.style.transition = "all ease 3s"
    row4.style.backgroundImage = "url('./images/untitled3.png')";
    row4.style.backgroundSize = "cover" //Scale the image to the largest size such that both its width and its height can fit inside the content area
    row4.style.backgroundPosition = "center center" //Change the position of a background-image:
    row4.style.backgroundRepeat = "no-repeat" //The backgroundRepeat property sets or returns how to repeat (tile) a background-image.
    row4.style.marginLeft = "30px"
    row4.style.marginRight = "30px"
    // row4.style.marginTop = "80px"
    row4.style.padding = "150px 0px 300px 0px"

})
row4.addEventListener("mouseleave", () => {
    row4.style.transition = "all ease 3s"
    row4.style.backgroundImage = "";
    row4.style.marginLeft = ""
    row4.style.marginRight = ""
    row4.style.marginTop = ""
    row4.style.padding = ""
})



//Code for the 4 buttons
btn1.addEventListener("click", toggleMargin);
let toggleState1 = false

function toggleMargin() {
    toggleState1 = !toggleState1
    if (toggleState1) {
        row1.style.transition = "all ease 5s"
        row1.style.marginLeft = "350px" //using of px keyword is
        row1.style.marginRight = "300px"
        row1.children[3].style.display = "none"
        btn1.innerHTML = "Click again"
        row1.style.backgroundImage = "url('./images/jsbg1.jpg')"
        row1.style.backgroundRepeat = "no-repeat"
        row1.style.backgroundSize = "cover" //Scale the image to the largest size such that both its width and its height can fit inside the content area
        row1.style.backgroundPosition = "center center" //Change the position of a background-image:

    } else {
        row1.style.transition = "all ease 3s"
        row1.style.marginLeft = ""
        row1.style.marginRight = ""
        row1.lastElementChild.style.display = "block"
        btn1.innerHTML = "Click here to see what will happen to the row above :"
    }
}

// BTN2
btn2.addEventListener("click", toggleMargin2);
let toggleState = false

function toggleMargin2() {
    toggleState = !toggleState
    if (toggleState) {
        row2.style.transition = "all ease 3s"
        row2.style.marginLeft = "350px"
        row2.style.marginRight = "300px"
        row2.lastElementChild.style.display = "none"
        btn2.innerHTML = "Click again"
    } else {
        row2.style.transition = "all ease 3s"
        row2.style.marginLeft = ""
        row2.style.marginRight = ""
        row2.lastElementChild.style.display = "block"
        btn2.innerHTML = "Click here to see what will happen to the row below :"
    }
}

//btn3
btn3.addEventListener("click", toggleMargin0);
let toggleState11 = false

function toggleMargin0() {
    toggleState11 = !toggleState11
    if (toggleState11) {
        row3.style.transition = "all ease 5s"
        row3.style.marginLeft = "350px" //using of px keyword is
        row3.style.marginRight = "300px"
        row3.lastElementChild.style.display = "none"
        row3.style.backgroundImage = "url('./images/jsbg1.jpg')"
        row3.style.backgroundRepeat = "no-repeat"
        row3.style.backgroundSize = "cover" //Scale the image to the largest size such that both its width and its height can fit inside the content area
        // row3.style.backgroundPosition = "center center" //Change the position of a background-image:
        btn3.innerHTML = "Click again"

    } else {
        row3.style.transition = "all ease 3s"
        row3.style.marginLeft = ""
        row3.style.marginRight = ""
        setTimeout(() => {
            row3.lastElementChild.style.display = "block"
            row3.style.backgroundImage = ""
        }, 4500);
        btn3.innerHTML = "Click here to see what will happen to the row above :"
    }
}

// BTN4
btn4.addEventListener("click", toggleMargin00);
let toggleState12 = false

function toggleMargin00() {
    toggleState12 = !toggleState12
    if (toggleState12) {
        row4.style.transition = "all ease 3s"
        row4.style.marginLeft = "350px"
        row4.style.marginRight = "300px"
        row4.lastElementChild.style.display = "none"
        btn4.innerHTML = "Click again"
    } else {
        row4.style.transition = "all ease 3s"
        row4.style.marginLeft = ""
        row4.style.marginRight = ""
        setTimeout(() => {
            row4.lastElementChild.style.display = "block"
        }, 4000);
        btn4.innerHTML = "Click here to see what will happen to the row below :"
    }
} //Code for the 2 buttons