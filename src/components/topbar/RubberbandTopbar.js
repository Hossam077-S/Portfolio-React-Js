import $ from "jquery";

const RubberbandTopbar = () => {
    $(document).ready(function() {
        var word1 = $("#top1").text();
        var word2 = $(".top2").text();
        var word3 = $(".top3").text();

        // console.log(word);
        var HTML1 = "";
        var HTML2 = "";
        var HTML3 = "";
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
        

        $("#top1").html(HTML1);
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

        $(".top2").html(HTML2);
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

        $(".top3").html(HTML3);
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

export default RubberbandTopbar

