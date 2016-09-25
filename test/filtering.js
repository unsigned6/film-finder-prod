var expect = require("chai").expect;
var  listController = require("../app/listController.js");

// data for searching by title tests
var filmsTitles = [
	{ _id: "57e58784b2cbc2157da86027", title: "Charade", year: "1953", format: "DVD", __v: 0, stars: Array[5] },
	{ _id: "57e58784b2cbc2157da86028", title: "Cool Hand Luke", year: "1967", format: "VHS", __v: 0, stars: Array[3] },
	{ _id: "57e58784b2cbc2157da86029", title: "Butch Cassidy and the Sundance Kid", year: "1969", format: "VHS", __v: 0, stars: Array[3] },
	{ _id: "57e58784b2cbc2157da8602a", title: "The Sting", year: "1973", format: "DVD", __v: 0, stars: Array[4] },
	{ _id: "57e58784b2cbc2157da8602b", title: "The Muppet Movie", year: "1979", format: "DVD", __v: 0, stars: Array[7] },
	{ _id: "57e58784b2cbc2157da8602c", title: "Get Shorty ", year: "1995", format: "DVD", __v: 0, stars: Array[5] },
	{ _id: "57e58785b2cbc2157da8602d", title: "My Cousin Vinny", year: "1992", format: "DVD", __v: 0, stars: Array[6] },
	{ _id: "57e58785b2cbc2157da8602e", title: "Gladiator", year: "2000", format: "Blu-Ray", __v: 0, stars: Array[3] },
	{ _id: "57e58785b2cbc2157da8602f", title: "Star Wars", year: "1977", format: "Blu-Ray", __v: 0, stars: Array[5] },
	{ _id: "57e58785b2cbc2157da86030", title: "Raiders of the Lost Ark", year: "1981", format: "DVD", __v: 0, stars: Array[2] },
	{ _id: "57e58785b2cbc2157da86031", title: "Serenity", year: "2005", format: "Blu-Ray", __v: 0, stars: Array[10] },
	{ _id: "57e58785b2cbc2157da86032", title: "Hooisers", year: "1986", format: "VHS", __v: 0, stars: Array[3] },
	{ _id: "57e58785b2cbc2157da86033", title: "WarGames", year: "1983", format: "VHS", __v: 0, stars: Array[5] },
	{ _id: "57e58785b2cbc2157da86034", title: "Spaceballs", year: "1987", format: "DVD", __v: 0, stars: Array[6] },
	{ _id: "57e58785b2cbc2157da86035", title: "Young Frankenstein", year: "1974", format: "VHS", __v: 0, stars: Array[5] },
	{ _id: "57e58786b2cbc2157da86036", title: "Real Genius", year: "1985", format: "VHS", __v: 0, stars: Array[4] },
	{ _id: "57e58786b2cbc2157da86037", title: "Top Gun", year: "1986", format: "DVD", __v: 0, stars: Array[5] },
	{ _id: "57e58786b2cbc2157da86038", title: "MASH", year: "1970 ", format: "DVD", __v: 0, stars: Array[5] },
	{ _id: "57e58786b2cbc2157da86039", title: "The Russians Are Coming, The Russia…", year: "1966", format: "VHS", __v: 0, stars: Array[4] },
	{ _id: "57e58786b2cbc2157da8603a", title: "Jaws", year: "1975 ", format: "DVD", __v: 0, stars: Array[4] },
	{ _id: "57e58786b2cbc2157da8603c", title: "Harvey", year: "1950 ", format: "DVD", __v: 0, stars: Array[4] },
	{ _id: "57e58786b2cbc2157da8603d", title: "Knocked Up", year: "2007", format: "Blu-Ray", __v: 0, stars: Array[4] }
];

var titleForSearch = "Hooisers";
var titleForSearchCase = "hooisers";

var correctFilteredByTitle = [{ _id: "57e58785b2cbc2157da86032", title: "Hooisers", year: "1986", format: "VHS", __v: 0, stars: Array[3] }];

