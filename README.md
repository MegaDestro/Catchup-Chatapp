# Catchup Chatapp
Catchup Chatapp is a simple chat application made using React and Node.js. It allows users to create chat rooms and send messages to each other in real-time. This was made using the ChatEngine API.

## Installation
To install the dependencies for this project, run the following command in the root directory:

### `npm install`
This will install the dependencies listed in the package.json file. This command will also install the dependencies of the frontend and backend using the postinstall script.

##Usage
To start the backend and frontend servers, run the following command in the root directory:

### `npm start`
This will start the backend and frontend servers in parallel using the npm-run-all package.
Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

##Creating a Chat Room
To create a new chat room, enter a name for the room in the "Create a Room" input field on the homepage and click the "Create" button. This will create a new chat room with the specified name.

##Joining a Chat Room
To join an existing chat room, click on the name of the room on the homepage. This will take you to the chat room page, where you can see the messages sent in the room and send messages of your own.

##Sending Messages
To send a message in a chat room, enter your message in the input field at the bottom of the chat room page and press the "Enter" key or click the "Send" button. Your message will be sent to all users in the chat room.
Attachments can also be sent by clicking the pin icon next to the chat field.
