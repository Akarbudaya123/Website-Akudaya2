const cultures = [
  {
    nama: "Tari Kecak",
    asal: "Bali",
    steps: [
      {
        text: "Tari Kecak adalah tarian tradisional dari Bali yang menampilkan puluhan penari laki-laki duduk melingkar sambil menyerukan 'cak'.",
        image: "https://images.unsplash.com/photo-1511164657592-59a452023479?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        text: "Tarian ini berasal dari tradisi Sanghyang dan berkembang pada tahun 1930-an sebagai bentuk teater Ramayana.",
        image: "https://images.unsplash.com/photo-1702318192103-30ce1a291c53?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        text: "Tari ini menggambarkan pertarungan antara Rama dan Rahwana, dengan suasana mistis dan irama vokal yang khas.",
        image: "https://images.unsplash.com/photo-1675956000201-5c42a62edf35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ],
    gambar: "assets/image/kecak.jpg",
    provinsi: "Bali"
  },
  {
    nama: "Wayang Kulit",
    asal: "Jawa Tengah",
    steps: [
      {
        text: "Wayang Kulit adalah pertunjukan boneka kulit tradisional yang digunakan untuk menceritakan kisah epik Hindu.",
        image: "assets/image/wayang.jpg"
      },
      {
        text: "Pertunjukan ini menggunakan layar putih dan lampu di belakangnya, menciptakan bayangan wayang di layar.",
        image: "https://jarwadi.me/wp-content/uploads/2012/06/dsc02484swk.jpg"
      },
      {
        text: "Dalang memainkan semua karakter, menyuarakan dialog, dan mengatur gamelan yang mengiringi.",
        image: "https://images.unsplash.com/photo-1620409123739-3849e65df57a?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ],
    gambar: "assets/image/wayang.jpg",
    provinsi: "Jawa Tengah"
  },
  {
    nama: "Rumah Gadang",
    asal: "Sumatera Barat",
    steps: [
      {
        text: "Rumah Gadang adalah rumah adat suku Minangkabau yang atapnya menyerupai tanduk kerbau.",
        image: "assets/image/gadang.jpg"
      },
      {
        text: "Rumah ini mencerminkan sistem kekerabatan matrilineal dan digunakan untuk berbagai acara adat.",
        image: "https://plus.unsplash.com/premium_photo-1673283243936-57acf471fc0e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        text: "Tiap bagian rumah punya filosofi yang mendalam, dari jumlah ruang hingga ukiran kayunya.",
        image: "https://responradio.com/wp-content/uploads/2023/12/Mengungkap-Keunikan-dan-Asal-Usul-Rumah-Gadang.jpg"
      }
    ],
    gambar: "assets/image/gadang.jpg",
    provinsi: "Sumatera Barat"
  },
  {
    nama: "Tenun Ikat Sumba",
    asal: "Nusa Tenggara Timur",
    steps: [
      {
        text: "Tenun ikat Sumba adalah kain tradisional khas NTT yang dibuat dengan teknik pewarnaan benang sebelum ditenun.",
        image: "https://cdn.shopify.com/s/files/1/0428/0965/5452/files/tenun_2.jpg?v=1691991176"
      },
      {
        text: "Prosesnya memakan waktu lama karena benang-benang diikat dan dicelup berulang kali agar motif terbentuk sempurna.",
        image: "https://asset.kompas.com/crops/GGN6TBuc5k9takrEILJke_sx3H8=/0x0:1000x667/1200x800/data/photo/2018/05/30/822670728.jpg"
      },
      {
        text: "Motif tenun Sumba biasanya menggambarkan simbol alam, hewan, atau warisan leluhur dan digunakan dalam upacara adat.",
        image: "https://cdn.shopify.com/s/files/1/0428/0965/5452/files/tenun_3.jpg?v=1691991205"
      }
    ],
    gambar: "https://cdn.shopify.com/s/files/1/0428/0965/5452/files/tenun_2.jpg?v=1691991176",
    provinsi: "Nusa Tenggara Timur"
  }
];

// Group cultures by province
const groupedByProvince = cultures.reduce((groups, culture) => {
  const { provinsi } = culture;
  if (!groups[provinsi]) {
    groups[provinsi] = [];
  }
  groups[provinsi].push(culture);
  return groups;
}, {});

const listEl = document.getElementById("culture-list");
const detailEl = document.getElementById("culture-detail");

// Function to display cultures by province
function displayCulturesByProvince() {
  listEl.innerHTML = ''; // Clear previous content

  Object.keys(groupedByProvince).forEach(province => {
    const provinceEl = document.createElement("div");
    provinceEl.classList.add("province");

    const provinceTitle = document.createElement("h2");
    provinceTitle.textContent = province;
    provinceEl.appendChild(provinceTitle);

    groupedByProvince[province].forEach(culture => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${culture.gambar}" alt="${culture.nama}" />
        <div class="card-content">
          <h3>${culture.nama}</h3>
          <p>${culture.asal}</p>
        </div>
      `;
      card.onclick = () => showDetail(cultures.indexOf(culture), 0);
      provinceEl.appendChild(card);
    });

    listEl.appendChild(provinceEl);
  });
}

// Show details of a culture step
let currentIndex = 0;
let currentStep = 0;

function showDetail(index, step) {
  const data = cultures[index];
  const stepData = data.steps[step];
  currentIndex = index;
  currentStep = step;

  detailEl.classList.remove("hidden");
  listEl.style.display = "none";

  setTimeout(() => {
    detailEl.classList.add("show");
  }, 10);

  detailEl.innerHTML = `
    <h2>${data.nama}</h2>
    <p><strong>Asal:</strong> ${data.asal}</p>
    <img src="${stepData.image}" alt="Step ${step + 1} ${data.nama}" />
    <p>${stepData.text}</p>
    <div class="step-indicator">Langkah ${step + 1} dari ${data.steps.length}</div>
    <div class="button-group">
      <button onclick="prevStep()">← Sebelumnya</button>
      ${step < data.steps.length - 1 
        ? `<button onclick="nextStep()">Selanjutnya →</button>` 
        : `<button onclick="hideDetail()">Selesai</button>`}
    </div>
    <div style="margin-top: 1rem;">
      <button onclick="goHome()" style="background:#ccc; padding:10px 15px; border:none; border-radius:6px; cursor:pointer;">🏠 Kembali ke Beranda</button>
    </div>
  `;
}

// Function to go to the next step
function nextStep() {
  if (currentStep < cultures[currentIndex].steps.length - 1) {
    currentStep++;
    showDetail(currentIndex, currentStep);
  }
}

// Function to go to the previous step
function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showDetail(currentIndex, currentStep);
  }
}

// Function to hide the details and go back to the culture list
function hideDetail() {
  detailEl.classList.remove("show");
  setTimeout(() => {
    listEl.style.display = "block";
    detailEl.classList.add("hidden");
  }, 300);
}

// Function to go back to the home page (culture list)
function goHome() {
  hideDetail(); // Hide the detail view first
  displayCulturesByProvince(); // Show the culture list again
}


// Go to next step
function nextStep() {
  showDetail(currentIndex, currentStep + 1);
}

// Hide detail view
function hideDetail() {
  detailEl.classList.remove("show");
  setTimeout(() => {
    detailEl.classList.add("hidden");
    listEl.style.display = "grid";
  }, 300);
}

// Go back to home page
function goHome() {
  currentIndex = 0;
  currentStep = 0;
  hideDetail();
}

// Initialize the display
displayCulturesByProvince();
