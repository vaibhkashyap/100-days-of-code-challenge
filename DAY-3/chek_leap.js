<html>
<head>
	
<script>
	function check_leapyear(){
		
		var year;
 		var leap;
	
		year = document.getElementById("year").value;
		 
 
		
		if((year%4==0) && (year%100!=0))
		{
			document.write("<h1>This is a leap year</h1>");
		}
		else if(year%400==0)	
		{
	                document.write("<h1>This is a leap year</h1>");
		}		

		else
		{
			document.write("<h1>This is not a leap year</h1>");  
		}
	}
</script>
</head>
<body>

<h3>Javascript Program to find leap year</h3>
<input type="text" id="year"></input>
<button onclick="check_leapyear()">Check</button>

</body>
</html>
