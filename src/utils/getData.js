/**
 * @fileOverview Defines an API access point utility to interact with external resources through a proxy server.
 * @module API
 * @description Provides a function to fetch JSON data from an external API through a proxy server, handling any specified endpoint.
 * @author Gabriel Arias
 */

/**
 * The URL of the proxy server used to bypass CORS restrictions.
 * @const {string}
 * @default
 */
const proxyServer = 'https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/';

/**
 * Fetches JSON data from the specified API endpoint using the proxy server.
 *
 * @async
 * @function getData
 * @param {string} endpoint - The API endpoint to fetch data from, appended to the proxy server URL.
 * @returns {Promise<Object>} A promise that resolves to the JSON response from the API.
 * @throws {Error} If the fetch request fails or if the response is not valid JSON.
 * 
 * @example
 * const data = await getData('users');
 * console.log(data);
 */
async function getData(endpoint) {
    const res = await fetch(`${proxyServer}${endpoint}`);
    return await res.json();
}

export default getData;
