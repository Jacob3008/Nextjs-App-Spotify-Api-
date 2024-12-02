import SongSchema from "./schema";

var mongoose = require("mongoose");

var CountryModel = mongoose.models.Country || mongoose.model("Country", SongSchema);
var HipHopModel = mongoose.models.HipHop || mongoose.model("HipHop", SongSchema);
var PopModel = mongoose.models.Pop || mongoose.model("Pop", SongSchema);
var RockModel = mongoose.models.Rock|| mongoose.model("Rock", SongSchema);

export {CountryModel, HipHopModel, PopModel, RockModel};