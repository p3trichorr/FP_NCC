const toTop = document.querySelector(".logo");

toTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

const dropDown = document.getElementById("list");
dropDown.addEventListener("mouseover", isActive);
// dropDown.addEventListener("mouseout", isInactive);


const regionChooser = document.getElementsById("region");
regionChooser.addEventListener("mouseover", isActive);
regionChooser.addEventListener("mouseout", isInactive);

function isActive() {
    document.getElementById("regions").classList.toggle("active");
}

function isInactive() {
    document.getElementById("regions").removeEventListener(dropDown);
}


// const firstRegion = document.getElementsById("kanto");
// firstRegion.addEventListener("click", function() {
//     window.open(document.location.href("./list.html")),
//     document.getElementsById("region_1").classList.toggle("active")
// });

// const secondRegion = document.getElementsById("johto");
// secondRegion.addEventListener("click", function() {
//     window.open(document.location.href("./list.html")),
//     document.getElementsById("region_2").classList.toggle("active")
// });