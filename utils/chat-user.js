const users = [];

async function userJoin(id, userName, room) {
    const user = { id, userName, room };
    users.push(user);
    return users;
}


async function getCurrentusers(id) {
    return await users.find(user => user.id === id);
}


module.exports = {
    userJoin,
    getCurrentusers
}