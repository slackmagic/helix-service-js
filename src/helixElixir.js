import HelixService from "./helixService";

const TAKE = "/api/elixir/take/";
const LOGS = "/api/elixir/logs";

const HelixElixir = {
	take(type, callback) {
		return HelixService.getWithAuth(TAKE + type, null);
	},

	logs(callback) {
		return HelixService.getWithAuth(LOGS, null);
	},

	logs_by_date(date, callback) {
		return HelixService.getWithAuth(LOGS + "?on=" + date, null);
	},

	logs_by_type(type, callback) {
		return HelixService.getWithAuth(LOGS + "/" + type, null);
	},

	logs_by_type_and_date(type, date, callback) {
		return HelixService.getWithAuth(LOGS + "/" + type + "?on=" + date, null);
	},
};

export default HelixElixir;
