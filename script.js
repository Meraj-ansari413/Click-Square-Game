 let btn= document.getElementById('showDivsBtn')
 var c = document.getElementById('divContainer');
 btn.addEventListener('click', function() {
    // Toggle the display of the container
    if (c.style.display === "none") {
        c.style.display = "flex";
    } else {
        c.style.display = "none";
    }
});
