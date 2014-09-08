



/***add item to list***/

$("#add_button").click(function(){
	event.preventDefault();

	if ($.trim($("#add_text").val()) !="") {

	$('#item ul').append('<li>'+'<input type="checkbox">'+ $("#add_text").val()+ '<a href="#delete" id="del">delete</a>' + "</li>");

	} 	else {
			alert("PLease enter a valid item");
		}
	$("#add_text").val("");
});


/***checkoff item***/

$('#item ul').on('change',"input[type=checkbox]", function(){
	var check_off = $(this).parent();
	$('#checked ul').append(check_off);

});


$('#checked ul').on('change',"input[type=checkbox]", function(){
	var check_off = $(this).parent();
	$('#item ul').append(check_off);

});


/***delete item***/

$("#del").click(function(){
	event.preventDefault();
	alert("del");
		$(this).parent().hide();

});

