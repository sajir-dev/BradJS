
// Create Github class
class Github {
    constructor() {
        this.client_id = '3a1e86fbfedcf5dfa451';
        this.client_secret = 'f373f47dcf4ed48756e8a102865ff35f85b53631';
    }

    async getUser (user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        return {
            profile 
        }
        // profile: profile can be written as just profile in ES6
    }
}