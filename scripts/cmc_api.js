"use strict";
exports.__esModule = true;
exports.getVolatility = void 0;
var axios_1 = require("axios");
function getVolatility(symbol) {
    var config = {
        headers: {
            'X-CMC_PRO_API_KEY': '45be1879-9958-4adb-8ff3-75edbe7eabc5'
        }
    };
    var url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
    axios_1["default"].get(url, config).then(function (res) {
        console.log({ res: res });
    })["catch"](function (err) {
        console.log({ err: err });
    });
}
exports.getVolatility = getVolatility;
getVolatility();
