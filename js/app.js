
/***add item to list***/

$("#add_button").click(function(){
	event.preventDefault();

	if ($.trim($("#add_text").val()) !="") {
		addcheckbox($("#add_text").val());
		/*add_text.reset();*/

	} 	else {
			alert("PLease enter a valid item");
		}
});


function addcheckbox(shopping_item) {
	console.log(shopping_item);
	var container = $("#item");
	var inputs = container.find("input");
	var id = inputs.length+1;

	$("<input />",{type: "label"} {type: "checkbox", id:id,  value: shopping_item}).appendTo(container);
	$(container).append(shopping_item + '<br />');
	
}



/***checkoff item***/

$(document).on('change','[type=checkbox]',function(){ 
	$(this).hide();
	Check_off($(this).val());

	/*($(this).val()).hide();
	var a = $(this).val();
	a.hide();*/
});


function Check_off(checked_item) {
	var container = $("#checked");
	var inputs = container.find("input");
	var id = inputs.length+1;
	/*$("<input />", {type: "checkbox", id:id,  value: checked_item, checked: checked}).appendTo(container);*/
	$(container).append(checked_item + '<br />');	

}









