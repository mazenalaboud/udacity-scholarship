/*
	Lesson 12.7 (Musical Groups)

	Musical groups have special names based on the number of people in the group.

	For example, a "quartet" is a musical group with four musicians. Barbershop quartets were a popular type of quartet in the early 1900s and featured four singers made up of a lead, tenor, baritone, and bass.

		Directions:
			Write a series of conditional statements that:

			prints "not a group" if musicians is less than or equal to 0
			prints "solo" if musicians is equal to 1
			prints "duet" if musicians is equal to 2
			prints "trio" if musicians is equal to 3
			prints "quartet" if musicians is equal to 4
			prints "this is a large group" if musicians is greater than 4
*/

var musicians = 4;

if (musicians <= 0){
    console.log("not a group");
}
else if (musicians === 1){
    console.log("solo");
}
else if (musicians === 2){
    console.log("duet");
}
else if (musicians === 3){
    console.log("trio");
}
else if (musicians === 4){
    console.log("quartet");
}
else{
   console.log("this is a large group"); 
}