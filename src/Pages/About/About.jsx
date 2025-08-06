import Layout from "../../Components/Layout/Layout";
import Brief from "./Brief/Brief";
import Services from "./Services/Services";

const About = () => {
  return (
    <Layout pageTitle="About Me">
      <Brief />
      <Services />
    </Layout>
  );
};

export default About;
