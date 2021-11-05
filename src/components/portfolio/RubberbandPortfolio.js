import $ from "jquery";

const RubberbandPortfolio = () => {
    $(document).ready(function() {
        var word1 = $(".port1").text();

        // console.log(word);
        var HTML1 = "";

        for (var letter of word1) {
          // console.log(letter);
          HTML1 += "<span class='letter'>" + letter + "</span>";
        }

        $(".port1").html(HTML1);
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

export default RubberbandPortfolio

