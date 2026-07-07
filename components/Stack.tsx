import { SectionLabel } from "@/components/SectionLabel";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiDocker,
  SiGit,
  SiGooglecloud,
  SiHuggingface,
  SiJupyter,
  SiKeras,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiRoboflow,
  SiScikitlearn,
  SiTensorflow,
  SiYolo
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

type StackItem = {
  label: string;
  icon: IconType;
  color: string;
};

const stackGroups: Array<{ group: string; items: StackItem[] }> = [
  {
    group: "Languages",
    items: [
      { label: "Python", icon: SiPython, color: "#3776ab" },
      { label: "SQL", icon: SiMysql, color: "#00758f" },
      { label: "Bash", icon: SiGit, color: "#f05032" }
    ]
  },
  {
    group: "ML / DL",
    items: [
      { label: "PyTorch", icon: SiPytorch, color: "#ee4c2c" },
      { label: "TensorFlow", icon: SiTensorflow, color: "#ff6f00" },
      { label: "Keras", icon: SiKeras, color: "#d00000" },
      { label: "Scikit-learn", icon: SiScikitlearn, color: "#f7931e" },
      { label: "OpenCV", icon: SiOpencv, color: "#5c3ee8" },
      { label: "Pandas", icon: SiPandas, color: "#150458" },
      { label: "NumPy", icon: SiNumpy, color: "#4dabcf" }
    ]
  },
  {
    group: "AI / LLM",
    items: [
      { label: "LangChain", icon: SiLangchain, color: "#1c3c3c" },
      { label: "Hugging Face", icon: SiHuggingface, color: "#ffd21e" },
      { label: "RAG Pipelines", icon: SiJupyter, color: "#f37626" },
      { label: "Vector Databases", icon: SiPostgresql, color: "#4169e1" }
    ]
  },
  {
    group: "Vision",
    items: [
      { label: "YOLO", icon: SiYolo, color: "#00ffff" },
      { label: "Roboflow", icon: SiRoboflow, color: "#6706ce" },
      { label: "Computer Vision", icon: SiOpencv, color: "#5c3ee8" }
    ]
  },
  {
    group: "Cloud",
    items: [
      { label: "AWS", icon: FaAws, color: "#ff9900" },
      { label: "Azure ML", icon: VscAzure, color: "#0078d4" },
      { label: "Google Cloud", icon: SiGooglecloud, color: "#4285f4" },
      { label: "Docker", icon: SiDocker, color: "#2496ed" }
    ]
  },
  {
    group: "Database",
    items: [
      { label: "MySQL", icon: SiMysql, color: "#00758f" },
      { label: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
      { label: "MongoDB", icon: SiMongodb, color: "#47a248" }
    ]
  }
];

export function Stack() {
  return (
    <section id="stack" className="section stack-section">
      <SectionLabel>My Stack</SectionLabel>

      <div className="skill-groups">
        {stackGroups.map((skillGroup) => (
          <div className="skill-row logo-skill-row" key={skillGroup.group}>
            <h3>{skillGroup.group}</h3>
            <div className="logo-grid">
              {skillGroup.items.map(({ label, icon: Icon, color }) => (
                <span className="logo-skill" key={label}>
                  <Icon size={36} color={color} aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
