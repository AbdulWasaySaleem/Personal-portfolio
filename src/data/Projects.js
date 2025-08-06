import ardonyx from "../assets/ardonyx.png";
import karyawan from "../assets/karyawan.png";

// FoodieHub images
import foodieHub01 from "../assets/foodieHub/FoodieHub01.PNG";
import foodieHub02 from "../assets/foodieHub/FoodieHub02.PNG";
import foodieHub03 from "../assets/foodieHub/FoodieHub03.PNG";
import foodieHub04 from "../assets/foodieHub/FoodieHub04.PNG";

// SwiftBuy images
import swiftBuy01 from "../assets/swiftBuy/SwiftBuy01.PNG";
import swiftBuy02 from "../assets/swiftBuy/SwiftBuy02.PNG";
import swiftBuy03 from "../assets/swiftBuy/SwiftBuy03.PNG";
import swiftBuy04 from "../assets/swiftBuy/SwiftBuy04.PNG";
import swiftBuy05 from "../assets/swiftBuy/SwiftBuy05.PNG";
import swiftBuy06 from "../assets/swiftBuy/SwiftBuy06.PNG";

export const projects = [
  {
    id: 1,
    title: "Ardonyx",
    techStack: ["React.js", "antD", "Node.js", "MongoDB", "Express.js"],
    category: "Clothing Store",
    description:
      "Ardonyx is a design-forward, cutting-edge eCommerce platform built for a contemporary clothing brand. With a sleek interface, smooth animations, and responsive design, the website offers a seamless and visually engaging shopping experience. From curated collections to a minimalist product layout, Ardonyx reflects a strong focus on aesthetics and user experience — blending modern fashion with modern tech.",
    imgSrc: ardonyx,
    myRole: ["Backend Development", "API Integration"],
    link: "https://ardonyx-frontend.vercel.app/anime/attack-on-titan",
  },

  {
    id: 2,
    title: "The Karyawan",
    techStack: ["React.js", "Shadcn", "Tailwind", "Hono.js", "MongoDB", "S3 Storage"],
    category: "Publication Website",
    description:
      "Karyawan is a publication website where users can create accounts, log in, and publish articles. The site features a clean and modern design, with a focus on user experience. I was responsible for troubleshooting UI issues, optimizing the interface, and fixing visual bugs.",
    imgSrc: karyawan,
    myRole: [
      "Frontend Development",
      "Backend Development",
      "Project Management",
    ],
    link: "https://karyawan-v2.vercel.app/",
  },
  {
    id: 3,
    title: "FoodieHub",
    techStack: ["React.js", "Tailwind", "Node.js", "MongoDB"],
    category: "Restaurant Website (Practice Project)",
    description:
      "FoodieHub is a complete restaurant ordering system. Users can browse the menu and place orders, while admins manage orders, products, and categories through a responsive dashboard.",
    imgSrc: [foodieHub01, foodieHub02, foodieHub03, foodieHub04],
    myRole: ["Full Stack Development", "UI/UX Design", "API Integration"],
    link: "https://foodiehub.vercel.app",
  },
  {
    id: 4,
    title: "SwiftBuy",
    techStack: ["React.js", "Node.js", "MongoDB", "Tailwind", "Braintree"],
    category: "E-commerce Website (Practice Project)",
    description:
      "SwiftBuy is a modern e-commerce platform featuring a secure payment gateway, product filtering, related product suggestions, a fully working admin panel, and user dashboards. It’s optimized for a seamless shopping experience and efficient order management.",
    imgSrc: [
      swiftBuy01,
      swiftBuy02,
      swiftBuy03,
      swiftBuy04,
      swiftBuy05,
      swiftBuy06,
    ],
    myRole: [
      "Full Stack Development",
      "Payment Integration",
      "Admin Dashboard",
    ],
    link: "https://swiftbuy.vercel.app",
  },
];
