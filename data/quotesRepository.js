const quotes = require('./quote');

module.exports = {
    getRandom: function getRandom(numberOfQuotes) {
        const limit = numberOfQuotes > quotes.length ? quotes.length : numberOfQuotes;
        const out = new Array(limit);
        const availableQuotes = quotes.slice();
        for (var i = 0; i < limit; i++) {
            out[i] = availableQuotes.splice(Math.floor(Math.random() * availableQuotes.length), 1)[0];
        }
        return out;
    }
};