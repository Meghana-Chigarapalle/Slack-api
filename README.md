# Slack-api

* This bot reads the message in a given format in one channel and reposts the message into another channel and also stores the required data in database
* The database used is postgresql.
* Create a bot user for slack and give the token in respective position.
* Give respective credentials to connect to database

* To run the code, initialise node,
  > npm init 
  Now install node packages
  > npm install --save pg sequelize slackbots

* This bot recognises the messages in the format of X got placed in Y where X is a candidate and Y is an Organisation