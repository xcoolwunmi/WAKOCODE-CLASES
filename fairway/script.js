
      const menuBtn = document.getElementById("menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");

      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

    document.addEventListener("DOMContentLoaded", () => {
  // 20 sample reviews
  const reviews = [
    { rating: 5, text: "Everyone worked so hard to make my impossible deal happen and it did! Thank you!", name: "Suzanne E", location: "Dripping Spgs, TX" },
    { rating: 5, text: "Very professional, everything went smoothly. Great service!", name: "Sharon Lee", location: "Salado, TX" },
    { rating: 4, text: "Communication was great, friendly and professional.", name: "Samuel D", location: "Channahon, IL" },
    { rating: 5, text: "Fantastic team, I couldn’t be happier with my experience.", name: "David P", location: "Austin, TX" },
    { rating: 5, text: "Everything was handled quickly and efficiently.", name: "Monica R", location: "Houston, TX" },
    { rating: 5, text: "Great support and timely updates. Highly recommend.", name: "James C", location: "Dallas, TX" },
    { rating: 4, text: "Smooth process, just a few delays but overall good.", name: "Lydia K", location: "Phoenix, AZ" },
    { rating: 5, text: "They made the loan process easy and stress-free.", name: "Carlos H", location: "Chicago, IL" },
    { rating: 5, text: "Super friendly staff and great communication.", name: "Emma S", location: "Atlanta, GA" },
    { rating: 5, text: "A great experience from start to finish!", name: "Robert T", location: "New York, NY" },
    { rating: 5, text: "Fast approval and excellent support team.", name: "Grace F", location: "Miami, FL" },
    { rating: 5, text: "They exceeded my expectations at every step.", name: "Henry L", location: "Denver, CO" },
    { rating: 4, text: "Very professional, though the paperwork took time.", name: "Victoria M", location: "Orlando, FL" },
    { rating: 5, text: "I’ll definitely recommend them to friends!", name: "Peter W", location: "Seattle, WA" },
    { rating: 5, text: "Great experience, great people, fast process.", name: "Nancy G", location: "Boston, MA" },
    { rating: 5, text: "Fantastic customer service all the way.", name: "Daniel R", location: "San Diego, CA" },
    { rating: 4, text: "Overall positive, a bit of delay in updates.", name: "Jessica T", location: "Las Vegas, NV" },
    { rating: 5, text: "Made my first home purchase so easy!", name: "Michael B", location: "Nashville, TN" },
    { rating: 5, text: "They worked around my schedule and made it happen.", name: "Hannah J", location: "Detroit, MI" },
    { rating: 5, text: "A wonderful experience, thank you team!", name: "Omar Q", location: "Portland, OR" },
  ];

  const container = document.getElementById("reviews-container");
  const leftBtn = document.getElementById("scrollLeft");
  const rightBtn = document.getElementById("scrollRight");

  if (!container) {
    console.error("Reviews container not found (id=reviews-container).");
    return;
  }

  // build review cards
  reviews.forEach((review) => {
    const stars = "★★★★★".slice(0, review.rating) + "☆☆☆☆☆".slice(review.rating);
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
      <div class="text-green-600 text-4xl font-bold">${review.rating}</div>
      <p class="text-green-600 mb-4">${stars}</p>
      <p class="text-sm mb-4">${review.text}</p>
      <p class="font-semibold">${review.name}</p>
      <p class="text-xs text-gray-500">${review.location}</p>
      <div class="date-badge">10/11/2025</div>
    `;
    container.appendChild(card);
  });

  // Auto-scroll settings
  const STEP = 300; // px per tick (tune this to your card width)
  const INTERVAL_MS = 5000;
  let autoScrollInterval = null;
  let paused = false;

  const startAutoScroll = () => {
    if (autoScrollInterval) return;
    autoScrollInterval = setInterval(() => {
      if (paused) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      let next = container.scrollLeft + STEP;
      if (next > maxScroll) next = 0; // loop back to start
      container.scrollTo({ left: next, behavior: "smooth" });
    }, INTERVAL_MS);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      autoScrollInterval = null;
    }
  };

  // start auto-scrolling
  startAutoScroll();

  // pause on hover/focus (so users can read)
  container.addEventListener("mouseenter", () => { paused = true; });
  container.addEventListener("mouseleave", () => { paused = false; });
  container.addEventListener("focusin", () => { paused = true; });
  container.addEventListener("focusout", () => { paused = false; });

  // manual controls
  if (rightBtn) {
    rightBtn.addEventListener("click", () => {
      container.scrollBy({ left: STEP, behavior: "smooth" });
    });
  }
  if (leftBtn) {
    leftBtn.addEventListener("click", () => {
      container.scrollBy({ left: -STEP, behavior: "smooth" });
    });
  }

  // make STEP more accurate after fonts/images load and on resize
  window.addEventListener("resize", () => {
    // optional: you could recalculate STEP based on first card width
  });
});
