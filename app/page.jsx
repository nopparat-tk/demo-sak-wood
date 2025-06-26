import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home5/About";
import Banner from "@/components/sections/home5/Banner";
import Services from "@/components/sections/home5/Services";
import Work from "@/components/sections/home5/Work";
import Project from "@/components/sections/home5/Project";
export default function Home() {
   return (
      <>
         <Layout headerStyle={4} footerStyle={4}>
            <Banner />
            <About />
            <Services />
            <Work />
            <Project />
         </Layout>
      </>
   );
}
