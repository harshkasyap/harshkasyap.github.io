---
layout: default
title: Lab
---

<div style="text-align:center; margin-top:1.5rem;">

  <h1 style="margin-bottom:0.3rem;">
    High-Performance and Trustworthy AI Systems Lab
  </h1>

  <p style="
    font-size:1.3rem;
    color:#555;
    font-weight:500;
    margin-top:0;
  ">
    उच्च प्रदर्शन एवं विश्वसनीय कृत्रिम बुद्धिमत्ता प्रणाली प्रयोगशाला
  </p>

</div>

This page highlights the amazing students I work with — their energy, curiosity, and ideas shape everything we build together.

---

<!-- ===================== -->
<!-- 👨‍🏫 MENTORS -->
<!-- ===================== -->

<div style="display:flex; justify-content:center; gap:3rem; flex-wrap:wrap; margin-top:2rem;">

  <div style="text-align:center;">
    <img src="/assets/images/profile.JPG" style="width:140px; height:140px; border-radius:50%; object-fit:cover;">
    <h3 style="margin:0.5rem 0 0;">Dr. Harsh Kasyap</h3>
    <p style="color:#555;">Lab Incharge</p>
  </div>

  <div style="text-align:center;">
    <img src="/assets/images/ravi.jpg" style="width:140px; height:140px; border-radius:50%; object-fit:cover;">
    <h3 style="margin:0.5rem 0 0;">Prof. Ravi Shankar Singh</h3>
    <p style="color:#555;">Mentor</p>
  </div>

</div>

---

<!-- ===================== -->
<!-- ☁️ STUDENT CLOUD -->
<!-- ===================== -->

<h2 style="text-align:center; margin-top:3rem;">👨‍🏫👩‍🎓 Students Team</h2>

<div id="student-cloud-wrapper">
  <div id="student-cloud"></div>
</div>

<style>
#student-cloud-wrapper {
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 420px;
  margin: 2rem auto;
  border-radius: 50%;
  background: radial-gradient(circle, #ffffff, #f3f4f6);
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  overflow: hidden;
}

#student-cloud span {
  position: absolute;
  font-weight: 600;
  white-space: nowrap;
  transition: transform 0.2s ease;
}

#student-cloud span:hover {
  transform: scale(1.2);
}
</style>

<script>
const students = [
  "Anju","Garvita","Geetanjali","Ghanendar","Hansraj","Haraskumar",
  "Himani Prakash","Kamlesh Kumawat","Aaditya Agarwal","Dhanish Shetty",
  "Drish Menghani","Killari Nandini","Kush","Mansi Jamwal",
  "Shreyansh Solanki","Amit Kumar Maurya","Parteek Yadav",
  "Pranjul Malpani","Yash Sharma","Navneet","Thansen",
  "Anubhav Kumar","Himanshi Bansal",
  "Suryansh","Aadi Sharma","Aaditya Raj", "AND MANY MORE"
];

const cloud = document.getElementById("student-cloud");
const wrapper = cloud.parentElement;

const W = wrapper.offsetWidth;
const H = wrapper.offsetHeight;
const cx = W/2, cy = H/2;

const placed = [];

function intersects(a,b){
  return !(a.right<b.left || a.left>b.right || a.bottom<b.top || a.top>b.bottom);
}

students.forEach(name=>{
  const span = document.createElement("span");
  span.innerText = name;

  const size = Math.floor(Math.random()*14)+16;
  span.style.fontSize = size+"px";

  cloud.appendChild(span);

  const rect = span.getBoundingClientRect();
  const w = rect.width;
  const h = rect.height;

  for(let t=0;t<1500;t++){
    const angle = t*0.3;
    const r = 0.2*t;

    const x = cx + r*Math.cos(angle) - w/2;
    const y = cy + r*Math.sin(angle) - h/2;

    if(x<0 || y<0 || x+w>W || y+h>H) continue;

    const box = {left:x, top:y, right:x+w, bottom:y+h};

    let collide=false;
    for(const p of placed){
      if(intersects(box,p)){collide=true; break;}
    }

    if(!collide){
      span.style.left = x+"px";
      span.style.top = y+"px";
      placed.push(box);
      break;
    }
  }
});
</script>

---

<!-- ===================== -->
<!-- 💬 STUDENT WORK -->
<!-- ===================== -->

<h2 style="text-align:center; margin-top:3rem;">💬 Few Students Say What They Are Working On</h2>

<div id="student-grid" class="student-grid"></div>

<style>
.student-grid {
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
  gap:1.5rem;
  margin-top:2rem;
}

.student-card {
  background:#ffffff;
  border-radius:12px;
  padding:1rem;
  box-shadow:0 6px 14px rgba(0,0,0,0.06);
  border-left:4px solid #4f46e5;
  display:flex;
  gap:0.8rem;
  align-items:flex-start;
  transition: transform 0.2s ease;
}

.student-card:hover {
  transform: translateY(-4px);
}

.student-card img {
  width:60px;
  height:60px;
  border-radius:50%;
  object-fit:cover;
  flex-shrink:0;
}

.student-content h3 {
  margin:0;
  font-size:1rem;
}

.student-content p {
  font-size:0.9rem;
  color:#444;
  margin-top:0.3rem;
}
</style>

<script>
const studentData = [
  {
    name: "Aaditya Agarwal",
    img: "/assets/images/students/AadityaAgarwal.jpg",
    text: "Working on Kyber and Dilithium implementations with MOSIP, and exploring secure federated learning and zero-knowledge proofs."
  },
  {
    name: "Aadi Sharma",
    img: "/assets/images/students/AadiSharma.jpg",
    text: "Developing secure inference pipelines using Fully Homomorphic Encryption for medical AI systems using TenSEAL and PyTorch."
  },
  {
    name: "Aaditya Raj",
    img: "/assets/images/students/AADITYARAJ.jpg",
    text: "Building an AI-driven secure access system using YOLO and Deep SORT for real-time tracking and facial recognition."
  },
  {
    name: "Shreyansh Solanki",
    img: "/assets/images/students/Shreyansh.jpg",
    text: "Working on membership inference attacks and extending them to transformer models for privacy evaluation."
  },
  {
    name: "Drish Menghani",
    img: "/assets/images/students/Drish.jpg",
    text: "Exploring differential privacy-based defenses for transformer models and LLMs."
  },
  {
    name: "Dhanish Shetty",
    img: "/assets/images/students/DhanishShetty.jpg",
    text: "Studying privacy leakage and reconstruction attacks in deep learning and transformer architectures."
  },
  {
    name: "Garvita Gigras",
    img: "/assets/images/students/GarvitaGigras.jpg",
    text: "Building an AI system for automated question generation and evaluation with feedback."
  }
];

// 🔀 Shuffle function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle every load
shuffle(studentData);

const grid = document.getElementById("student-grid");

studentData.forEach(s => {
  const card = document.createElement("div");
  card.className = "student-card";

  card.innerHTML = `
    <img src="${s.img}" alt="${s.name}">
    <div class="student-content">
      <h3>${s.name}</h3>
      <p>${s.text}</p>
    </div>
  `;

  grid.appendChild(card);
});
</script>