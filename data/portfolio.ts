import {
  Bot,
  BrainCircuit,
  Cloud,
  Database,
  Eye,
  FileText,
  Github,
  Linkedin,
  Mail,
  Mic,
  Network,
  ScanFace,
  ServerCog,
  Sparkles,
  Workflow
} from "lucide-react";

export const profile = {
  name: "M. Adnan Arshad",
  role: "Senior AI/ML Engineer",
  headline: "Generative AI, Computer Vision, LLM & RAG Systems",
  email: "adnanarshad0127@gmail.com",
  phone: "+92-318-0407361",
  linkedin: "https://linkedin.com/in/adnan0127",
  github: "https://github.com/adnanarshad0127",
  location: "Dubai, UAE / Remote",
  availability: "Available for senior AI/ML and GenAI opportunities",
  summary:
    "Senior AI/ML Engineer with 5+ years of experience delivering end-to-end machine learning and generative AI solutions across computer vision, NLP, and conversational AI. I build production-grade LLM chatbots, RAG pipelines, object detection systems, image captioning models, and custom diffusion workflows.",
  philosophy:
    "I believe practical AI should move from messy real-world data to measurable business impact. My work connects data collection, annotation, model training, evaluation, deployment, and iteration so teams can ship intelligent products with confidence.",
  about:
    "I have led model development for 20+ client engagements, including legal document intelligence, identity verification, weld seam detection, image captioning, and voice-based AI agents. I work across PyTorch, TensorFlow, YOLO, UNet, transformers, vector databases, and cloud MLOps, using AI-assisted development tools to prototype faster while keeping code quality high."
};

export const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "20+", label: "Client Engagements" },
  { value: "95%", label: "Model Accuracy Delivered" }
];

export const socials = [
  { label: "Github", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail }
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "SQL", "Bash"]
  },
  {
    group: "ML / DL",
    items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "OpenCV", "Pandas", "NumPy"]
  },
  {
    group: "Generative AI",
    items: ["LLM Fine-Tuning", "Prompt Engineering", "RAG Pipelines", "LangChain", "Vector Databases", "Diffusion Models", "Chatbots"]
  },
  {
    group: "Computer Vision",
    items: ["YOLO v4-v8", "UNet", "ResNet50", "MTCNN", "OCR", "Document Intelligence", "Object Detection", "Segmentation"]
  },
  {
    group: "Cloud / MLOps",
    items: ["AWS", "Azure ML", "Google Cloud AI", "Docker", "SageMaker", "CI/CD", "Model Deployment"]
  },
  {
    group: "Methods",
    items: ["A/B Testing", "Hyperparameter Tuning", "Transfer Learning", "EDA", "Data Augmentation", "Feature Engineering"]
  }
];

export const experiences = [
  {
    company: "MetaLabs Tech",
    title: "Senior AI/ML Engineer",
    period: "Dec 2025 - Present",
    location: "Dubai, UAE (Remote)",
    details: [
      "Design and deliver advanced AI solutions spanning Generative AI, LLMs, intelligent agents, and computer vision.",
      "Build LLM-powered conversational agents and RAG pipelines with vector databases for context-aware internal tools.",
      "Deploy and monitor scalable ML systems using Python AI frameworks across production cloud environments."
    ]
  },
  {
    company: "Hazen Technologies Inc",
    title: "AI Engineer",
    period: "Jun 2024 - Feb 2026",
    location: "Lahore, Pakistan (On-site)",
    details: [
      "Built an OCR-based AI pipeline for confidential legal and insurance documents.",
      "Reduced document review time from roughly 40 minutes to about 1 minute per case.",
      "Owned the ML lifecycle from data preparation through model training, evaluation, and deployment."
    ]
  },
  {
    company: "Machine Learning 1 Limited",
    title: "Associate Data Scientist",
    period: "Aug 2022 - Jun 2024",
    location: "On-site",
    details: [
      "Delivered analysis and machine learning projects for 20+ clients from scoping through deployment.",
      "Specialized in YOLO object detection, custom annotations, diffusion models, and client-specific chatbots.",
      "Deployed trained models to Azure, AWS, and Google Cloud for production use."
    ]
  },
  {
    company: "Upwork",
    title: "Machine Learning Engineer",
    period: "Jul 2020 - Jun 2022",
    location: "Freelance",
    details: [
      "Delivered machine learning engineering projects for international clients.",
      "Managed concurrent engagements from requirements gathering to final delivery."
    ]
  }
];

export const projects = [
  {
    title: "AI Calling Agent",
    client: "MetaLabs Tech",
    tags: ["LLM", "Speech-to-Text", "Text-to-Speech"],
    icon: Mic,
    previewImage: "/projects/ai-calling-agent.png",
    description:
      "Voice-based AI calling agent for hospitality workflows, covering reservations, FAQs, front-desk triage, and human escalation."
  },
  {
    title: "GedLawyers Case Intelligence",
    client: "Hazen Technologies Inc",
    tags: ["OCR", "Legal AI", "Document Intelligence"],
    icon: FileText,
    href: "https://www.gedlawyers.com/",
    previewImage: "/projects/ged-lawyers.png",
    description:
      "AI model that reads client PDF documents and identifies grounds for legal action against health insurance companies, reducing review time from 40 minutes to 1 minute."
  },
  {
    title: "Shufti Pro Identity Verification",
    client: "Machine Learning 1 Limited",
    tags: ["KYC", "Computer Vision", "Biometrics"],
    icon: ScanFace,
    href: "https://shuftipro.com/identity-verification/",
    previewImage: "/projects/shufti-pro.png",
    description:
      "Computer vision contributions for document authentication and biometric verification workflows in a global KYC/AML platform."
  },
  {
    title: "Caption IT",
    client: "Image Captioning System",
    tags: ["ResNet50", "Transformer", "Public API"],
    icon: Eye,
    description:
      "Image captioning pipeline trained on Flickr8k, combining ResNet50 feature extraction with a transformer decoder."
  },
  {
    title: "Weld Seam Detection",
    client: "Team Project",
    tags: ["UNet", "Video ML", "95% Accuracy"],
    icon: Workflow,
    description:
      "UNet-based model for weld seam detection in client video, with frame extraction, annotation, augmentation, and deployed inference."
  },
  {
    title: "RAG Knowledge Assistant",
    client: "Planned Build",
    tags: ["LangChain", "Vector DB", "Citations"],
    icon: Network,
    description:
      "Planned retrieval-augmented assistant over custom documents with source citations and production-ready response evaluation."
  }
];

export const stackHighlights = [
  { label: "Generative AI", icon: Sparkles },
  { label: "LLM Agents", icon: Bot },
  { label: "Computer Vision", icon: Eye },
  { label: "Deep Learning", icon: BrainCircuit },
  { label: "Cloud MLOps", icon: Cloud },
  { label: "Data Systems", icon: Database },
  { label: "Model Deployment", icon: ServerCog }
];

export const education = {
  degree: "Bachelor of Science, Computer Science",
  school: "COMSATS University, Sahiwal Campus",
  year: "2019"
};

export const certifications = [
  "Deep Learning Specialization - DeepLearning.AI",
  "Machine Learning - Andrew Ng, Coursera",
  "Introduction to Computer Vision - Udacity",
  "Generative AI - DeepMind, Coursera",
  "LLM Custom Model Training - DeepLearning.AI"
];
