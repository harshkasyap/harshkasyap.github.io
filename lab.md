---
layout: default
title: Lab
---

# 🧪 My Research Group

This page highlights the amazing students I work with — their energy, curiosity, and ideas shape everything we build together.

---

<!-- ===================== -->
<!-- 👨‍🏫 MENTORS -->
<!-- ===================== -->

<div style="display:flex; justify-content:center; gap:3rem; flex-wrap:wrap; margin-top:2rem;">

  <div style="text-align:center;">
    <img src="/assets/images/profile.JPG" style="width:140px; height:140px; border-radius:50%; object-fit:cover;">
    <h3 style="margin:0.5rem 0 0;">Harsh Kasyap</h3>
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

<h2 style="text-align:center; margin-top:3rem;">👩‍🎓 Students</h2>

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
  "Suryansh","Aadi Sharma","Aaditya Raj"
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

<h2 style="text-align:center; margin-top:3rem;">💬 What Students Are Working On</h2>

<div class="student-grid">

  <div class="student-card">
    <h3>Aaditya Agarwal</h3>
    <p>Working on Kyber and Dilithium implementations with MOSIP, and exploring secure federated learning and zero-knowledge proofs.</p>
  </div>

  <div class="student-card">
    <h3>Aadi Sharma</h3>
    <p>Developing secure inference pipelines using Fully Homomorphic Encryption for medical AI systems using TenSEAL and PyTorch.</p>
  </div>

  <div class="student-card">
    <h3>Aaditya Raj</h3>
    <p>Building an AI-driven secure access system using YOLO and Deep SORT for real-time tracking and facial recognition.</p>
  </div>

  <div class="student-card">
    <h3>Shreyansh Solanki</h3>
    <p>Studying membership inference attacks and extending them to transformer models for privacy risk evaluation.</p>
  </div>

  <div class="student-card">
    <h3>Drish Menghani</h3>
    <p>Working on differential privacy-based defenses for transformer models and LLMs.</p>
  </div>

  <div class="student-card">
    <h3>Dhanish Shetty</h3>
    <p>Exploring privacy leakage and reconstruction attacks in deep learning and transformer architectures.</p>
  </div>

  <div class="student-card">
    <h3>Garvita Gigras</h3>
    <p>Building an AI system for automated question generation and evaluation with feedback.</p>
  </div>

</div>

<style>
.student-grid {
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
  gap:1.5rem;
  margin-top:2rem;
}

.student-card {
  background:#ffffff;
  border-radius:10px;
  padding:1rem;
  box-shadow:0 4px 10px rgba(0,0,0,0.05);
  border-left:4px solid #4f46e5;
}

.student-card h3 {
  margin:0 0 0.5rem 0;
}

.student-card p {
  font-size:0.95rem;
  color:#444;
}
</style>