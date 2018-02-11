//use to solve the sum of the even numbers from the Fibonacci secuense

var changeProblemTwo = document.getElementById('problemTwo');

changeProblemTwo.addEventListener('click', function()  { 

	var fib =  document.getElementById('valueFib').value ;
	var sum = 0;
	var An = 2;
	var Ap = 1;
	var camb = 0;

		while (An <= fib) {

			if (An % 2 === 0)   {
				sum += An;
			}
				camb = An;
				An += Ap;
				Ap = camb;
		}

	 document.getElementById('solutionTwo').innerHTML = sum;
});


