// Custom JS code for Redacted portfolio site 

/* Parse CSV file using PapaParse.js utility */
		  var data;
		 
		  function handleFileSelect(evt) {
			var file = evt.target.files[0];
		 
			Papa.parse(file, {
			  header: true,
			  dynamicTyping: true,
			  complete: function(results) {
				data = results;
			  }
			});
		  }
		 
		  $(document).ready(function(){
			$("#ourcsvfile").change(handleFileSelect);
		  });

		  
/* ----------------------- */
		  
		  