// data for searching by stars tests
var filmsStars = [
	{ title: "Charade", stars: [ "Audrey Hepburn", "Cary Grant", "Walter Matthau", "James Coburn", "George Kennedy" ] },
	{ title: "Cool Hand Luke", stars: [ "Paul Newman", "George Kennedy", "Strother Martin" ] },
	{ title: "Butch Cassidy and the Sundance Kid", stars: [ "Paul Newman", "Robert Redford", "Katherine Ross" ] },
	{ title: "The Sting", stars: [ "Robert Redford", "Paul Newman", "Robert Shaw", "Charles Durning" ] },
	{ title: "The Muppet Movie", stars: [ "Jim Henson", "Frank Oz", "Dave Geolz", "Mel Brooks", "James Coburn", "Charles Durning", "Austin Pendleton" ] },
	{ title: "Get Shorty ", stars: [ "John Travolta", "Danny DeVito", "Renne Russo", "Gene Hackman", "Dennis Farina" ] },
	{ title: "My Cousin Vinny", stars: [ "Joe Pesci", "Marrisa Tomei", "Fred Gwynne", "Austin Pendleton", "Lane Smith", "Ralph Macchio" ] },
	{ title: "Gladiator", stars: [ "Russell Crowe", "Joaquin Phoenix", "Connie Nielson" ] },
	{ title: "Star Wars", stars: [ "Harrison Ford", "Mark Hamill", "Carrie Fisher", "Alec Guinness", "James Earl Jones" ] },
	{ title: "Raiders of the Lost Ark", stars: [ "Harrison Ford", "Karen Allen" ] },
	{ title: "Serenity", stars: [ "Nathan Fillion", "Alan Tudyk", "Adam Baldwin", "Ron Glass", "Jewel Staite", "Gina Torres", "Morena Baccarin", "Sean Maher", "Summer Glau", "Chiwetel Ejiofor" ] },
	{ title: "Hooisers", stars: [ "Gene Hackman", "Barbara Hershey", "Dennis Hopper" ] },
	{ title: "WarGames", stars: [ "Matthew Broderick", "Ally Sheedy", "Dabney Coleman", "John Wood", "Barry Corbin" ] },
	{ title: "Spaceballs", stars: [ "Bill Pullman", "John Candy", "Mel Brooks", "Rick Moranis", "Daphne Zuniga", "Joan Rivers" ] },
	{ title: "Young Frankenstein", stars: [ "Gene Wilder", "Kenneth Mars", "Terri Garr", "Gene Hackman", "Peter Boyle" ] },
	{ title: "Real Genius", stars: [ "Val Kilmer", "Gabe Jarret", "Michelle Meyrink", "William Atherton" ] },
	{ title: "Top Gun", stars: [ "Tom Cruise", "Kelly McGillis", "Val Kilmer", "Anthony Edwards", "Tom Skerritt" ] },
	{ title: "MASH", stars: [ "Donald Sutherland", "Elliot Gould", "Tom Skerritt", "Sally Kellerman", "Robert Duvall" ] },
	{ title: "The Russians Are Coming, The Russians Are Coming", stars: [ "Carl Reiner", "Eva Marie Saint", "Alan Arkin", "Brian Keith" ] },
	{ title: "Jaws", stars: [ "Roy Scheider", "Robert Shaw", "Richard Dreyfuss", "Lorraine Gary " ] },
	{ title: "Harvey", stars: [ "James Stewart", "Josephine Hull", "Peggy Dow", "Charles Drake" ] },
	{ title: "Knocked Up", stars: [ "Seth Rogen", "Katherine Heigl", "Paul Rudd", "Leslie Mann" ] },
];

var starName = "Audrey";
var starNameCase = "audrey";

var correctFilteredByStarName = [
	{ title: "Charade", stars: [ "Audrey Hepburn", "Cary Grant", "Walter Matthau", "James Coburn", "George Kennedy" ] }
]; 

var starSurname = "Ford";
var starSurnameCase = "ford";

var correctFilteredByStarSurname = [
	{ title: "Star Wars", stars: [ "Harrison Ford", "Mark Hamill", "Carrie Fisher", "Alec Guinness", "James Earl Jones" ] },
	{ title: "Raiders of the Lost Ark", stars: [ "Harrison Ford", "Karen Allen" ] }
];

describe("Searching Films", function() {
	describe("Array of films should be filtered by title: ", function() {
		it("filtering array by title", function() {
			var filteredByTitle = filmsTitles.slice();

			//invoking tested function searchByTitle()
			filteredByTitle = listController.searchByTitle(filteredByTitle, titleForSearch);

			expect(filteredByTitle).to.deep.equal(correctFilteredByTitle);
		});
	});

	describe("Array of films should be filtered by title not case sensitive to input: ", function() {
		it("filtering array by title not case sensitive", function() {
			var filteredByTitleCase = filmsTitles.slice();

			//invoking tested function sortObjectsArray()
			filteredByTitleCase = listController.searchByTitle(filteredByTitleCase, titleForSearchCase);

			expect(filteredByTitleCase).to.deep.equal(correctFilteredByTitle);
		});
	});

	describe("Array of films should be filtered by star name: ", function() {
		it("filtering array by star name", function() {
			var filteredByStarName = filmsStars.slice();

			//invoking tested function sortObjectsArray()
			filteredByStarName = listController.searchByStar(filteredByStarName, starName);

			expect(filteredByStarName).to.deep.equal(correctFilteredByStarName);
		});
	});

	describe("Array of films should be filtered by star name not case sensitive to input: ", function() {
		it("filtering array by star name not case sensitive", function() {
			var filteredByStarNameCase = filmsStars.slice();

			//invoking tested function sortObjectsArray()
			filteredByStarNameCase = listController.searchByStar(filteredByStarNameCase, starNameCase);

			expect(filteredByStarNameCase).to.deep.equal(correctFilteredByStarName);
		});
	});

	describe("Array of films should be filtered by star surname: ", function() {
		it("filtering array by star surname ", function() {
			var filteredByStarSurname = filmsStars.slice();

			//invoking tested function sortObjectsArray()
			filteredByStarSurname = listController.searchByStar(filteredByStarSurname, starSurname);

			expect(filteredByStarSurname).to.deep.equal(correctFilteredByStarSurname);
		});
	});

	describe("Array of films should be filtered by star surname not case sensitive to input: ", function() {
		it("filtering array by star surname not case sensitive", function() {
			var filteredByStarSurnameCase = filmsStars.slice();

			//invoking tested function sortObjectsArray()
			filteredByStarSurnameCase = listController.searchByStar(filteredByStarSurnameCase, starSurnameCase);

			expect(filteredByStarSurnameCase).to.deep.equal(correctFilteredByStarSurname);
		});
	});
});
