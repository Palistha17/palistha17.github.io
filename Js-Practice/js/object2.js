var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]

function searchByName(arr, name) {
	for (var i=0; i<arr.length; i++) {
		
		if(arr[i].name.toLowerCase()==name) {

			
			document.write("Id: " + arr[i].id + "  Name: " + arr[i].name + "  Color: " + arr[i].color + "<br>");

		}
	
	}
}



searchByName(fruits, 'apple');


function searchByKey(arr, key, value) {

	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i][key] == 'string') {
			if (arr[i][key].toLowerCase() == value) {
				document.write("Id: " + arr[i].id + "  Name: " + arr[i].name + "  Color: " + arr[i].color + "<br> <br>");
			}
		} else {
			if (arr[i][key] == value) {
				document.write("Id: " + arr[i].id + "  Name: " + arr[i].name + "  Color: " + arr[i].color + "<br> <br>");
			}
		}

		console.log(arr[i][key], typeof arr[i][key] == 'string');
	}
	
}



searchByKey(fruits, 'color', 'yellow');

