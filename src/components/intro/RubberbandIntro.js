import $ from "jquery";

const RubberbandIntro = () => {
    $(document).ready(function() {
        var word1 = $(".intro1").text();
        var word2 = $(".intro2").text();

        // console.log(word);

        var HTML1 = "";
        var HTML2 = "";
        var letter;

        for (letter of word1) {
          // console.log(letter);
          HTML1 += "<span class='letter'>" + letter + "</span>";
        }
        for (letter of word2) {
            // console.log(letter);
            HTML2 += "<span class='letter'>" + letter + "</span>";
          }

        $(".intro1").html(HTML1);
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

        $(".intro2").html(HTML2);
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

export default RubberbandIntro

