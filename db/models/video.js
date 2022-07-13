const { Model } = require('objection');

class ChannVideoel extends Model {
    static get tableName() {
        return 'video';
    }
}

module.exports = Video;