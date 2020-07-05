const ENDPOINT = 'http://localhost:3300/profiles';

/**
 * @returns {Promise<(() => Promise<any>) | void>} Profiles to be displayed by app
 */
export function getProfiles() {
    return fetch(ENDPOINT).then(res => res.json());
}