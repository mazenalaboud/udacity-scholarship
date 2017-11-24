/*
	Lesson 13.21

	In 2015, the U.S. Bureau of Labor Statistics conducted research to reveal how average salary is directly related to the number of years spent in school. In their findings, they found that people with:

		- no high school diploma earned an average of $25,636/year,
		- a high school diploma earned an average of $35,256/year,
		- an Associate's degree earned an average of $41,496/year,
		- a Bachelor's degree earned an average of $59,124/year,
		- a Master's degree earned an average of $69,732/year,
		- a Professional degree earned an average of $89,960/year,
		- and a Doctoral degree earned an average of $84,396/year.


	NOTE: Wondering what the average salary would be for a person with a Nanodegree from Udacity? That's a hard question to answer, but that doesn't mean we haven't tried to quantify the value of our Nanodegrees. Click here to read more about Nanodegrees from resident Udacity writer Chris Watkins.

	Directions:

		Write a switch statement to set the average salary of a person based on their type of completed education.

		Afterwards, print the following to the console.

		In 2015, a person with __________ earned an average of __________/year.
*/

var education = "an Associate's degree";

var salary;

switch(education){
	case "no high school diploma":
		salary = 25636;
		break;
	case "a high school diploma":
		salary = 35256;
		break;
	case "an Associate's degree":
		salary = 41496;
		break;
	case "a Bachelor's degree":
		salary = 59124;
		break;
	case "a Master's degree":
		salary = 69732;
		break;
	case "a Professional degree":
		salary = 89960;
		break;
	case "a Doctoral degree":
		salary = 84396;
		break;
}

console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");