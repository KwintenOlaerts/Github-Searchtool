class Github {
    constructor() {
        this.client_id = 'fa4ee9ed833a620a1883';
        this.client_secret = '0cc64dcafab08c191844373802a1727fe1b41a10';
    }
async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
        profile
    }

}

}