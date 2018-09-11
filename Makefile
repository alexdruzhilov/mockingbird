install:
	npm i
	npm install -g forever

start:
	forever start server.js

stop:
	forever stop server.js
