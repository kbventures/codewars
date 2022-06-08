function ghostBusters(building) {
    return building.includes(" ") ? building.split(' ').join('') : "You just wanted my autograph didn't you?"

}



/*
xample:

ghostBusters("Sky scra per");
Should return:

"Skyscraper"
If the building contains no ghosts, return the string:

"You just wanted my autograph didn't you?"

*/