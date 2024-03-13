const director = require("./Director");
const movie = require("./Movie");

// has-one
movie.hasOne(director);
director.belongsTo(movie);
// has-one

