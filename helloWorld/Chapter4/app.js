var main = function() {
    "use strict";
    $(".comment-input button").on("click", function() {
        addComment();
    });
    $(".comment-input input").on("keypress", function(event) {
        if (event.keyCode === 13) {
            addComment();
        }
    });;

    var addComment = function() {
        var inputText = $(".comment-input input").val();
        if (inputText !== "") {
            var $new_comment = $("<p>").text(inputText);
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    };
};

$(document).ready(main);