var slackBot = require('slackbots');
const Sequelize = require('sequelize');
var Posts;
const sequelize = new Sequelize(databasename, username, password, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 9,
        min: 0,
        idle: 10000
    }
});

sequelize.authenticate().then(() => {
    console.log("Success!");
}).catch((err) => {
    console.log(err);
});

const bot = new slackBot({
    token: 'xxxxxxx',
    name: 'placement_bot'
});

sequelize.authenticate().then(() => {
    console.log("Success!");
    Posts = sequelize.define('placements', {
        name: {
            type: Sequelize.STRING
        },
        company: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true
    });


}).catch((err) => {
    console.log(err);
});

var reg = new RegExp(/[^]got placed in [^]/);

bot.on('error', err => console.log(err));

bot.on('message', data => {
    if (data.type !== 'message') {
        return;
    }
    if (reg.test(data.text) && data.channel == channel_id) {
        console.log("done");
        bot.postMessageToChannel('random', data.text);
        var arr = data.text.split(" ")
        var username = arr[0]
        var company = arr[arr.length - 1]
        Posts.sync({ force: false }).then(function() {
            return Posts.create({
                name: username,
                company: company
            });
        });
    }
});