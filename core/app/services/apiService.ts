// import { getAccessToken } from '../lib/actions'

// Define the apiService object for handling API requests
const apiService = {
    /**
     * Performs a GET request to the specified URL.
     * @param url - The endpoint to fetch data from.
     * @returns A promise that resolves with the response data in JSON format.
     */
    get: async function (url: string): Promise<any> {
        // console.log('get', url);

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json()) // Parse the JSON from the response
                .then((json) => {
                    // console.log('Response:', json);

                    resolve(json); // Resolve the promise with the JSON data
                })
                .catch((error) => {
                    reject(error); // Reject the promise on error
                });
        });
    },

    /**
     * Performs a POST request to the specified URL with the provided data.
     * @param url - The endpoint to post data to.
     * @param data - The data to be sent in the request body.
     * @returns A promise that resolves with the response data in JSON format.
     */
    post: async function(url: string, data: any): Promise<any> {
        // Uncomment for debugging
        console.log('post', url, data);

        // const token = await getAccessToken();

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'POST',
                body: JSON.stringify(data), // Convert data to JSON string
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    // 'Authorization': `Bearer ${token}`
                }
            })
                .then(response => response.json()) // Parse the JSON from the response
                .then((json) => {
                    console.log('Response:', json); // Uncomment for debugging
                    resolve(json); // Resolve the promise with the JSON data
                })
                .catch((error) => {
                    reject(error); // Reject the promise on error
                });
        });
    },
}

export default apiService;

