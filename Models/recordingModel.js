const { Schema, model } = require('../connection');

const mySchema = new Schema({
    title: String,
    file: String,
    uploadBy: { type: String, default: 'unknown' },
    createdAt: { type: Date, default: Date.now() }
})

module.exports = model('records', mySchema);

