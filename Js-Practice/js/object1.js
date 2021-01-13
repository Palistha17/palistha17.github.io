

var obj = {
	name: 'Palistha Manandhar',
	address: 'Balaju',
	email: 'mailpalistha1@gmail.com',
	interest: ['reading books', 'travelling'],
	education: [
			{
				name: 'Trinity International College',
				enrolledDate: new Date('2014/11/10')
			},
			
			{
				name: 'Prime College',
				enrolledDate: new Date('2016/9/9')
			},

	]

	}


	for (var i=0; i<obj.education.length; i++) {
		 console.log(obj.education[i]);
		 document.write("Name: " + obj.education[i].name + "<br>  Date: " + obj.education[i].enrolledDate.getFullYear() + "<br> <br>");
 	} 