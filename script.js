//your code here!
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("infi-list");
  let itemCount = 0;

  // Helper function to create and append items
  function addItems(count) {
    for (let i = 0; i < count; i++) {
      itemCount++;
      const li = document.createElement("li");
      li.textContent = `Item ${itemCount}`;
      list.appendChild(li);
    }
  }

  // Add 10 items by default
  addItems(10);

  // Detect when user reaches the end of the list/page
  window.addEventListener("scroll", () => {
    // Distance scrolled + height of visible window vs total height of page
    const totalHeight = document.documentElement.scrollHeight;
    const currentScrollPosition = window.innerHeight + window.scrollY;

    // Check if user has scrolled near the bottom (within 5px threshold)
    if (currentScrollPosition >= totalHeight - 5) {
      addItems(2);
    }
  });
});
