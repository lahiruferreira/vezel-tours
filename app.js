"use strict";

const CONFIG = {
  businessName: "Ceylon Vezel Tours",
  whatsapp: "94771234567",
  phoneDisplay: "+94 77 123 4567",
  email: "hello@ceylonvezeltours.com",
  address: "Colombo, Sri Lanka",
};

// Indicative rates against EUR; all prices are stored in EUR.
const RATES = {
  EUR: 1, USD: 1.08, GBP: 0.86, AUD: 1.7, NZD: 1.85, CAD: 1.5, CHF: 0.94,
  AED: 3.97, BDT: 130, BGN: 1.96, BHD: 0.41, BRL: 6.1, CNY: 7.8, CZK: 25.2,
  DKK: 7.46, EGP: 53, HKD: 8.4, HUF: 395, IDR: 17500, ILS: 4.0, INR: 92,
  ISK: 150, JPY: 165, KRW: 1500, KWD: 0.33, LKR: 330, MVR: 16.7, MXN: 20.5,
  MYR: 4.9, NOK: 11.8, NPR: 147, OMR: 0.42, PHP: 62, PKR: 300, PLN: 4.3,
  QAR: 3.93, RON: 4.97, SAR: 4.05, SEK: 11.4, SGD: 1.45, THB: 38, TRY: 37,
  TWD: 35, VND: 27500, ZAR: 20,
};
const POPULAR_CURRENCIES = ["EUR", "USD", "GBP", "AUD", "NZD", "CAD", "CHF"];
const DEFAULT_CURRENCY = "EUR";

const POPULAR = ["grand-tour", "southern-safari", "hill-country", "east-coast"];

const TRAVEL_INFO = [
  ["Getting here", "Fly into Bandaranaike International Airport (CMB), near Colombo. It is served by SriLankan Airlines and major carriers via hubs such as Dubai, Doha, Abu Dhabi, Istanbul, Singapore and Kuala Lumpur. Your chauffeur meets you at arrivals."],
  ["Visa (ETA)", "Most visitors need an Electronic Travel Authorisation (ETA). Apply online before departure through the official Sri Lanka immigration portal."],
  ["Weather all year", "December to April is best for the south and west coasts and the hill country. May to September is best for the east coast and the Cultural Triangle. We plan your route around the season."],
  ["Money and plugs", "The currency is the Sri Lankan Rupee (LKR) and cards are widely accepted. Plugs are type D and G (230V), so bring a universal adapter. Sri Lanka time is UTC+5:30."],
];

const GRADIENTS = {
  culture: "linear-gradient(135deg, #b5652f 0%, #7a3b1d 100%)",
  hill: "linear-gradient(135deg, #2f7d5b 0%, #144734 100%)",
  grand: "linear-gradient(135deg, #1a1f27 0%, #c8962e 140%)",
  beach: "linear-gradient(135deg, #1aa6b7 0%, #0d5d80 100%)",
  wellness: "linear-gradient(135deg, #8a9a5b 0%, #4b5a2c 100%)",
  wildlife: "linear-gradient(135deg, #a1832f 0%, #4f3d12 100%)",
  romance: "linear-gradient(135deg, #c55a7a 0%, #6b2342 100%)",
  east: "linear-gradient(135deg, #f0a64a 0%, #1b7aa0 100%)",
};

