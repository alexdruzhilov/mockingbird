install:
	npm i
	npm install -g forever

start:
	forever -o logs/server.log -e logs/error.log start server.js

stop:
	forever stop server.js
