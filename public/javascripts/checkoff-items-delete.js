$(document).ready(function(){
	var deleteLinks = $('.delete');
	
	deleteLinks.click(function(e) {
		e.preventDefault();
		
        var conf = confirm("Are you sure you'd like to delete this checkoff item?");

        if(!conf)
			return;
		else
			window.location = this.href;
	});
});