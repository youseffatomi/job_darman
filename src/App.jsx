import Layout from "@/components/layout";
import FormSection from "@/components/sections/Form";
import Landing from "@/components/sections/Landing";
import Contact from "@/components/sections/Contact";

export default function App() {
  return (
    <Layout>
      <Landing />
      <FormSection />
      <Contact />
    </Layout>
  );
}
