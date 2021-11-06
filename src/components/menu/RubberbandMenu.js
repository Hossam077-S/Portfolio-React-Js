import $ from "jquery";

const RubberbandMenu = () => {
    $(document).ready(function() {
        var word1 = $(".menu1").text();
        var word2 = $(".menu2").text();
        var word3 = $(".menu3").text();
        var word4 = $(".menu4").text();
        var word5 = $(".menu5").text();

        // console.log(word);
        var HTML1 = "";
        var HTML2 = "";
        var HTML3 = "";
        var HTML4 = "";
        var HTML5 = "";
        var letter;

        for (letter of word1) {
            // console.log(letter);
            HTML1 += "<span class='letter'>" + letter + "</span>";
        }
        for (letter of word2) {
            // console.log(letter);
            HTML2 += "<span class='letter'>" + letter + "</span>";
        }
        for (letter of word3) {
            // console.log(letter);
            HTML3 += "<span class='letter'>" + letter + "</span>";
        }
        for (letter of word4) {
            // console.log(letter);
            HTML4 += "<span class='letter'>" + letter + "</span>";
        }
        for (letter of word5) {
            // console.log(letter);
            HTML5 += "<span class='letter'>" + letter + "</span>";
        }
        

        $(".menu1").html(HTML1);
        setTimeout(function() {
          $(".letter").mouseenter(function() {
            var el = $(this);
            $(this).addClass("rubberBand");
            $(this).one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              function() {
                el.removeClass("rubberBand");
              }
            );
          });
        }, 300);

        $(".menu2").html(HTML2);
        setTimeout(function() {
          $(".letter").mouseenter(function() {
            var el = $(this);
            $(this).addClass("rubberBand");
            $(this).one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              function() {
                el.removeClass("rubberBand");
              }
            );
          });
        }, 300);

        $(".menu3").html(HTML3);
        setTimeout(function() {
          $(".letter").mouseenter(function() {
            var el = $(this);
            $(this).addClass("rubberBand");
            $(this).one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              function() {
                el.removeClass("rubberBand");
              }
            );
          });
        }, 300);

        $(".menu4").html(HTML4);
        setTimeout(function() {
          $(".letter").mouseenter(function() {
            var el = $(this);
            $(this).addClass("rubberBand");
            $(this).one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              function() {
                el.removeClass("rubberBand");
              }
            );
          });
        }, 300);

        $(".menu5").html(HTML5);
        setTimeout(function() {
          $(".letter").mouseenter(function() {
            var el = $(this);
            $(this).addClass("rubberBand");
            $(this).one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              function() {
                el.removeClass("rubberBand");
              }
            );
          });
        }, 300);

    });
      
    
    return null;
}

export default RubberbandMenu

