$(document).ready(function() {
    $('.form-area').keydown(function () {
        var remaining = 4000 - $(this).val().length;
        
        if (remaining < 0) {
            remaining = 0;
        }
        
        $('.chars-remaining').text('Characters remaining: ' + remaining);
    });
});