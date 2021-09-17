function openNavbar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }


$(document).ready(
    $(".skill-per").each(function(){ //calculates the numbers from 0 to "per" in a transition.
        var $this = $(this);
        var title = $this.attr("title");
        $this.css("width",title+"%");
        $({animatedValue: 0}).animate({animatedValue: title},{
            duration: 2000,
            step: function(){ //calculates up to X9
                $this.attr("title", Math.floor(this.animatedValue) + "%");
            }, 
            complete: function(){//adds the last
                $this.attr("title", Math.floor(this.animatedValue) + "%");
            },
        })
    })
);


$(".slideshow .images:gt(0)").hide();

setInterval(function() { 
  $('.slideshow .images:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('.slideshow');
}, 3000);

