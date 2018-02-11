// this js to solve the euler problem number 1, find the sum of the multiplayer of 5 and 3, for an specif number

var changeProblemOne = document.getElementById('problemOne');

changeProblemOne.addEventListener('click', function()  {

	var input =  document.getElementById('valueMult').value ;
    var sum = 0;
		for (var i = 1; i <= input ; i++) {
			if (i % 3 === 0 || i % 5 === 0)   {
				sum += i;
			}
		}
 		document.getElementById('solutionOne').innerHTML = sum;

});

