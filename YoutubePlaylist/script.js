createCard = (thumbnail, duration, title, channelName, views, postDate) => {
  let viewStr;
  
  if (views >= 1000 && views < 1000000) {
    viewStr = views / 1000 + "K";
  } else if (views >= 1000000 && views < 1000000000) {
    viewStr = views / 1000000 + "M";
  } else if (views >= 1000000000) {
    viewStr = views / 1000 + "B";
  }

  window.addEventListener("click", () => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card-poster"><img src="${thumbnail}" alt="thumbnail"><p>${duration}</p></div><div class="card-information"><div class="card-title"><h2>${title}</h2></div><div class="card-description"><p>${channelName}</p><p>•</p><p>${viewStr} views</p><p>•</p><p>${postDate} months ago</p></div></div>`;

    document.body.appendChild(card);
  });
};

createCard(
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw",
  "31:22",
  "Introduction to Backend | Sigma Web Dev Video #2",
  "CodeWithHarry",
  560000,
  7
);
