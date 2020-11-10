var ID_ACCESS_TOKEN;


const HelixService = {
	init() {

		ID_ACCESS_TOKEN = sessionStorage.getItem("access-token");
	},

	get(url, callback) {
		return fetch(url, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			}
		})
			.then(this.validateResponse)
			.then(data => {
				return data.json();
			})
			.catch(error => {
				console.log(error);
				throw new Error(this.errorGenerator(error));
			})
			.finally(callback);
	},

	getWithAuth(url, callback) {
		this.init();
		return fetch(url, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",

				Authorization: "Bearer " + ID_ACCESS_TOKEN
			}
		})
			.then(this.validateResponse)
			.then(data => {
				return data.json();
			})
			.catch(error => {
				console.log(error);
				throw new Error(this.errorGenerator(error));
			})
			.finally(callback);
	},

	post(url, json, callback) {
		return fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: json
		})
			.then(this.validateResponse)
			.then(data => {
				return data.json();
			})
			.catch(error => {
				console.log(error);
				throw new Error(this.errorGenerator(error));
			})
			.finally(callback);
	},

	postWithAuth(url, json, callback) {
		this.init();
		return fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + ID_ACCESS_TOKEN
			},
			body: json
		})
			.then(this.validateResponse)
			.then(data => {
				return data.json();
			})
			.catch(error => {
				console.log(error);
				throw new Error(this.errorGenerator(error));
			})
			.finally(callback);
	},

	put(url, json, callback) {
		return fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",EN
			},
			body: json
		})
			.then(this.validateResponse)
			.then(data => {
				return data.json();
			})
			.catch(error => {
				console.log(error);
				throw new Error(this.errorGenerator(error));
			})
			.finally(callback);
	},

	putWithAuth(url, json, callback) {
		this.init();
		return fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + ID_ACCESS_TOKEN
			},
			body: json
		})
			.then(this.validateResponse)
			.then(data => {
				return data.json();
			})
			.catch(error => {
				console.log(error);
				throw new Error(this.errorGenerator(error));
			})
			.finally(callback);
	},

	deleteWithAuth(url, callback) {
		this.init();
		return (
			fetch(url, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + ID_ACCESS_TOKEN
				}
			})
				//No JSON extraction on DELETE route.
				.then(this.validateResponse)
				.then(data => {
					return data;
				})
				.catch(error => {
					console.log(error);
					throw new Error(this.errorGenerator(error));
				})
				.finally(callback)
		);
	},

	validateResponse(response) {
		if (response.ok) {
			return response;
		} else {
			throw Error(response.statusText);
		}
	},

	errorGenerator(error) {
		return "[Erreur HELIX]: " + error.message;
	}
};

export default HelixService;
