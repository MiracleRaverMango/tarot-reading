const deck = [
    ...majorArcanaDeck,
    ...cupsSuit,
    ...swordsSuit,
    ...wandsSuit,
    ...pentaclesSuit
  ];
  
  function drawCards() {
    const spread = document.querySelectorAll(".card-slot");
    const drawn = [];
  
    while (drawn.length < 3) {
      const index = Math.floor(Math.random() * deck.length);
      if (!drawn.includes(index)) {
        drawn.push(index);
      }
    }
  
    drawn.forEach((cardIndex, i) => {
      const cardData = deck[cardIndex];
      const isReversed = Math.random() < 0.5;
      const slot = spread[i];
  
      const cardBack = slot.querySelector(".card-back");
      const img = cardBack.querySelector("img");
      const title = cardBack.querySelector(".card-title");
      const meaning = cardBack.querySelector(".card-meaning");
  
      // Slight staggered delay
      setTimeout(() => {
        img.src = cardData.image;
        img.alt = cardData.name;
        img.style.transform = isReversed ? "rotate(180deg)" : "rotate(0deg)";
        title.textContent = `${cardData.name}${isReversed ? " (Reversed)" : ""}`;
        meaning.textContent = isReversed ? cardData.meanings.reversed : cardData.meanings.upright;
  
        slot.classList.add("flipped");
      }, i * 250);
    });
  }
  
  // ✅ FIX: Now globally scoped
  function resetCards() {
    const spread = document.querySelectorAll(".card-slot");
  
    spread.forEach(slot => {
      slot.classList.remove("flipped");
  
      const cardBack = slot.querySelector(".card-back");
      const img = cardBack.querySelector("img");
      const title = cardBack.querySelector(".card-title");
      const meaning = cardBack.querySelector(".card-meaning");
  
      img.src = "";
      img.alt = "";
      title.textContent = "";
      meaning.textContent = "";
  
      const front = slot.querySelector(".card-front img");
      front.src = "images/card-back.jpg";
      front.alt = "Card Back";
    });
  }
  