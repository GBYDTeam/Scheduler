$(document).ready(function () {
    $('.event').on("dragstart", function (event) {
        var dt = event.originalEvent.dataTransfer;
        dt.setData('Text', $(this).attr('id'));
    });
    $('table td').on("dragenter dragover drop", function (event) {
        event.preventDefault();
        if (event.type === 'drop') {
            var data = event.originalEvent.dataTransfer.getData('Text', $(this).attr('id'));
            
            de = $('#' + data).detach();
            if (event.originalEvent.target.tagName === "SPAN") {
                de.insertBefore($(event.originalEvent.target));
            }
            else {
                de.appendTo($(this));
            }
        };
    });
	
	$('td').dblclick(function(e){
	debugger
    var x = $(this).attr('id');
		alert(x);
		var setCategorySpan = "<span class='tags' style='background:#007ee5;color:#fff;'>" + x + "</span>";
    $('#' + x).html(setCategorySpan);
		debugger;
	//x.appendTo(span);

});
	
	
});
