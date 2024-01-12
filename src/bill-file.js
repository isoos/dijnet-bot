/**
 * Represents a bill's downloadable file.
 */
export default class BillFile {
	/**
	 * @param {string} name Display name
	 * @param {string} dijnetPath Díjnet path, relative to `DijnetBrowser`'s `baseUrl`
	 */
	constructor(name, dijnetPath) {
		this.name = name;
		this.dijnetPath = dijnetPath;
	}
}
