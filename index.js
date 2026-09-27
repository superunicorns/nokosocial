// Sidebar
const menuItems = document.querySelectorAll(".menu-item");
// Messages
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message"); 
const messageSearch = document.querySelector("#message-search");
// Theme
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");

const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove("active");
  })
}

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    changeActiveItem()
    item.classList.add("active");

    if(item.id != "notifications") {
      document.querySelector(".notifications-popup")
      .style.display = "none";
    } else {
      document.querySelector(".notifications-popup")
      .style.display = "block";
      document.querySelector("#notifications .notification-count")
      .style.display = "none";
    }
  })
});

messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count")
  .style.display = "none";

  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// Search chat
const searchMessage = () => {
  const val = messageSearch.value?.toLowerCase();
  console.log(val);
  message.forEach(chat => {
    let name = chat.querySelectorAll("h5").textContent?.toLowerCase();
    if(name?.indexOf(val) != -1) {
      chat.style.display = "flex"; 
    } else {
      chat.style.display = "none";
    }
  });
}

messageSearch.addEventListener("keyup", searchMessage);

// Theme
const openThemeModal = () => {
  themeModal.style.display = "grid";
}

const closeThemeModal = (e) => {
  if(e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
}

themeModal.addEventListener("click", closeThemeModal);

theme.addEventListener("click", openThemeModal);

// Fonts 
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove("active");
  })
}

fontSizes.forEach(size => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");
    
    if(size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if(size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if(size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if(size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if(size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----sticky-top-left", "-10rem");
      root.style.setProperty("----sticky-top-right", "-33rem");
    }

    document.querySelector("html").style.fontSize = fontSize;
  })
})