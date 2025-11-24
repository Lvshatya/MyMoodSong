const buttons = document.querySelectorAll(".mood");
const ytPlayer = document.getElementById("yt-player");

const playlists = {
  senang: [
    "pkCyfBibIbI", "ZbZSe6N_BXs", "ru0K8uYEZWw", 
    "EVrS-4tgvyM", "cA7Gzh2ISL0", "zDHOW9PdQYE"  
  ],
  sedih: [
    "RgKAFK5djSk", "RGLPm-hHCnM", "lu1b04XPQv0",
    "iQo-8wx0l0Y", "450p7goxZqg", "kPa7bsKwL-c"
  ],
  marah: [
    "3tmd-ClpJxA", "SQnc1QibapQ", "3YxaaGgTQYM",
    "qAc8fQkiaLM", "0i-D1eBVKUM", "3RbqHAq2mco"
  ],
  santai: [
    "TUVcZfQe-Kw", "ZyhrYis509A", "5jlI4uzZGjU",
    "G4nNBckyZQU", "PjkeraWbw4g", "xPjDpNFApuM"
  ],
  galau: [
    "BBpIV9A1PXc", "NgsWGfUlwJI", "w_G9VxIctjg",
    "yjnSX_iUFVo", "6ODTXJ-6s5Y", "EGblx7XNzw"
  ],
  jatuhCinta: [
    "bS9eXS6VucU", "J36z7AnhvOM", "ShlW5plD_40",
    "_GpYWnWlgkg", "tUJAxxm1y1I", "zt4NeGqnCOk"
  ]
};

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const mood = btn.dataset.mood;
    const videos = playlists[mood];
    const videoId = videos[Math.floor(Math.random() * videos.length)];
    ytPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  });
});
