var isDate = function (input) {
  //   write your code here
	 // If the input is already a Date object, return true
  if (input instanceof Date) {
    return true;
  }

  // Try parsing the input as a date string
  const parsedDate = new Date(input);

  // Check if the parsed date is a valid date
  // The condition `!isNaN(parsedDate)` checks if the parsedDate is a valid date
  return !isNaN(parsedDate) && parsedDate.toString() !== "Invalid Date";
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
