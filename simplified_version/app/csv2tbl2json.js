/* CSV to HTML and JSON Conversion */
$(function () {
	var arr=[];
	var m=0;
	var n=0;  
	var k=0;          
	$("#upload").bind("click", function () {
		// configure regex pattern matching
		var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
		if (regex.test($("#fileUpload").val().toLowerCase())) {
			if (typeof (FileReader) != "undefined") {
				var reader = new FileReader();
				reader.onload = function (e) {
					var table = $("<table />");
					var rows = e.target.result.split("\n");                            
					for (var i = 0; i < rows.length-1; i++) {
						arr.push([]);
						var row = $("<tr />");
						var cells = rows[i].split(",");                                                            
						for (var j = 0; j < cells.length; j++) {
							var cell = $("<td />");                                                           
							cell.html(cells[j]);  
							arr[m].push(cells[j]);
							row.append(cell);         
						}                             
					 table.append(row);       
					 m++;
					}                            
					$("#dvCSV").html('');
					$("#dvCSV").append(table);                            
				}
				reader.readAsText($("#fileUpload")[0].files[0]);
			} else {
				swal("Missing HTML5 Features?", "Your browser does not support HTML5 well! May I interest you in a free upgrade?", "info");
				// alert("Your browser does not support HTML5 well! May I interest you in a free upgrade?");
			}                    
		} else {
			swal("Valid CSV File Please", "Please use a valid and properly formatted CSV file.  Thanks.", "info");
			// alert("Please use a valid and properly formatted CSV file.  Thanks.");
		}
	});                 
	$("#json").bind("click", function () {    
		var c=arr[0].length;                
		$("<label/>",{text:"["}).appendTo($(".next"));
		for(var i=1;i<arr.length;i++){
		  $("<p/>",{text:"{"}).appendTo($(".next"));
			for(var j=0;j<c;j++){
				$("<p/>",{text:" "+arr[0][j]+" : "+arr[i][j]+" "}).appendTo($(".next"));
			}    
			$("<label/>",{text:"}"}).appendTo($(".next"));
		}
	   $("<p/>",{text:"]"}).appendTo($(".next"));        
	});
});
