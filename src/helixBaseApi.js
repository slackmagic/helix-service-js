import HelixService from "./helixService";

const HEALTHCHECK = "/api/_";
const VERSION = "/api/version";

const HelixBaseApi = {
	healthcheck(callback) {
		return HelixService.get(HEALTHCHECK, callback);
	},

	version(callback) {
		return HelixService.get(VERSION, callback);
	}
};

export default HelixBaseApi;
