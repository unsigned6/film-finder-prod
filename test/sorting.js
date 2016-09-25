var expect = require("chai").expect;
var  listController = require("../app/listController.js");

var films = [
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

var correctlySortedFilms = [
	{ _id: "57e58784b2cbc2157da86029", title: "Butch Cassidy and the Sundance Kid", year: "1969", format: "VHS", __v: 0, stars: Array[3] },
	{ _id: "57e58784b2cbc2157da86027", title: "Charade", year: "1953", format: "DVD", __v: 0, stars: Array[5] },
	{ _id: "57e58784b2cbc2157da86028", title: "Cool Hand Luke", year: "1967", format: "VHS", __v: 0, stars: Array[3] },
	{ _id: "57e58784b2cbc2157da8602c", title: "Get Shorty ", year: "1995", format: "DVD", __v: 0, stars: Array[5] },
	{ _id: "57e58785b2cbc2157da8602e", title: "Gladiator", year: "2000", format: "Blu-Ray", __v: 0, stars: Array[3] },
	{ _id: "57e58786b2cbc2157da8603c", title: "Harvey", year: "1950 ", format: "DVD", __v: 0, stars: Array[4] },
	{ _id: "57e58785b2cbc2157da86032", title: "Hooisers", year: "1986", format: "VHS", __v: 0, stars: Array[3] },
	{ _id: "57e58786b2cbc2157da8603a", title: "Jaws", year: "1975 ", format: "DVD", __v: 0, stars: Array[4] },
	{ _id: "57e58786b2cbc2157da8603d", title: "Knocked Up", year: "2007", format: "Blu-Ray", __v: 0, stars: Array[4] },
	{ _id: "57e58786b2cbc2157da86038", title: "MASH", year: "1970 ", format: "DVD", __v: 0, stars: Array[5] },
	{ _id: "57e58785b2cbc2157da8602d", title: "My Cousin Vinny", year: "1992", format: "DVD", __v: 0, stars: Array[6] },
	{ _id: "57e58785b2cbc2157da86030", title: "Raiders of the Lost Ark", year: "1981", format: "DVD", __v: 0, stars: Array[2] },
	{ _id: "57e58786b2cbc2157da86036", title: "Real Genius", year: "1985", format: "VHS", __v: 0, stars: Array[4] },
	{ _id: "57e58785b2cbc2157da86031", title: "Serenity", year: "2005", format: "Blu-Ray", __v: 0, stars: Array[10] },
	{ _id: "57e58785b2cbc2157da86034", title: "Spaceballs", year: "1987", format: "DVD", __v: 0, stars: Array[6] },
	{ _id: "57e58785b2cbc2157da8602f", title: "Star Wars", year: "1977", format: "Blu-Ray", __v: 0, stars: Array[5] },
	{ _id: "57e58784b2cbc2157da8602b", title: "The Muppet Movie", year: "1979", format: "DVD", __v: 0, stars: Array[7] },
	{ _id: "57e58786b2cbc2157da86039", title: "The Russians Are Coming, The Russia…", year: "1966", format: "VHS", __v: 0, stars: Array[4] },
	{ _id: "57e58784b2cbc2157da8602a", title: "The Sting", year: "1973", format: "DVD", __v: 0, stars: Array[4] },
	{ _id: "57e58786b2cbc2157da86037", title: "Top Gun", year: "1986", format: "DVD", __v: 0, stars: Array[5] },
	{ _id: "57e58785b2cbc2157da86033", title: "WarGames", year: "1983", format: "VHS", __v: 0, stars: Array[5] },
	{ _id: "57e58785b2cbc2157da86035", title: "Young Frankenstein", year: "1974", format: "VHS", __v: 0, stars: Array[5] } 
];


var filmsCases = [
	{ _id: "57e58784b2cbc2157da86027", title: "Charade", year: "1953", format: "DVD", __v: 0, stars: Array[5] },
	{ _id: "57e58784b2cbc2157da86028", title: "cool Hand Luke", year: "1967", format: "VHS", __v: 0, stars: Array[3] },
	{ _id: "57e58784b2cbc2157da86029", title: "butch Cassidy and the Sundance Kid", year: "1969", format: "VHS", __v: 0, stars: Array[3] },
	{ _id: "57e58784b2cbc2157da8602a", title: "The Sting", year: "1973", format: "DVD", __v: 0, stars: Array[4] },
	{ _id: "57e58784b2cbc2157da8602b", title: "The Muppet Movie", year: "1979", format: "DVD", __v: 0, stars: Array[7] },
	{ _id: "57e58784b2cbc2157da8602c", title: "Get Shorty ", year: "1995", format: "DVD", __v: 0, stars: Array[5] },
	{ _id: "57e58785b2cbc2157da8602d", title: "my Cousin Vinny", year: "1992", format: "DVD", __v: 0, stars: Array[6] },
	{ _id: "57e58785b2cbc2157da8602e", title: "Gladiator", year: "2000", format: "Blu-Ray", __v: 0, stars: Array[3] },
	{ _id: "57e58785b2cbc2157da8602f", title: "Star Wars", year: "1977", format: "Blu-Ray", __v: 0, stars: Array[5] },
	{ _id: "57e58785b2cbc2157da86030", title: "raiders of the Lost Ark", year: "1981", format: "DVD", __v: 0, stars: Array[2] },
	{ _id: "57e58785b2cbc2157da86031", title: "Serenity", year: "2005", format: "Blu-Ray", __v: 0, stars: Array[10] },
	{ _id: "57e58785b2cbc2157da86032", title: "Hooisers", year: "1986", format: "VHS", __v: 0, stars: Array[3] },
	{ _id: "57e58785b2cbc2157da86033", title: "WarGames", year: "1983", format: "VHS", __v: 0, stars: Array[5] },
	{ _id: "57e58785b2cbc2157da86034", title: "Spaceballs", year: "1987", format: "DVD", __v: 0, stars: Array[6] },
	{ _id: "57e58785b2cbc2157da86035", title: "Young Frankenstein", year: "1974", format: "VHS", __v: 0, stars: Array[5] },
	{ _id: "57e58786b2cbc2157da86036", title: "Real Genius", year: "1985", format: "VHS", __v: 0, stars: Array[4] },
	{ _id: "57e58786b2cbc2157da86037", title: "Top Gun", year: "1986", format: "DVD", __v: 0, stars: Array[5] },
	{ _id: "57e58786b2cbc2157da86038", title: "MASH", year: "1970 ", format: "DVD", __v: 0, stars: Array[5] },
	{ _id: "57e58786b2cbc2157da86039", title: "the Russians Are Coming, The Russia…", year: "1966", format: "VHS", __v: 0, stars: Array[4] },
	{ _id: "57e58786b2cbc2157da8603a", title: "Jaws", year: "1975 ", format: "DVD", __v: 0, stars: Array[4] },
	{ _id: "57e58786b2cbc2157da8603c", title: "Harvey", year: "1950 ", format: "DVD", __v: 0, stars: Array[4] },
	{ _id: "57e58786b2cbc2157da8603d", title: "Knocked Up", year: "2007", format: "Blu-Ray", __v: 0, stars: Array[4] }
];

var correctlySortedFilmsCases = [
	{ _id: "57e58784b2cbc2157da86029", title: "butch Cassidy and the Sundance Kid", year: "1969", format: "VHS", __v: 0, stars: Array[3] },
	{ _id: "57e58784b2cbc2157da86027", title: "Charade", year: "1953", format: "DVD", __v: 0, stars: Array[5] },
	{ _id: "57e58784b2cbc2157da86028", title: "cool Hand Luke", year: "1967", format: "VHS", __v: 0, stars: Array[3] },
	{ _id: "57e58784b2cbc2157da8602c", title: "Get Shorty ", year: "1995", format: "DVD", __v: 0, stars: Array[5] },
	{ _id: "57e58785b2cbc2157da8602e", title: "Gladiator", year: "2000", format: "Blu-Ray", __v: 0, stars: Array[3] },
	{ _id: "57e58786b2cbc2157da8603c", title: "Harvey", year: "1950 ", format: "DVD", __v: 0, stars: Array[4] },
	{ _id: "57e58785b2cbc2157da86032", title: "Hooisers", year: "1986", format: "VHS", __v: 0, stars: Array[3] },
	{ _id: "57e58786b2cbc2157da8603a", title: "Jaws", year: "1975 ", format: "DVD", __v: 0, stars: Array[4] },
	{ _id: "57e58786b2cbc2157da8603d", title: "Knocked Up", year: "2007", format: "Blu-Ray", __v: 0, stars: Array[4] },
	{ _id: "57e58786b2cbc2157da86038", title: "MASH", year: "1970 ", format: "DVD", __v: 0, stars: Array[5] },
	{ _id: "57e58785b2cbc2157da8602d", title: "my Cousin Vinny", year: "1992", format: "DVD", __v: 0, stars: Array[6] },
	{ _id: "57e58785b2cbc2157da86030", title: "raiders of the Lost Ark", year: "1981", format: "DVD", __v: 0, stars: Array[2] },
	{ _id: "57e58786b2cbc2157da86036", title: "Real Genius", year: "1985", format: "VHS", __v: 0, stars: Array[4] },
	{ _id: "57e58785b2cbc2157da86031", title: "Serenity", year: "2005", format: "Blu-Ray", __v: 0, stars: Array[10] },
	{ _id: "57e58785b2cbc2157da86034", title: "Spaceballs", year: "1987", format: "DVD", __v: 0, stars: Array[6] },
	{ _id: "57e58785b2cbc2157da8602f", title: "Star Wars", year: "1977", format: "Blu-Ray", __v: 0, stars: Array[5] },
	{ _id: "57e58784b2cbc2157da8602b", title: "The Muppet Movie", year: "1979", format: "DVD", __v: 0, stars: Array[7] },
	{ _id: "57e58786b2cbc2157da86039", title: "the Russians Are Coming, The Russia…", year: "1966", format: "VHS", __v: 0, stars: Array[4] },
	{ _id: "57e58784b2cbc2157da8602a", title: "The Sting", year: "1973", format: "DVD", __v: 0, stars: Array[4] },
	{ _id: "57e58786b2cbc2157da86037", title: "Top Gun", year: "1986", format: "DVD", __v: 0, stars: Array[5] },
	{ _id: "57e58785b2cbc2157da86033", title: "WarGames", year: "1983", format: "VHS", __v: 0, stars: Array[5] },
	{ _id: "57e58785b2cbc2157da86035", title: "Young Frankenstein", year: "1974", format: "VHS", __v: 0, stars: Array[5] } 
];

describe("Sorting Films", function() {
	describe("Array of films should be sorted in alphabet order: ", function() {
		it("sort array of films by title", function() {
			var sortedFilms = films.slice();

			//invoking tested function
			listController.sortObjectsArray(sortedFilms);

			expect(sortedFilms).to.deep.equal(correctlySortedFilms);
		});
	});

	describe("Array of films should be sorted in alphabet order: ", function() {
		it("sort array not case sensitive", function() {
			var sortedFilmsCases = filmsCases.slice();

			//invoking tested function
			listController.sortObjectsArray(sortedFilmsCases);

			expect(sortedFilmsCases).to.deep.equal(correctlySortedFilmsCases);
		});
	});
});
