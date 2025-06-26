import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home5/About";
import Banner from "@/components/sections/home5/Banner";
import Services from "@/components/sections/home5/Services";
import Blog from "@/components/sections/home5/Blog";
import Work from "@/components/sections/home5/Work";
import Slidingtext from "@/components/sections/home5/Slidingtext";
import Project from "@/components/sections/home5/Project";
import Testimonial from "@/components/sections/home5/Testimonial";
import Team from "@/components/sections/home5/Team";
export default function Home() {
   return (
      <>
         <Layout headerStyle={4} footerStyle={4}>
            <Banner />
            <About />
            <Services />
            <Work />

            {/* <Slidingtext /> */}
            <Project />
            {/* <Testimonial />
            <Team />
            <Blog /> */}
         </Layout>
      </>
   );
}
