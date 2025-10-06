const drops = ["NFT Drop 1", "Token Drop 2", "NFT Drop 3"];
const list = document.getElementById("drops");
drops.forEach(drop => {
  const li = document.createElement("li");
  li.textContent = drop;
  list.appendChild(li);
});
