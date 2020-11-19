import HelixService from "./helixService";


const CHARACTERS = "/api/wow-tracker/characters";
const CHARACTERS_LAST_DATA = "/api/wow-tracker/characters/last";
const CHARACTERS_PREVIOUS_DATA = "/api/wow-tracker/characters/previous";
const UPDATE_CHARACTERS = "/api/wow-tracker/characters/update";

const HelixWowTracker = {
	getCharactersAllData(callback) {
		return HelixService.getWithAuth(CHARACTERS, null);
	},
	getCharactersLastData(callback) {
		return HelixService.getWithAuth(CHARACTERS_LAST_DATA, null);
	},
	getCharactersPrevioudData(callback) {
		return HelixService.getWithAuth(CHARACTERS_PREVIOUS_DATA, null);
	},
	updateCharacters(callback) {
		return HelixService.getWithAuth(UPDATE_CHARACTERS, null);
	},
};

export default HelixWowTracker;
