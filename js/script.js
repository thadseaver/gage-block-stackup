$(function(){

	$('#calculate').on('click', function(e){

		var blocks = [.05, .100,
			.1001, .1002, .1003, .1004, .1005, .1006, .1007, .1008, .1009,
			.101, .102, .103, .104, .105, .106, .107, .108, .109,
			.110, .111, .112, .113, .114, .115, .116, .117, .118, .119,
			.120, .121, .122, .123, .124, .125, .126, .127, .128, .129,
			.130, .131, .132, .133, .134, .135, .136, .137, .138, .139,
			.140, .141, .142, .143, .144, .145, .146, .147, .148, .149,
			.150, .200, .250, .300, .350, .400, .450, .500, .550, .600, .650, .700, .750, .800, .850, .900, .950,
			1.000, 2.000, 3.000, 4.000],
			blocksReq = [],
			strEntered = document.getElementById('entered').value,
			lastNum = parseFloat(strEntered.slice(-1)),
			numEntered = parseFloat(strEntered),
			currentTotal = 0,
			firstBlock = ((.0001 * lastNum) + .1).toFixed(4)

			;

		//for 4 decimal place numbers only...

			console.log('The first block is ' + firstBlock);
			currentTotal = (numEntered - firstBlock).toFixed(4);

			console.log('Value is now ' + currentTotal);

			blocksReq.push(firstBlock);
			console.log(blocksReq);

			//ned to remove firstBlock from blocks[]

		e.preventDefault();
	});
		
	

});
