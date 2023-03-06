const axios = require("axios");
const colors = require("colors");


class CryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = 'https://coinlib.io/api/v1/coin';
    }


    async getPriceData(coinOption, curOption) {

        try {
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: curOption
            })
            const response = await axios.get(`${this.baseURL} ?key=${this.apiKey}&pref=${curOption}&symbol=${coinOption}`);
            let output = '';
            //console.log(response);

            response.data.coins.forEach(coin => {
                output += (`Coin: ${coin.symbol.yellow} (${coin.name}) | ${formatter.format(coin.price).green} | Rank: ${coin.rank.toString().blue} \n`);

            });
            return output;

        }
        catch (err) {
            handleAPIerror(err);
        }
    }
}

function handleAPIerror(err) {

    if (err.response.status === 401) {
        throw new Error('INVALID API KEY  --GET AT  http://coinlib.io'.red);
    }
    else if (err.response.status === 404) {
        throw new Error('API NOT RESPONDING');
    }
    else {
        throw new Error('Problem in working');
    }

}
module.exports = CryptoAPI;