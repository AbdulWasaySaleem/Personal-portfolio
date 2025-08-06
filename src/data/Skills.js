import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiAntdesign,
  SiJson,
  SiReactquery,
  SiShadcnui,
  SiExpress,
  SiSequelize,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiInsomnia,
  SiTwilio,
  SiJsonwebtokens,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";
import { DiDatabase, DiVisualstudio } from "react-icons/di";

export const skills = [
  { title: "ReactJS", icon: FaReact },
  { title: "JavaScript (ES6+)", icon: FaJsSquare },
  { title: "HTML5", icon: FaHtml5 },
  { title: "CSS3", icon: FaCss3Alt },
  { title: "Next.js", icon: SiNextdotjs },
  { title: "Redux or Zustand", icon: SiRedux },
  { title: "Tailwind CSS", icon: SiTailwindcss },
  { title: "Ant Design", icon: SiAntdesign },
  { title: "JSON & API Integration", icon: SiJson },
  { title: "React Query", icon: SiReactquery },
  { title: "Shadcn UI", icon: SiShadcnui },

  { title: "Node.js", icon: FaNodeJs },
  { title: "Express.js", icon: SiExpress },
  { title: "JWT Auth", icon: SiJsonwebtokens },
  { title: "RESTful APIs", icon: DiDatabase },
  { title: "Sequelize ORM", icon: SiSequelize },
  { title: "MySQL", icon: SiMysql },
  { title: "MongoDB", icon: SiMongodb },

  { title: "Git & GitHub", icon: FaGithub },
  { title: "Postman", icon: SiPostman },
  { title: "VS Code", icon: DiVisualstudio },
  { title: "Insomnia", icon: SiInsomnia },
  { title: "Twilio Voice API", icon: SiTwilio },
];
