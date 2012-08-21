$(document).ready(function(){
	 var resetButton = $('#resetButton'),
        resetPassword = $('#resetPassword');

    resetButton.click(function(e) {
        var conf = confirm("Are you sure you'd like to reset this grader's password? " + 
                            "This password is for the grader's account - not exclusively for this course.");

        if(conf)
            resetPassword.submit();
    });
});
	