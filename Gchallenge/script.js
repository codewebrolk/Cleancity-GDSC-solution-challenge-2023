const menu = document.getElementById("menu");
const action = document.getElementById("actions");

menu.addEventListener("click", ()=>{
    hundleMenu();
})

function hundleMenu(){
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
}



// Scrolllink

$(document).ready(function() {
    $("a.scrollLink").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
          }, 500);
      });
  });

// anchor
function rmvIsActive(){
    menu.classList.remove("is-active");
    action.classList.remove("is-active");
}
