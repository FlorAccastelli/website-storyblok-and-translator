import Navbar from "./_components/Navbar";
import HeroSection from "./_components/Hero";
import ServicesSection from "./_components/Services";
import Footer from "./_components/Footer";

const getLandingPageData = async () => {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const URL = `https://api-us.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}`;
  let req = await fetch(URL, { cach: "no-store" });

  const storyData = await req.json();
  const { nav_section } = storyData.story.content;

  return {
    nav_section: nav_section[0]
  }
}

export default async function Home() {
  const storyData = await getLandingPageData();

  return (
    <>
    <Navbar data={storyData.nav_section} />
    <HeroSection />
    <ServicesSection />
    <Footer />
    </>
  );
}
