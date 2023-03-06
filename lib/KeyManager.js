const Configstore = require("configstore");
const pkg = require("../package.json");

class KeyManager {

    constructor() {
        this.conf = new Configstore(pkg.name);
    }

    setKey(key) {
        this.conf.set('apiKey', key);
        return key;
    }

    getKey() {
        const key = this.conf.get('apiKey');

        if (!key) {
            throw new Error('No API key Found -- Get the API key at https://coinlib.io.com');
        }
        return key;
    }

    deleteKey() {
        const key = this.conf.get('apiKey');

        if (!key) {
            throw new Error('No API key Found -- Get the API key at http://coinlib.io.com');
        }

        this.conf.delete('apiKey')
        return;
    }
}

module.exports = KeyManager;