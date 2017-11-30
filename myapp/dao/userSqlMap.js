var user = {
    insert: 'insert into user values(?, ?)',
    update: 'update user set password=? where username=?',
    delete: 'delete from user where username=?',
    queryById: 'select * from user where username=?',
    queryAll: 'select * from user'
};

module.exports = user;