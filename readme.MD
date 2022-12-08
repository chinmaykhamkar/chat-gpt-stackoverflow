# ChatGPT for Stackoverflow

A browser extension to display ChatGPT response alongside Stackoverflow questions.



![Screenshot](screenshot.png?raw=true)

## Installation

### Install to Chrome/Edge

#### Local Install

1. Download `chromium.zip` from [Releases](https://github.com/chinmaykhamkar/chat-gpt-stackoverflow/releases/tag/latest).
2. Unzip the file.
3. In Chrome go to the extensions page (`chrome://extensions` or `edge://extensions`).
4. Enable Developer Mode.
5. Click on Load unpacked and select the unzipped folder (do not delete the folder afterwards).
6. You are set. Search anything on stackoverflow.
7. If you are new user, you might need to signup to chatGPT.

### Install to Firefox
#### Local Install

1. Download `firefox.zip` from [Releases](https://github.com/chinmaykhamkar/chat-gpt-stackoverflow/releases/tag/latest).
2. Unzip the file.
3. Go to `about:debugging`, click "This Firefox" on the sidebar.
4. Click "Load Temporary Add-on" button, then select any file in the unzipped folder.

## Build from source

1. Clone the repo
2. Install dependencies with `npm install`
3. After that run `npm run build`
4. A build folder would be created.
5. After this step follow the above local installation process for the respescitve browser. 
6. The `chromium` and `firefox` folders would already be created inside the build folder so no need to unzip any files.


## Credit
This project is inspired by [wong2/chat-gpt-google-extension](https://github.com/wong2/chat-gpt-google-extension)
Special thanks to [ZohaibAhmed/ChatGPT-Google](https://github.com/ZohaibAhmed/ChatGPT-Google) for developing the unoffical chatGPT API (https://github.com/ZohaibAhmed/chatgpt-api)

## Disclaimer 
This is a fun side project to explore the cababilities of chatGPT. Its support is dependant on how long chatGPT has free access. 