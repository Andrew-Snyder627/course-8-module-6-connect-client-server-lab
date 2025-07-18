document.addEventListener("DOMContentLoaded", () => {
  fetch("/events")
    .then((res) => res.json())
    .then((events) => events.forEach(renderEvent));

  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const titleInput = document.querySelector("#title");
    const title = titleInput.value.trim();

    if (!title) return alert("Title is required");

    fetch("/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    })
      .then((res) => res.json())
      .then(renderEvent);

    titleInput.value = "";
  });

  function renderEvent(event) {
    const li = document.createElement("li");
    li.textContent = `${event.title} (ID: ${event.id})`;
    document.querySelector("#event-list").appendChild(li);
  }
});
