import HelixService from "./helixService";

const ENTRY_LIST = "/api/memoriz/entries";
const ENTRY_LIST_BY_BOARD = "/api/memoriz/entries/by-board/";
const ENTRY_ADD = "/api/memoriz/entries";
const ENTRY_DEL = "/api/memoriz/entries/";
const BOARD_LIST = "/api/memoriz/boards";
const BOARD_ADD = "/api/memoriz/boards";
const BOARD_DEL = "/api/memoriz/boards";

const HelixMemorizStore = {
	entryList(callback) {
		return HelixService.getWithAuth(ENTRY_LIST, callback);
	},

	entryListByBoard(uuid, callback) {
		return HelixService.getWithAuth(ENTRY_LIST_BY_BOARD + uuid, callback);
	},

	newEntry(entry, callback) {
		return HelixService.postWithAuth(
			ENTRY_ADD,
			JSON.stringify(entry),
			callback
		);
	},

	updateEntry(entry, callback) {
		return HelixService.putWithAuth(
			ENTRY_ADD,
			JSON.stringify(entry),
			callback
		);
	},

	deleteEntry(uuid, callback) {
		return HelixService.deleteWithAuth(ENTRY_DEL + uuid, callback);
	},

	boardList(callback) {
		return HelixService.getWithAuth(BOARD_LIST, callback);
	},

	newBoard(board, callback) {
		return HelixService.postWithAuth(
			BOARD_ADD,
			JSON.stringify(board),
			callback
		);
	},

	updateBoard(board, callback) {
		return HelixService.putWithAuth(
			BOARD_ADD,
			JSON.stringify(board),
			callback
		);
	},

	deleteBoard(board, callback) {
		return HelixService.deleteWithAuth(BOARD_DEL, callback);
	}
};
export default HelixMemorizStore;
