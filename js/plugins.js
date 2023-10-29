window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("jshome").style.color = "#ae9768",
    document.getElementById("jsabout").style.color = "#595959",
    document.getElementById("jsgallery").style.color = "#595959",
    document.getElementById("jsContact").style.color = "#595959",
    document.getElementById("jsblog").style.color = "#595959",
    document.getElementById("jsouroffer").style.color = "#595959",
    document.getElementById("navjs").style.background = "white";
    document.getElementById("logo").style.display = "none";
    document.getElementById("logo-scroll").style.display = "flex";
    document.getElementById("myBtn").style.display = "block";
    
} else {
    document.getElementById("jshome").style.color = "#e0dcd2",
    document.getElementById("jsabout").style.color = "#fff",
    document.getElementById("jsgallery").style.color = "#fff",
    document.getElementById("jsContact").style.color = "#fff",
    document.getElementById("jsblog").style.color = "#fff",
    document.getElementById("jsouroffer").style.color = "#fff",
    document.getElementById("navjs").style.background = "rgba(255,0,0,0)";
    document.getElementById("logo").style.display = "flex";
    document.getElementById("logo-scroll").style.display = "none";
    document.getElementById("myBtn").style.display = "none";
}
}


window.onscroll = function() {scrollFunction()};



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}


// facebook

$(document).ready(function(){
$(".divF").mouseenter(function(){
  $(this).css("background-color", "#3b5998");
  $(".Faceiconjs").css("color", "white");
  $(".Faceiconjs").css("background-color", "#3b5998");
});
$(".divF").mouseout(function(){
  $(this).css("background-color", "#484540");
  $(".Faceiconjs").css("color", "#8c8a86");
  $(".Faceiconjs").css("background-color", "#484540");
});
});


$(document).ready(function(){
$(".Faceiconjs").mouseenter(function(){
  $(".divF").css("background-color", "#3b5998");
  $(".Faceiconjs").css("color", "white");
  $(".Faceiconjs").css("background-color", "#3b5998");
});
$(".Faceiconjs").mouseout(function(){
  $(".divF").css("background-color", "#484540");
  $(".Faceiconjs").css("color", "#8c8a86");
  $(".Faceiconjs").css("background-color", "#484540");
});
});

// google 

$(document).ready(function(){
$(".divG").mouseenter(function(){
  $(this).css("background-color", "#dd4b39");
  $(".Googleiconjs").css("color", "white");
  $(".Googleiconjs").css("background-color", "#dd4b39");
});
$(".divG").mouseout(function(){
  $(this).css("background-color", "#484540");
  $(".Googleiconjs").css("color", "#8c8a86");
  $(".Googleiconjs").css("background-color", "#484540");
});
});


$(document).ready(function(){
$(".Googleiconjs").mouseenter(function(){
  $(".divG").css("background-color", "#dd4b39");
  $(".Googleiconjs").css("color", "white");
  $(".Googleiconjs").css("background-color", "#dd4b39");
});
$(".Googleiconjs").mouseout(function(){
  $(".divG").css("background-color", "#484540");
  $(".Googleiconjs").css("color", "#8c8a86");
  $(".Googleiconjs").css("background-color", "#484540");
});
});


//   IN


$(document).ready(function(){
$(".divaIN").mouseenter(function(){
  $(this).css("background-color", "#007bb5");
  $(".INiconjs").css("color", "white");
  $(".INiconjs").css("background-color", "#007bb5");
});
$(".divaIN").mouseout(function(){
  $(this).css("background-color", "#484540");
  $(".INiconjs").css("color", "#8c8a86");
  $(".INiconjs").css("background-color", "#484540");
});
});


$(document).ready(function(){
$(".INiconjs").mouseenter(function(){
  $(".divaIN").css("background-color", "#007bb5");
  $(".INiconjs").css("color", "white");
  $(".INiconjs").css("background-color", "#007bb5");
});
$(".INiconjs").mouseout(function(){
  $(".divaIN").css("background-color", "#484540");
  $(".INiconjs").css("color", "#8c8a86");
  $(".INiconjs").css("background-color", "");
});
});



// Twitter





$(document).ready(function(){
$(".divaTW").mouseenter(function(){
  $(this).css("background-color", "#00aced");
  $(".TWiconjs").css("color", "white");
  $(".TWiconjs").css("background-color", "#00aced");
});
$(".divaTW").mouseout(function(){
  $(this).css("background-color", "#484540");
  $(".TWiconjs").css("color", "#8c8a86");
  $(".TWiconjs").css("background-color", "#484540");
});
});


$(document).ready(function(){
$(".TWiconjs").mouseenter(function(){
  $(".divaTW").css("background-color", "#00aced");
  $(".TWiconjs").css("color", "white");
  $(".TWiconjs").css("background-color", "#00aced");
});
$(".TWiconjs").mouseout(function(){
  $(".divaTW").css("background-color", "#484540");
  $(".TWiconjs").css("color", "#8c8a86");
  $(".TWiconjs").css("background-color", "");
});
});




