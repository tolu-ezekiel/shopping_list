var ezeshopper= {
	
	onReady:function(){
		$("#add_button").click(ezeshopper.add_item);
		$('#item ul,#checked ul').on('change',"input[type=checkbox]", ezeshopper.checkoff);
		$("div.list").on('click', 'a#del', ezeshopper.item_delete);
	},

	add_item: function(){
		if (ezeshopper.validity()) {
			$('#item ul').append('<li>'+'<input type="checkbox">'+ $("#add_text").val()+ '<a href="#" id="del">delete</a>' + "</li>");
			$("#add_text").val("");
		}
	},

	validity: function() {
		if ($.trim($("#add_text").val()) !="") {
			return $("#add_text");
		}	else { 
				alert("PLease enter a valid item");
			}
		$("#add_text").val("");
	},

	checkoff: function(){
		var check_off = $(this).parent();
		var direction = check_off.parents("#checked ul").length==0;

		if(direction)
		{
			$('#checked ul').append(check_off);
		}
		else
		{
			$('#item ul').append(check_off);	
		}
	},

	item_delete: function(){
		var delete_item = $(this).parent();
		delete_item.remove();
		
	}

};

$(document).ready(ezeshopper.onReady);