const PACKAGES = [
  {
    id: "cultural-triangle",
    title: "Cultural Triangle Explorer",
    days: 5,
    priceEUR: 690,
    cover: "culture",
    tags: ["culture"],
    route: "Negombo · Sigiriya · Dambulla · Polonnaruwa · Kandy",
    summary: "Climb Sigiriya Lion Rock, explore golden cave temples and ancient royal capitals, and end in Kandy at the Temple of the Tooth.",
    best: "All year (best January to September)",
    itinerary: [
      ["Arrival & Negombo", "Meet your chauffeur at Colombo airport and relax at a beachside hotel in Negombo."],
      ["Dambulla & Sigiriya", "Visit the Dambulla Cave Temple, then a sunset village tour by bullock cart and catamaran."],
      ["Sigiriya & Polonnaruwa", "Climb the 5th-century Lion Rock at sunrise, then cycle among the ruins of Polonnaruwa."],
      ["Kandy", "Stop at a spice garden on the way to Kandy, then the Temple of the Tooth and a Kandyan dance show."],
      ["Departure", "Visit the Peradeniya Botanical Gardens, then transfer to the airport or extend your trip."],
    ],
  },
  {
    id: "hill-country",
    title: "Hill Country & Tea Trails",
    days: 6,
    priceEUR: 840,
    cover: "hill",
    tags: ["culture", "wildlife"],
    route: "Kandy · Nuwara Eliya · Ella · Yala · Galle",
    summary: "Wind through emerald tea estates, ride the famous blue train to Ella, hike Little Adam's Peak and spot leopards in Yala.",
    best: "January to April, and July to September",
    itinerary: [
      ["Kandy", "Airport pickup and a scenic drive to the hill capital, with the Temple of the Tooth in the evening."],
      ["Tea country", "Drive through Ramboda Falls to a working tea factory with tastings, then on to 'Little England' in Nuwara Eliya."],
      ["Train to Ella", "Ride the iconic hill-country train while your Vezel meets you at Ella. Then the Nine Arch Bridge at golden hour."],
      ["Ella hikes", "Hike Little Adam's Peak, try the Ravana zipline (optional) and enjoy a cooking class with a local family."],
      ["Yala safari", "Descend to the plains for an afternoon jeep safari in search of leopards, elephants and sloth bears."],
      ["Galle & departure", "Walk the ramparts of Galle Fort, a UNESCO site, then take the expressway to the airport."],
    ],
  },
  {
    id: "grand-tour",
    title: "Classic Sri Lanka Grand Tour",
    days: 10,
    priceEUR: 1490,
    cover: "grand",
    tags: ["culture", "wildlife", "beach"],
    route: "Sigiriya · Kandy · Ella · Yala · Mirissa · Galle",
    summary: "Our bestseller: the island's highlights in one relaxed loop of ancient cities, tea hills, safari and a beach finale.",
    best: "December to April (or reverse the route from May to September)",
    itinerary: [
      ["Arrival", "Meet and greet at the airport, then a gentle drive to a jungle lodge near Sigiriya."],
      ["Sigiriya & village life", "Climb Lion Rock at sunrise, followed by a village lunch served on lotus leaves."],
      ["Polonnaruwa & Minneriya", "Explore the ruins by bicycle, then an elephant safari at Minneriya or Kaudulla."],
      ["Dambulla to Kandy", "Visit the cave temples and a spice garden, then Kandy's Temple of the Tooth at dusk."],
      ["Tea country", "A tea factory and plantation walk on the way to Nuwara Eliya."],
      ["Ella", "The scenic train to Ella, Nine Arch Bridge and Little Adam's Peak."],
      ["Yala", "Drive past Ravana Falls to Yala for an afternoon leopard safari."],
      ["Mirissa", "Beach time, with optional whale watching from December to April."],
      ["Galle", "Galle Fort, stilt fishermen and a seafood dinner by the lighthouse."],
      ["Departure", "Expressway transfer to the airport (about 2 hours)."],
    ],
  },
  {
    id: "southern-safari",
    title: "Southern Beaches & Safari",
    days: 7,
    priceEUR: 980,
    cover: "beach",
    tags: ["beach", "wildlife"],
    route: "Bentota · Galle · Mirissa · Udawalawe · Yala",
    summary: "The ultimate winter-sun escape: palm-fringed beaches, blue whales, baby elephants and leopards.",
    best: "November to April",
    itinerary: [
      ["Bentota", "Airport pickup and a coastal drive to a boutique beach hotel. Madu River boat safari in the afternoon."],
      ["Turtles & Galle", "Visit a turtle hatchery, then the sunset ramparts of Galle Fort."],
      ["Mirissa whales", "Early boat trip to see blue whales and dolphins, with afternoons on the beach."],
      ["Beach day", "A free day for surfing lessons, snorkelling or simply doing nothing."],
      ["Udawalawe", "The Elephant Transit Home feeding, then a jeep safari among herds of elephants."],
      ["Yala", "A full day of leopard tracking with a picnic breakfast in the park."],
      ["Departure", "A comfortable expressway drive back to Colombo airport."],
    ],
  },
  {
    id: "ayurveda",
    title: "Ayurveda & Wellness Retreat",
    days: 8,
    priceEUR: 1280,
    cover: "wellness",
    tags: ["wellness", "beach"],
    route: "Kandy · Knuckles · Bentota · Galle",
    summary: "Daily Ayurvedic treatments, sunrise yoga, forest-bathing in the hills and a final rejuvenating stay by the sea.",
    best: "All year (coastal stays best November to April)",
    itinerary: [
      ["Arrival", "Transfer to a hillside eco-retreat near Kandy, followed by a welcome herbal tea and consultation with an Ayurvedic doctor."],
      ["Yoga & temples", "Sunrise yoga, a herbal oil massage and an evening temple meditation."],
      ["Knuckles Range", "A gentle guided forest hike and a waterfall swim."],
      ["To the coast", "Scenic drive to an Ayurveda resort in Bentota."],
      ["Ayurveda days", "Personalised treatments, plant-based cuisine and beach walks."],
      ["Ayurveda days", "Shirodhara, steam therapy and a cooking class."],
      ["Galle", "A slow afternoon in Galle Fort's cafés and boutiques."],
      ["Departure", "Airport transfer, refreshed and restored."],
    ],
  },
  {
    id: "wildlife",
    title: "Wildlife & Leopard Safari",
    days: 6,
    priceEUR: 1020,
    cover: "wildlife",
    tags: ["wildlife"],
    route: "Wilpattu · Minneriya · Udawalawe · Yala",
    summary: "Four national parks in six days, with leopards, sloth bears and the world-famous elephant gathering.",
    best: "February to September (Minneriya peak July to October)",
    itinerary: [
      ["Wilpattu", "Drive north to Sri Lanka's largest park, with an afternoon safari among its natural lakes (villus)."],
      ["Wilpattu full day", "A full-day safari looking for leopards and sloth bears."],
      ["Minneriya", "Head to the Cultural Triangle for 'The Gathering' of hundreds of elephants."],
      ["Udawalawe", "A long scenic drive south and an evening elephant safari."],
      ["Yala", "Dawn and dusk safaris in the park with the world's highest leopard density."],
      ["Departure", "Southern expressway back to Colombo airport."],
    ],
  },
  {
    id: "honeymoon",
    title: "Honeymoon Escape",
    days: 9,
    priceEUR: 1890,
    cover: "romance",
    tags: ["romance", "beach", "culture"],
    route: "Sigiriya · Kandy · Ella · Galle · Tangalle",
    summary: "Treehouse dinners, private tea-estate bungalows, candlelit beach suppers and a chauffeur who knows when to give you space.",
    best: "December to April",
    itinerary: [
      ["Arrival", "Champagne pickup and transfer to a luxury jungle villa."],
      ["Sigiriya", "A hot-air balloon flight (seasonal) and a private dinner in the treetops."],
      ["Kandy", "A couples' spa ritual and the Temple of the Tooth."],
      ["Tea bungalow", "A colonial planter's bungalow with a butler and high tea."],
      ["Ella", "First-class train to Ella and a sunset at Ella Rock."],
      ["To the south", "A scenic drive to a secluded beach villa in Tangalle."],
      ["Beach days", "Private beach dinner, snorkelling and a sunset catamaran."],
      ["Galle", "Galle Fort and a farewell dinner."],
      ["Departure", "Airport transfer."],
    ],
  },
  {
    id: "east-coast",
    title: "East Coast Summer Escape",
    days: 8,
    priceEUR: 1120,
    cover: "east",
    tags: ["beach", "culture", "wildlife"],
    route: "Sigiriya · Trincomalee · Pasikudah · Arugam Bay",
    summary: "Built for May to September: calm turquoise seas, Pigeon Island snorkelling, surf at Arugam Bay and the Minneriya elephant gathering.",
    best: "May to September",
    itinerary: [
      ["Arrival", "Airport pickup and a drive to the Cultural Triangle."],
      ["Sigiriya & Minneriya", "Lion Rock at sunrise and an afternoon elephant gathering safari."],
      ["Trincomalee", "Koneswaram Temple and whale watching (May to August)."],
      ["Pigeon Island", "Snorkel with reef sharks and turtles in a marine national park."],
      ["Pasikudah", "The shallow, crystal-clear lagoon beach, ideal for swimming."],
      ["Arugam Bay", "Surf lessons on one of Asia's best point breaks."],
      ["Kumana or Lahugala", "A quiet safari with elephants and birdlife."],
      ["Departure", "A scenic drive through the hills back to Colombo airport."],
    ],
  },
];

