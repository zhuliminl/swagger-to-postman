var secret = require('./secrets.js');

module.exports = {
    "collections": [
        {
            "from": "../easyrn-server/docs/swagger",
            "to": "collection",
            "name": "Swagger Petstore",
            "collection_uid": "2052204-9b958bb3-cbdd-4c41-a8ad-9c5ba62f432a",
            "collection_id": "9b958bb3-cbdd-4c41-a8ad-9c5ba62f432a"
        }
    ],
    "key": secret.key
};