import Navbar from "./_components/Navbar";
import HeroSection from "./_components/Hero";
import ServicesSection from "./_components/Services";
import Footer from "./_components/Footer";

const getLandingPageData = async () => {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const URL = `https://api-us.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}`;
  let req = await fetch(URL, { cache: "no-store" });

  const storyData = await req.json();
  const { nav_section, hero_section, services_section } = storyData.story.content;

  return {
    nav_section: nav_section[0],
    hero_section: hero_section[0],
    services_section: services_section[0]
  }
}

export default async function Home() {
  const storyData = await getLandingPageData();

  return (
    <>
    <Navbar data={storyData.nav_section} />
    <HeroSection data={storyData.hero_section}/>
    <ServicesSection data={storyData.services_section}/>
    <Footer />
    </>
  );
}
