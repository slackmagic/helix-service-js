import HelixService from "./helixService";

const CHARACTERS = "/api/wow-tracker/characters";
const REFRESH = "/api/wow-tracker/refresh";

const HelixWowTracker = {
	getCharacters(callback) {
		return HelixService.getWithAuth(CHARACTERS, null);
	},
	refresh(callback) {
		return HelixService.getWithAuth(REFRESH, null);
	},
};

export default HelixWowTracker;