const SEASONS = [
  ["West & South coast", "ggggbbooobog"],
  ["Hill Country", "ggggooooobbo"],
  ["Cultural Triangle", "gggggggggobo"],
  ["East coast", "booggggggobb"],
  ["Yala National Park", "gggggggobbog"],
  ["Whale watching (Mirissa)", "ggggbbbbbbog"],
  ["Elephant gathering (Minneriya)", "ooooooggggoo"],
];

const TESTIMONIALS = [
  { name: "Sophie & James", from: "Manchester, UK", text: "Our driver Nimal was a superstar, part guide, part photographer and part friend. The Vezel was spotless and so quiet on the hill roads." },
  { name: "Mia & Tom", from: "Melbourne, Australia", text: "A private car made this the easiest holiday we've done. The east coast in July was glorious: empty beaches and turtles at Pigeon Island." },
  { name: "Lukas M.", from: "Munich, Germany", text: "Perfect organisation from the first WhatsApp message to the airport goodbye. The Ayurveda package was exactly what I needed." },
];

const FAQS = [
  ["How many people fit in the Honda Vezel?", "We take up to 3 guests for comfort on long drives, plus your driver-guide. For 4 or more guests, ask us about pairing two Vezels or upgrading to a larger vehicle."],
  ["What is included in the package price?", "Private car and English-speaking chauffeur-guide, fuel, highway tolls, parking, your driver's meals and accommodation, airport transfers, daily bottled water, hotel nights with breakfast, and 24/7 support. Entrance fees, safari jeeps, lunches and dinners are optional add-ons."],
  ["Can I customise a package?", "Absolutely. Every tour is private, so we can add days, change hotels, swap destinations or slow the pace. Use the quote builder or send us an enquiry."],
  ["Is Sri Lanka safe for tourists?", "Sri Lanka is a welcoming destination popular with travellers from around the world. Your chauffeur stays with you throughout and our team is on call 24/7. As always, check your government's latest travel advice before booking."],
  ["How do I pay?", "A 20% deposit secures your booking by card or bank transfer in all major currencies. The balance is due 30 days before arrival. Cancellation terms are shared with your quote."],
  ["Do I need travel insurance?", "Yes, we strongly recommend comprehensive travel insurance covering medical care and cancellation."],
  ["How long are the daily drives?", "We plan most driving days at 2 to 4 hours with sightseeing stops along the way. Sri Lankan roads are scenic but slow, so we keep the pace relaxed."],
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const TAG_LABELS = { culture: "Culture", wildlife: "Wildlife", beach: "Beach", wellness: "Wellness", romance: "Honeymoon" };

const state = {
  currency: RATES[localStorage.getItem("cvt-currency")] ? localStorage.getItem("cvt-currency") : DEFAULT_CURRENCY,
  filter: "all",
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function formatPrice(eur) {
  const raw = eur * RATES[state.currency];
  const step = 10 ** Math.max(1, Math.floor(Math.log10(Math.max(raw, 1))) - 2);
  const value = Math.round(raw / step) * step;
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: state.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function waLink(text) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}

/* ---------- Currency ---------- */

function renderCurrencyOptions() {
  const names = typeof Intl.DisplayNames === "function" ? new Intl.DisplayNames(["en"], { type: "currency" }) : null;
  const option = (c) =>
    `<option value="${c}" ${c === state.currency ? "selected" : ""}>${c}${names ? ` – ${escapeHTML(names.of(c))}` : ""}</option>`;
  const others = Object.keys(RATES).filter((c) => !POPULAR_CURRENCIES.includes(c)).sort();
  $("#currencySelect").innerHTML =
    `<optgroup label="Popular">${POPULAR_CURRENCIES.map(option).join("")}</optgroup>` +
    `<optgroup label="All currencies">${others.map(option).join("")}</optgroup>`;
}

function setCurrency(code) {
  state.currency = code;
  localStorage.setItem("cvt-currency", code);
  renderPackages();
  renderQuote();
}

/* ---------- Packages ---------- */

function isPopular(pkg) {
  return POPULAR.includes(pkg.id);
}

function renderTravelInfo() {
  $("#infoGrid").innerHTML = TRAVEL_INFO
    .map(([t, d]) => `<article class="info-card"><h3>${escapeHTML(t)}</h3><p>${escapeHTML(d)}</p></article>`)
    .join("");
}

function renderPackages() {
  const list = PACKAGES.filter((p) => {
    if (state.filter === "all") return true;
    if (state.filter === "popular") return isPopular(p);
    return p.tags.includes(state.filter);
  });

  $("#packageGrid").innerHTML = list.length
    ? list.map(packageCard).join("")
    : `<p class="empty">No packages match this filter yet. Ask us for a custom tour.</p>`;
}

function packageCard(p) {
  return `
    <article class="package">
      <div class="package-cover" style="background:${GRADIENTS[p.cover]}">
        <span class="badge">${p.days} days · ${p.days - 1} nights</span>
        ${isPopular(p) ? `<span class="badge badge-rec">Bestseller</span>` : ""}
        <h3>${escapeHTML(p.title)}</h3>
        <span class="route">${escapeHTML(p.route)}</span>
      </div>
      <div class="package-body">
        <p>${escapeHTML(p.summary)}</p>
        <div class="tags">
          ${p.tags.map((t) => `<span class="tag">${TAG_LABELS[t]}</span>`).join("")}
          <span class="tag">Best: ${escapeHTML(p.best)}</span>
        </div>
        <div class="package-foot">
          <div class="price"><small>From, per person</small><strong>${formatPrice(p.priceEUR)}</strong></div>
          <button class="btn btn-small" data-open="${p.id}" type="button">View itinerary</button>
        </div>
      </div>
    </article>`;
}

function openItinerary(id) {
  const p = PACKAGES.find((x) => x.id === id);
  if (!p) return;
  $("#modalContent").innerHTML = `
    <div class="package-cover" style="background:${GRADIENTS[p.cover]}">
      <span class="badge">${p.days} days · ${p.days - 1} nights</span>
      <h3>${escapeHTML(p.title)}</h3>
      <span class="route">${escapeHTML(p.route)}</span>
    </div>
    <div class="modal-body">
      <p>${escapeHTML(p.summary)}</p>
      <p class="muted small"><strong>Best time:</strong> ${escapeHTML(p.best)}</p>
      <ol class="timeline">
        ${p.itinerary.map(([t, d], i) => `<li><strong>Day ${i + 1}: ${escapeHTML(t)}</strong><span>${escapeHTML(d)}</span></li>`).join("")}
      </ol>
      <div class="incl">
        <div><strong>Included</strong><ul>
          <li>Private 2026 Honda Vezel Z (black) with chauffeur-guide</li>
          <li>Fuel, tolls, parking, driver's meals and lodging</li>
          <li>${p.days - 1} nights' accommodation with breakfast</li>
          <li>Airport transfers and daily bottled water</li>
        </ul></div>
        <div><strong>Not included</strong><ul>
          <li>International flights and ETA visa</li>
          <li>Entrance fees and safari jeeps (optional add-on)</li>
          <li>Lunches, dinners and tips</li>
          <li>Travel insurance</li>
        </ul></div>
      </div>
      <div class="modal-foot">
        <div class="price"><small>From, per person (2 sharing)</small><strong>${formatPrice(p.priceEUR)}</strong></div>
        <a href="#enquire" class="btn" data-enquire="${p.id}">Enquire about this tour</a>
      </div>
    </div>`;
  $("#itineraryModal").showModal();
}

/* ---------- Seasons ---------- */

function renderSeasons() {
  const current = new Date().getMonth();
  const cls = { g: "s-good", o: "s-ok", b: "s-bad" };
  const title = { g: "Great", o: "Fair", b: "Rainy / limited" };
  $("#seasonTable").innerHTML = `
    <caption style="caption-side:bottom; text-align:left; padding:12px 4px" class="small muted">
      <span class="legend s-good"></span>Great <span class="legend s-ok"></span>Fair <span class="legend s-bad"></span>Rainy or limited · current month outlined
    </caption>
    <thead><tr><th>Region</th>${MONTHS.map((m, i) => `<th class="${i === current ? "cur" : ""}">${m}</th>`).join("")}</tr></thead>
    <tbody>
      ${SEASONS.map(([region, codes]) => `<tr><td>${region}</td>${[...codes]
        .map((c, i) => `<td class="${cls[c]} ${i === current ? "cur" : ""}" title="${title[c]}"></td>`)
        .join("")}</tr>`).join("")}
    </tbody>`;
}

/* ---------- Quote builder ---------- */

const PRICING = {
  vehiclePerDay: 85,
  hotelPerRoomNight: { comfort: 70, boutique: 140, luxury: 310 },
  ticketsPerPersonPerDay: 28,
  airportTransfers: 60,
};

function renderQuote() {
  if (!state.currency) return;
  const days = Number($("#qDays").value);
  const guests = Number($("#qGuests").value);
  const hotel = $("#qHotel").value;
  const tickets = $("#qTickets").checked;
  const airport = $("#qAirport").checked;

  $("#qDaysOut").textContent = `${days} days / ${days - 1} nights`;

  const rooms = Math.ceil(guests / 2);
  const lines = [
    ["Honda Vezel Z with chauffeur", PRICING.vehiclePerDay * days],
    [`Hotels (${rooms} room${rooms > 1 ? "s" : ""} × ${days - 1} nights)`, PRICING.hotelPerRoomNight[hotel] * rooms * (days - 1)],
  ];
  if (tickets) lines.push(["Entrance fees and safaris", PRICING.ticketsPerPersonPerDay * guests * days]);
  if (airport) lines.push(["Airport transfers", PRICING.airportTransfers]);

  const total = lines.reduce((s, [, v]) => s + v, 0);

  $("#quoteResult").innerHTML = `
    <p class="eyebrow">Estimated total</p>
    <div class="quote-total">${formatPrice(total)}</div>
    <p class="muted">≈ ${formatPrice(total / guests)} per person · ${guests} guest${guests > 1 ? "s" : ""}</p>
    <ul class="quote-lines">
      ${lines.map(([k, v]) => `<li><span>${k}</span><strong>${formatPrice(v)}</strong></li>`).join("")}
    </ul>
    <p class="small muted">Indicative only. The final price depends on season, hotel availability and route.</p>
    <a class="btn" href="#enquire" id="quoteEnquire">Request exact quote</a>`;

  $("#quoteEnquire").addEventListener("click", () => {
    const msg = $("#enquiryForm").elements.message;
    msg.value = `Custom tour: ${days} days, ${guests} guest(s), ${hotel} hotels${tickets ? ", incl. entrance fees" : ""}. Estimate shown: ${formatPrice(total)}.`;
    $("#enquiryForm").elements.guests.value = String(guests);
    $("#packageSelect").value = "custom";
  });
}

/* ---------- Testimonials & FAQ ---------- */

function renderTestimonials() {
  $("#testimonials").innerHTML = TESTIMONIALS
    .map((t) => `
      <blockquote class="testimonial">
        <div class="stars">★★★★★</div>
        <p>"${escapeHTML(t.text)}"</p>
        <footer>${escapeHTML(t.name)} <span>· ${escapeHTML(t.from)}</span></footer>
      </blockquote>`)
    .join("");
}

function renderFAQ() {
  $("#faqList").innerHTML = FAQS.map(([q, a]) => `<details><summary>${escapeHTML(q)}</summary><p>${escapeHTML(a)}</p></details>`).join("");
}

/* ---------- Enquiry ---------- */

function renderContact() {
  const items = [
    ["WhatsApp", `<a href="${waLink("Hi! I'm interested in a Sri Lanka tour.")}" target="_blank" rel="noopener">${CONFIG.phoneDisplay}</a>`],
    ["Email", `<a href="mailto:${CONFIG.email}">${CONFIG.email}</a>`],
    ["Office", CONFIG.address],
    ["Hours", "Every day, 7am–10pm Sri Lanka time (UTC+5:30)"],
  ];
  $("#contactList").innerHTML = items.map(([k, v]) => `<li><span>${k}</span><div>${v}</div></li>`).join("");
  $("#footerContact").innerHTML = items.slice(0, 3).map(([, v]) => `<div>${v}</div>`).join("");
  $("#whatsappFab").href = waLink("Hi! I'm interested in a Sri Lanka tour in the Honda Vezel.");

  $("#packageSelect").innerHTML =
    PACKAGES.map((p) => `<option value="${p.id}">${escapeHTML(p.title)} (${p.days} days)</option>`).join("") +
    `<option value="custom">Custom / not sure yet</option>`;

  const arrival = $("#enquiryForm").elements.arrival;
  arrival.min = new Date().toISOString().slice(0, 10);
}

function handleEnquiry(e) {
  e.preventDefault();
  const form = e.target;
  const channel = e.submitter?.dataset.channel || "email";
  const status = $("#formStatus");
  const data = Object.fromEntries(new FormData(form));

  const required = ["name", "email", "country", "arrival"];
  let ok = true;
  required.forEach((name) => {
    const field = form.elements[name];
    const valid = field.value.trim() !== "" && field.checkValidity();
    field.classList.toggle("invalid", !valid);
    if (!valid) ok = false;
  });
  if (!ok) {
    status.textContent = "Please fill in your name, a valid email, country and arrival date.";
    status.className = "form-status error";
    return;
  }

  const pkg = PACKAGES.find((p) => p.id === data.package);
  const lines = [
    `New tour enquiry - ${CONFIG.businessName}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Country: ${data.country}`,
    `Arrival: ${data.arrival}`,
    `Guests: ${data.guests}`,
    `Package: ${pkg ? `${pkg.title} (${pkg.days} days, from ${formatPrice(pkg.priceEUR)} pp)` : "Custom"}`,
    `Currency: ${state.currency}`,
    data.message ? `Message: ${data.message}` : "",
  ].filter(Boolean);
  const text = lines.join("\n");

  const saved = JSON.parse(localStorage.getItem("cvt-enquiries") || "[]");
  saved.push({ ...data, currency: state.currency, at: new Date().toISOString() });
  localStorage.setItem("cvt-enquiries", JSON.stringify(saved));

  if (channel === "whatsapp") {
    window.open(waLink(text), "_blank", "noopener");
  } else {
    window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Sri Lanka tour enquiry - " + data.name)}&body=${encodeURIComponent(text)}`;
  }
  status.textContent = `Thanks, ${data.name.split(" ")[0]}! Your enquiry is ready to send. We'll reply within a few hours.`;
  status.className = "form-status ok";
}

/* ---------- Events ---------- */

function bindEvents() {
  $("#currencySelect").addEventListener("change", (e) => setCurrency(e.target.value));

  $("#filters").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    state.filter = chip.dataset.filter;
    $$(".chip").forEach((c) => c.classList.toggle("active", c === chip));
    renderPackages();
  });

  $("#packageGrid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open]");
    if (btn) openItinerary(btn.dataset.open);
  });

  const modal = $("#itineraryModal");
  $("#modalClose").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
    const enq = e.target.closest("[data-enquire]");
    if (enq) {
      $("#packageSelect").value = enq.dataset.enquire;
      modal.close();
    }
  });

  $("#quoteForm").addEventListener("input", renderQuote);
  $("#enquiryForm").addEventListener("submit", handleEnquiry);
  $("#enquiryForm").addEventListener("input", (e) => e.target.classList.remove("invalid"));

  const navLinks = $("#navLinks");
  $("#menuToggle").addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") navLinks.classList.remove("open");
  });
}

/* ---------- Init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  renderCurrencyOptions();
  renderSeasons();
  renderTravelInfo();
  renderFAQ();
  renderContact();
  renderTestimonials();
  renderPackages();
  renderQuote();
  bindEvents();
});
