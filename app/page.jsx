import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home6/About";
import Banner from "@/components/sections/home6/Banner";
import Services from "@/components/sections/home6/Services";
import Work from "@/components/sections/home6/Work";
import Project from "@/components/sections/home6/Showcase";
import Teak from "@/components/sections/home6/Teak";
import Balau from "@/components/sections/home6/Balau";
import Merbau from "@/components/sections/home6/Merbau";
import Whychoose from "@/components/sections/home6/Whychoose";
import Contact from "@/components/sections/home6/Contact";
export default function Home() {
   return (
      <>
         <Layout headerStyle={4} footerStyle={4}>
            <Banner />
            <About />
            <Services />
            <Teak />
            <Balau />
            <Merbau />
            {/* <Work />
            <Project /> */}
            <Whychoose />
            <Contact />
         </Layout>
      </>
   );
}
