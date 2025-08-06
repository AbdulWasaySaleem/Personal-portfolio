import Layout from "../../Components/Layout/Layout";
import MapBox from "./MapBox/MapBox";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <MapBox />
      <ContactForm />
    </Layout>
  );
};

export default Contact;
