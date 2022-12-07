const designOptions = ["option-1", "option-2"];


/*START GRAB URL PARAMETERS*/
let url = window.location.toString();
let urlLength = url.length;
if ("#" === url[urlLength - 1]) {/* get rid of hashtag at end of url otherwise the data will not import*/
    url = url.substring(0, url.length - 1);
}

let whichClient = "option-1";
console.log("ARE YOU AWAKE? ");
(url + "?")
    .split("?")[1]
    .split("&")
    .forEach(function (pair) {
        pair = (pair + "=").split("=").map(decodeURIComponent);
        if (pair[0].length) {
            whichClient[pair[0]] = pair[1];
            if (pair[0] === "client") {
                whichClient = pair[1];
            }
        }
    });

document.getElementById("bannerTxt").innerHTML = data[designOptions.indexOf(whichClient)].page1[0].bannerTxt;
document.getElementById("story1page1").innerHTML = data[designOptions.indexOf(whichClient)].page1[0].story1page1;
document.getElementById("story2page1").innerHTML = data[designOptions.indexOf(whichClient)].page1[0].story2page1;
document.getElementById("story3page1").innerHTML = data[designOptions.indexOf(whichClient)].page1[0].story3page1;
document.getElementById("storyTeaseOne").innerHTML = data[designOptions.indexOf(whichClient)].page1[0].storyOne.substring(0, 55) + "...";
document.getElementById("storyTeaseTwo").innerHTML = data[designOptions.indexOf(whichClient)].page1[0].storyTwo.substring(0, 55) + "...";


document.getElementById("teaseImage1").setAttribute("src", data[designOptions.indexOf(whichClient)].page1[0].teaseImage1);
document.getElementById("teaseImage2").setAttribute("src", data[designOptions.indexOf(whichClient)].page1[0].teaseImage2);


document.querySelector("body").setAttribute("data-design", whichClient);

/*START PAGE 2 ELEMENTS*/

document.getElementById("youTubePanel").setAttribute("src", "https://www.youtube.com/embed/" + data[designOptions.indexOf(whichClient)].page2[0].youTube);
document.getElementById("storyOne").innerHTML = data[designOptions.indexOf(whichClient)].page1[0].storyOne;
document.getElementById("StoryOneBanner").style.backgroundImage = "url(" + data[designOptions.indexOf(whichClient)].page2[0].StoryOneBanner + ")";
document.getElementById("pageTwoTitle").innerHTML = data[designOptions.indexOf(whichClient)].page2[0].pageTwoTitle;


/*START CONTACT UI */
document.getElementById("contactTitle").innerHTML = data[designOptions.indexOf(whichClient)].page3[0].contactTitle;
document.getElementById("contactAction").setAttribute("action", data[designOptions.indexOf(whichClient)].page3[0].contactAction);

[].forEach.call(document.querySelectorAll(".phone"), function (e) {
    e.innerHTML = data[designOptions.indexOf(whichClient)].page3[0].phone;
});
[].forEach.call(document.querySelectorAll(".email"), function (e) {
    e.innerHTML = data[designOptions.indexOf(whichClient)].page3[0].email;
});
[].forEach.call(document.querySelectorAll(".address"), function (e) {
    e.innerHTML = data[designOptions.indexOf(whichClient)].page3[0].address;
});


/*START NAVIGATION */
let mobileNav = false;

function toggleMobileNav(toggleWhat) {

    if (toggleWhat === "toggle") {
        if (mobileNav === false) {
            mobileNav = true;
            document.getElementById("navbarCollapse").classList.add("show");
            return false;
        }

        if (mobileNav === true) {
            mobileNav = false;
            document.getElementById("navbarCollapse").classList.remove("show");
            return false;
        }
    }



    [].forEach.call(document.querySelectorAll("[data-page]"), function (e) {
        e.classList.add("hide");
    });

    document.querySelector("[data-page='" + toggleWhat + "']").classList.remove("hide");
    document.getElementById("navbarCollapse").classList.remove("show");

    [].forEach.call(document.querySelectorAll("nav [data-link]"), function (e) {
        e.classList.remove("active");
    });
    document.querySelector("nav [data-link='" + toggleWhat + "']").classList.add("active");

    return false;




}
