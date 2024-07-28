const msgDelay = () => {
  return new Promise((resolve, reject) => {
    const delay = 1 + Math.random() * 6;
    setTimeout(() => {
      resolve();
    }, delay * 1000);
  });
};

const addItem = async (msg) => {
  await msgDelay();
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.body.appendChild(div);
};

const hackComp = async () => {
  let timeOut = setInterval(() => {
    let dots = document.body.lastElementChild;
    if (dots.innerHTML.endsWith("...")) {
      dots.innerHTML = dots.innerHTML.slice(0, dots.innerHTML.length - 3);
    } else {
      dots.innerHTML += ".";
    }
  }, 300);
  let msgArr = [
    ">>>Your Computer is being Hacked",
    ">>>Initializing Hacking",
    ">>>Reading Your Files",
    ">>>Password Files Detected",
    ">>>Sending all Passwords and Personal Files to Server",
    ">>>Cleaning Up",
    ">>>Your Computer has been Hacked",
  ];

  for (const msg of msgArr) {
    await addItem(msg);
  }

  clearInterval(timeOut);
};

hackComp();
