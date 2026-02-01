---
layout: default
title: Word Cloud
---

# ☁️ Word Cloud

This word cloud highlights the people who have contributed, collaborated, worked with, and shaped me. There are many more, actually - I must have missed.

---

<div id="word-cloud" style="
  max-width: 900px;
  margin: 2rem auto;
  text-align: center;
  line-height: 2.2;
"></div>

<script>
  const names = [
    "Harsh Kasyap",
    "Student A",
    "Student B",
    "Research Intern",
    "Collaborator",
    "IIT BHU",
    "Federated Learning",
    "Privacy",
    "Security",
    "GenAI",
    "FHE",
    "Trustworthy AI",
    "Biometrics",
    "Finance"
  ];

  const container = document.getElementById("word-cloud");

  names.forEach(name => {
    const span = document.createElement("span");

    // Random font size between 14px and 48px
    const size = Math.floor(Math.random() * 34) + 14;

    // Random color palette (soft, readable)
    const colors = ["#2563eb", "#7c3aed", "#059669", "#dc2626", "#ca8a04"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    span.textContent = name;
    span.style.fontSize = size + "px";
    span.style.color = color;
    span.style.margin = "0.4rem";
    span.style.display = "inline-block";
    span.style.fontWeight = "600";

    container.appendChild(span);
  });
</script>
