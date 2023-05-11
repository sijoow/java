	  <script language="javascript" type="text/javascript">
			var currentDate = new Date(); // Get the current date and time
			// Set the on/off date and time
			var onDate = new Date('2023-05-09T09:00:00'); // Set the on date to May 10th, 2023 at 9:00 AM
			var offDate = new Date('2023-05-11T17:00:00'); // Set the off date to May 20th, 2023 at 5:00 PM

			// Get the image element
			var myImage = document.getElementById('myImage');

			// Check if the current date and time is between the on/off dates and times
			if (currentDate >= onDate && currentDate <= offDate) {
			  myImage.style.display = 'block'; // Display the image
			} else {
			  myImage.style.display = 'none'; // Hide the image
			}
	  </script>
