/*
 *todo: copy and paste finished csharp code into the Program.cs
 */
// *recreate the List in an array
const names = [
  "Nashville",
  "Hong Kong",
  "The back yard",
  "Earth",
  "London",
  "The mall",
  "Ryman Auditorium",
  "The Great Wall of China",
];

//* console.log the title ALL PLACE NAMES:
console.log("All Place Names:");

//* loop through them all and print each name individuallly
names.forEach((item) => console.log(`${item}`));

//*  Line break in the console output
console.log("");

//* Filter the list to create a new list that only has   place names that start with the word "The".
for (const name of names) {
  if (name.startsWith("The")) {
    console.log(name);
  }
}
