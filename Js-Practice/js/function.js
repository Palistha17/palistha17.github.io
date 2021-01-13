var numbers = [1, 2, 3, 4];

function transform(collection, tranFunc) {
	var newArr = [];
	for (var i=0; i<collection.length; i++) {
		var output= tranFunc(collection[i]);
		newArr.push(output);
	}

	return newArr;
}

var output = transform(numbers, function(num) {
    return num * 2;

});


document.write(output + "<br>");
console.log(output);
