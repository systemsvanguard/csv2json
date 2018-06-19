/* Parses in a supplied CSV based spreadsheet into object notation JSON, then does an ETL (extract, transform and load) to show the data in a web page.  Powered by Node.js to generate web site.
*/
var fs	=	require('fs');
var csv	=	require('fast-csv');

fs.createReadStream('testcsv.csv')
	.pipe(csv() )
	.on('data', function(data)  {
		console.log(data);
	})
	.on('end', function(data) {
		console.log('Reading data stream completed!');
	} );
