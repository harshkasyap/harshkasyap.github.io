---
layout: default
title: Outputs
---

# 🧩 Research (and Engineering) Outputs

This page highlights **software systems, tools, benchmarks, and prototypes** developed by us, including students and collaborators. These outputs reflect hands-on research, engineering effort, and real deliverables.

---

<!-- ===== OUTPUT CARD START ===== -->
<div style="
  border-radius: 1rem;
  overflow:hidden;
  margin:1.5rem 0;
  box-shadow:0 6px 14px rgba(0,0,0,0.08);
  border:1px solid #e5e7eb;
">

  <div style="
    background: linear-gradient(135deg, #0ea5e9, #2563eb);
    padding:1rem 1.2rem;
    color:white;
  ">
    <h2 style="margin:0; font-size:1.35rem;">Security Benchmarking Framework & Empirical Analysis</h2>
  </div>

  <div style="padding:1.1rem 1.2rem; background:#ffffff;">

    <p style="margin:0.4rem 0;">
      <strong>🧑‍🎓 Team:</strong> Piyush Jaiswal, Aaditya Pratap, Shreyansh Saraswati, Harsh Kashyap, Somanath Tripathy
    </p>

    <p style="margin:0.4rem 0;">
      <strong>🛠 Output:</strong> Datasets / Benchmarking Framework
    </p>

    <p style="margin:0.4rem 0;">
      <strong>📌 Description:</strong>
      In this project, we systematically investigate prompt injection and jailbreak attacks against various open-source large language models. The research develops foundation vulnerability signatures across various model families and parameter scales, assesses light-weight damages at inference times, and studies the failures under realistic deployment factors. We collected adversarial prompts from community red-teaming efforts and worked manually on a few variants to study the robustness of our models.
    </p>

    <p style="margin:0.7rem 0;">
      To support open-source security research, we are releasing the following artifacts generated during our study. All links are public.
    </p>

    <p style="margin:0.4rem 0;">
      <strong>🔧 Technologies:</strong>
      Large Language Models Python PyTorch Hugging Face Transformers DeepSeek Phi Mistral LLAMA Qwen Gemma
    </p>

    <p>
    1. Injection Results 
    Link: https://drive.google.com/file/d/1D6Diz0rTgT8OV5rMp0EOZTvzhwDrQo30/view
    How to use: This repository contains the raw output logs and classification data from our attacks. You can download the results to verify our findings, analyze the "vulnerable" classifications, or perform your own statistical analysis on model failure rates. 
    
    2. Jailbreak Prompt 
    Link: https://drive.google.com/drive/folders/1xc3ypxgYJowmxjHj_Bdq945DiAa0Y4RI 
    How to use: This document contains the results of the best performing prompts listed in the Internal Prompt dataset across the various LLM models we tested. It also contains a summary of the results from our analysis. Researchers can use these prompts to benchmark the safety alignment of models by testing whether the model refuses or complies with the input. 
    
    3. Internal Prompts 
    Link: https://drive.google.com/file/d/1R4hzuzy4gEYJeykjytzfkXRCfmaMvxj9/view 
    How to use: This section contains some of the highest-performing system instructions and meta-prompts we collected from various sources, in which we further refined and engineered some for optimal results. You can adapt these prompts to create new variants of adversarial inputs.
    </p>

    <a href="https://github.com/your-repo-link"
       target="_blank"
       style="
         display:inline-block;
         padding:0.55rem 1rem;
         background:#2563eb;
         color:white;
         font-weight:600;
         border-radius:0.5rem;
         text-decoration:none;
       ">
      View Software →
    </a>

  </div>
</div>
<!-- ===== OUTPUT CARD END ===== -->

---

<!-- ===== OUTPUT CARD END ===== -->

---
