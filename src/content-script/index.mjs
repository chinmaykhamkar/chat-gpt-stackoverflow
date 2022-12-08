import MarkdownIt from "markdown-it";
import Browser from "webextension-polyfill";

async function run(question) {
  const markdown = new MarkdownIt();

  const container = document.createElement("div");
  container.className = "chat-gpt-container";
  container.innerHTML = '<p class="loading">Waiting for ChatGPT response...</p>';

  var body = document.querySelector('body');
  var contain = body.querySelector('container');
  var content = body.querySelector('#content');
  var innerContent = body.querySelector('.inner-content');
  var sideBar = body.querySelector('#sidebar');
  
  sideBar.prepend(container);

  // const siderbarContainer = document.getElementById("rhs");
  // if (siderbarContainer) {
  //   siderbarContainer.prepend(container);
  // } else {
  //   container.classList.add("sidebar-free");
  //   document.getElementById("rcnt").appendChild(container);
  // }

  const port = Browser.runtime.connect();
  port.onMessage.addListener(function (msg) {
    if (msg.answer) {
      container.innerHTML =
        '<p class="prefix">ChatGPT:</p><div id="answer" class="markdown-body" dir="auto"></div>';
      container.querySelector("#answer").innerHTML = markdown.render(msg.answer);
    } else if (msg.error === "UNAUTHORIZED") {
      container.innerHTML =
        '<p>Please login at <a href="https://chat.openai.com" target="_blank">chat.openai.com</a> first</p>';
    } else {
      container.innerHTML = "<p>Failed to load response from ChatGPT</p>";
    }
  });
  port.postMessage({ question });
}



var question = document.getElementsByClassName('question-hyperlink')[0].innerHTML;


console.log(question);

// const searchInput = document.getElementsByName("q")[0];
if (question) {
  // only run on first page
  // const startParam = new URL(location.href).searchParams.get("start") || "0";
  // if (startParam === "0") {
    run(question);
  // }
}
