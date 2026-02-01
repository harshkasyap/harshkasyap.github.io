---
layout: default
title: Word Cloud
---

# ☁️ Acknowledgement

This word cloud highlights the people who have contributed, collaborated, worked with, and shaped me. There are many more, actually - I must have missed. Also, I am looking for a cleaner code to create this - your help appreciated again!

---

<div id="cloud-wrapper">
  <div id="word-cloud"></div>
</div>

<style>
#cloud-wrapper {
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 480px;
  margin: 2.5rem auto;
  border-radius: 50%;
  background: radial-gradient(circle at center, #ffffff 0%, #f3f4f6 70%);
  box-shadow: 0 8px 22px rgba(0,0,0,0.08);
  overflow: hidden;
}

#word-cloud span {
  position: absolute;
  font-weight: 600;
  white-space: nowrap;
  user-select: none;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

#word-cloud span:hover {
  transform: scale(1.2);
  opacity: 0.95;
}
</style>

<script>
const words = [
  "Harsh Kasyap",
  "Students",
  "Collaborators",
  "Federated Learning",
  "Trustworthy AI",
  "Privacy",
  "Security",
  "GenAI",
  "FHE",
  "Biometrics",
  "Finance",
  "Cryptography",
  "Software",
  "Benchmarks",
  "Datasets",
  "Research"
];

const cloud = document.getElementById("word-cloud");
const wrapper = cloud.parentElement;

const centerX = wrapper.offsetWidth / 2;
const centerY = wrapper.offsetHeight / 2;
const maxRadius = Math.min(centerX, centerY) - 40;

const colors = ["#2563eb", "#7c3aed", "#059669", "#dc2626", "#ca8a04"];

words.forEach((word, index) => {
  const span = document.createElement("span");

  // Radius-biased distribution (more words near center)
  const r = Math.pow(Math.random(), 0.6) * maxRadius;
  const theta = Math.random() * 2 * Math.PI;

  const x = centerX + r * Math.cos(theta);
  const y = centerY + r * Math.sin(theta);

  // Font size inversely proportional to distance from center
  const size = Math.max(16, 48 - (r / maxRadius) * 28);

  const color = colors[Math.floor(Math.random() * colors.length)];

  span.textContent = word;
  span.style.fontSize = size + "px";
  span.style.left = x + "px";
  span.style.top = y + "px";
  span.style.color = color;
  span.style.transform = "translate(-50%, -50%)";

  cloud.appendChild(span);
});
</script>
