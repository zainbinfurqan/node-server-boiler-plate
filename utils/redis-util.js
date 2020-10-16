

// const redis = require('redis');
//     // client = redis.createClient(6379);

// /**
//  * @description get all kesy exists in redis cache
//  */
// function getAllKeys() {
//     return new Promise((resv, rej) => {
//         client.keys("*", (err, reply) => {
//             resv(reply);
//         });
//     })
// }

// /**
//  * @description set key value pair 
//  */
// function setKeyValues(key, value) {
//     console.log(key, value)
//     return new Promise((resv, rej) => {
//         client.set(`search${key}`, 'zain', (err, reply) => {
//             resv(reply);
//         });
//     })
// }

// /**
// @description will create a key if not exsist with list having single elements (string/number) with no repet value in list
//  or push the value in list if value is not in list 
// */
// function settArrayListSingleElement(key, value) {
//     return new Promise((resv, rej) => {
//         console.log(key, value,"1")
//         client.exists(key, (err, data) => {
//             data == 1 ?
//                 (console.log(key, value,"2"), client.sadd(key, value, (err, data) => {
//                     data == 1 ? resv(data) : resv(err)
//                 }))
//                 : (console.log(key, value,"3"), client.lpush(key, value, (err, data) => {
//                     data == 1 ? resv(data) : resv(err)
//                 }))
//         })

//     })
// }

// /**
//  * @description this methiod will check if key is exsist it will udate the list at particular intex 
//  * of if not exist it will create list 
//  */
// function settArrayList_(key, value, index = 0) {
//     console.log(key, value)
//     return new Promise((resv, rej) => {
//         client.exists(key, function (err, data) {
//             data == 1 ?
//                 client.lset(key, index, JSON.stringify(value), (err, data) => {
//                     data == 1 ? resv(data) : resv(err)
//                 })
//                 : client.lpush(key, JSON.stringify(value), (err, data) => {
//                     data == 1 ? resv(data) : resv(err)
//                 })
//         })
//     })
// }

// /**
//  * @description get key value and value is list
//  */
// function getLst(key, start = 0, end = -1) {
//     return new Promise((resv, rej) => {
//         client.lrange(key, start, end, (err, data) => {
//             resv(data);
//         });
//     })
// }

// /**
//  * @description get key value
//  */
// function getKeyValues(key) {
//     console.log(key)
//     return new Promise((resv, rej) => {
//         client.get(key, (err, reply) => {
//             resv(reply);
//         });
//     })
// }

// /**
//  * @description delete all keys from redis cache 
//  */
// function deleteAllKeys() {
//     return new Promise((resv, rej) => {
//         client.flushall((err, reply) => {
//             resv(reply);
//         });
//     })
// }

// module.exports = {
//     getAllKeys,
//     setKeyValues,
//     getKeyValues,
//     settArrayListSingleElement,
//     deleteAllKeys,
//     settArrayList_,
//     getLst
// }