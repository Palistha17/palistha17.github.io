
function starpattern(n){
	var i, j;
	console.log(n);

    for( var i=n; i>=1; i--) {
	    for(var j=1; j<=i; j++) {
     		console.log('*');
     		document.write('*');
    	}
     console.log('<br/>');
     document.write('<br/>');
   }
}
console.log(starpattern(5));



