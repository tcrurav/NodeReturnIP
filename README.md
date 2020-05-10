# Executing Shell Commands with Node.js

Example to run a Shell Command with Node.js

## Getting Started

Clone this project:

```
$ git clone https://github.com/tcrurav/NodeReturnIP
```

Change to the new created directory and run the server.js script:

```
$ cd NodeReturnIP
$ node server.js
```

Access to the result of the execution of the default command "ip addr" in your favorite browser:

![Response](/docs/screenshot-response.png)

## Do you want to try other shell commands?

Just edit the line with the command to execute in server.js

```
const cmd = "ip addr";
```

### Prerequisites

You need a working Node.js directory and git to clone the project

```
$ sudo apt install nodejs
$ sudo apt install npm
$ sudo apt install git
```

## Built With

* [Nodejs](https://nodejs.org) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Git](https://git-scm.com/) - Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
* [Visual Studio Code](https://code.visualstudio.com/) - Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux.

## Acknowledgments

* https://scotch.io/tutorials/use-ejs-to-template-your-node-application - Fantastic example to start with EJS.
* https://stackabuse.com/executing-shell-commands-with-node-js/ - Fantastic explanation about how to execute shell commands with node.js.
