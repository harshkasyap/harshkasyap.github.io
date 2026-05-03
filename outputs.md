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
      <strong>🧑‍🎓 Team:</strong> Piyush Jaiswal, Aaditya Pratap, Shreyansh Saraswati, Harsh Kasyap, Somanath Tripathy
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

    <div style="margin-top:1rem;">

      <div style="margin-bottom:1rem;">
        <strong>1. Injection Results</strong><br>
        <a href="https://drive.google.com/file/d/1D6Diz0rTgT8OV5rMp0EOZTvzhwDrQo30/view" target="_blank"
          style="color:#2563eb; font-weight:600; text-decoration:none;">
          🔗 View Dataset
        </a>
        <p style="margin:0.3rem 0;">
          Raw output logs and classification data from attacks. Useful for verifying results and analyzing model failure rates.
        </p>
      </div>

      <div style="margin-bottom:1rem;">
        <strong>2. Jailbreak Prompts</strong><br>
        <a href="https://drive.google.com/drive/folders/1xc3ypxgYJowmxjHj_Bdq945DiAa0Y4RI" target="_blank"
          style="color:#2563eb; font-weight:600; text-decoration:none;">
          🔗 Open Prompt Collection
        </a>
        <p style="margin:0.3rem 0;">
          Best-performing jailbreak prompts across multiple LLMs. Can be used to benchmark alignment and safety.
        </p>
      </div>

      <div style="margin-bottom:1rem;">
        <strong>3. Internal Prompts</strong><br>
        <a href="https://drive.google.com/file/d/1R4hzuzy4gEYJeykjytzfkXRCfmaMvxj9/view" target="_blank"
          style="color:#2563eb; font-weight:600; text-decoration:none;">
          🔗 View Prompts
        </a>
        <p style="margin:0.3rem 0;">
          Curated system instructions and meta-prompts for generating adversarial inputs and testing robustness.
        </p>
      </div>

      <div style="margin-bottom:1rem;">
        <strong>4. Research Paper</strong><br>
        <a href="https://arxiv.org/abs/2602.22242" target="_blank"
          style="color:#2563eb; font-weight:600; text-decoration:none;">
          📄 View Paper
        </a>
        <p style="margin:0.3rem 0;">
          This paper presents a comprehensive study of prompt injection and jailbreak attacks on large language models, including benchmarking methodologies, empirical analysis, and insights into model vulnerabilities under realistic deployment scenarios.
        </p>
      </div>

    </div>

    <!--a href="https://github.com/your-repo-link"
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
    </a-->

  </div>
</div>
<!-- ===== OUTPUT CARD END ===== -->

---
