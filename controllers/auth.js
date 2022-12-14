const {connect} = require('getstream');
const bcrypt = require('bcrypt');
const {StreamChat} = require('stream-chat').StreamChat;
const crypto = require('crypto');

require('dotenv').config();

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;
const appID = process.env.STREAM_APP_ID;

const singup = async (req, res) => {
    try {
        const {firstName, lastName, username, password, phoneNumber} = req.body;

        const userId = crypto.randomBytes(16).toString("hex");

        const serverClient = connect(apiKey, apiSecret, appID);

        const hashedPassword = await bcrypt.hash(password, 10);

        const token = serverClient.createUserToken(userId);

        res.status(200).json({token, firstName, lastName, username, userId, hashedPassword, phoneNumber});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error});
    }
}

const login = async (req, res) => {
    try {
        const {username, password} = req.body;

        const serverClient = connect(apiKey, apiSecret, appID);
        const client = StreamChat.getInstance(apiKey, apiSecret);

        const {users} = await client.queryUsers({name: username});

        if (!users.length) return res.status(400).json({message: 'User not found'});

        const success = await bcrypt.compare(password, users[0].hashedPassword);

        const token = serverClient.createUserToken(users[0].id);

        if (success) {
            res.status(200).json({token, ...users[0].firstName, lastName, username, userId: users[0].id});
        } else {
            res.status(500).json({message: 'Incorrect password'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error});
    }
}

module.exports = {
    singup,
    login
}
