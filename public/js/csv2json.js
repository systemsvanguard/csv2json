    /* CSV to JSON conversion utility */
    
    /* set up form refesh. Ensures text-area boxes are truly emptied each time a new CSV is used.  */
    function refreshPage(){
        window.location.reload();
    } 
	
	// copy the generated JSON to the clipboard 
	function copyGeneratedJSON() {
	  var copyText = document.getElementById("generatedJSONoutput");
	  copyText.select();
	  document.execCommand("copy");
	  swal("Copied Like a Pro!!", "The JSON data is now copied to your clipboard.  Enjoy!", "success");
	  // alert("JSON data now copied to the clipboard! " + copyText.value);
	}

    /* configure our variables  */
	var options     = {input: false};
	var dropzone    = new FileDrop('dragdropCSVinput', options);
	var jsonzone    = document.getElementById("generatedJSONoutput");
	var cbHeaders    = document.getElementById("hasHeaders");

	// dropzone
	dropzone.event('send', function (files) {
		files.each(function (file) {
			file.readData(
				createJSON,
				function(e) {alert('Error.') },
				'text'
			)
		} )
	} );

	// create json file
	function createJSON(str) {
		dropzone.el.value = str;
		var config = {
			header:cbHeaders.checked 
		};
		var jsonObject              = Papa.parse(str, config).data;
		var jsonString              = JSON.stringify(jsonObject);
		var jsonStringFormatted     = jsonString.replace(/{/g, "\n\t{").replace("]", "\n]");
		jsonzone.value              = jsonString;
	};
	
	// button click event
	cbHeaders.addEventListener("click", function() {
        if (dropzone.el.value.length>0 ) {
            createJSON(dropzone.el.value);
        }
    }.false    );