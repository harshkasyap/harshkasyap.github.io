---
layout: default
title: Word Cloud
---

# ☁️ Word Cloud

This word cloud highlights the people who have contributed, collaborated, worked with, and shaped me. There are many more, actually - I must have missed.

---

<div id="cloud-wrapper">
  <div id="word-cloud"></div>
</div>

<style>
#cloud-wrapper {
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 450px;
  margin: 2rem auto;
  border-radius: 1rem;
  background: #f9fafb;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  overflow: hidden;
}

#word-cloud span {
  position: absolute;
  font-weight: 600;
  white-space: nowrap;
  cursor: default;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

#word-cloud span:hover {
  transform: scale(1.15);
  opacity: 0.9;
}
</style>

<script>
const words = [
  "Harsh Kasyap",
  "Federated Learning",
  "Trustworthy AI",
  "Privacy",
  "Security",
  "GenAI",
  "FHE",
  "Biometrics",
  "Finance",
  "Students",
  "Collaborators",
  "IIT BHU",
  "Research",
  "Software",
  "Benchmarks",
  "Datasets"
];

const cloud = document.getElementById("word-cloud");
const width = cloud.parentElement.offsetWidth;
const height = cloud.parentElement.offsetHeight;

const colors = ["#2563eb", "#7c3aed", "#059669", "#dc2626", "#ca8a04"];

words.forEach(word => {
  const span = document.createElement("span");

  const size = Math.floor(Math.random() * 28) + 16;
  const x = Math.random() * (width - 120);
  const y = Math.random() * (height - 40);
  const color = colors[Math.floor(Math.random() * colors.length)];

  span.textContent = word;
  span.style.fontSize = size + "px";
  span.style.left = x + "px";
  span.style.top = y + "px";
  span.style.color = color;

  cloud.appendChild(span);
});
</script>
