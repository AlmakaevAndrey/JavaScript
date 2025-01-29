const subscribeBtn = document.querySelector("[data-subscribe-btn]");

subscribeBtn.addEventListener("click", () => {
    let event;

    if (subscribeBtn.classList.contains("subscription")) {
        subscribeBtn.classList.remove("subscription");
        subscribeBtn.textContent = "SUBSCRIBE";
        event = new CustomEvent("subscription", {
            detail: {
                isSubscribed: false,
            }
        })
    } else {
        subscribeBtn.classList.add("subscription");
        subscribeBtn.textContent = "UNSUBSCRIBE";
        event = new CustomEvent("subscription", {
            detail: {
                isSubscribed: true,
            }
        })
    }

    window.dispatchEvent(event);
})