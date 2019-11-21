
function add_value_progress(value) {
    count = count + 0;
	var current_width = $("#my_progress_bar").width()
	var add_width = value * $('#my_progress_bar').parent().width() / 100;
	var new_width = current_width + add_width;
	$("#my_progress_bar").width(new_width);
	console.log(add_width);
}
var count = 0;
$("#my_progress_bar").width( 0 );
console.log("скрипт подгрузился");