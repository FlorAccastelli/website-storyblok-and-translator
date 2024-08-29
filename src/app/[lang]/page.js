import Navbar from "../../components/Navbar";
import HeroSection from "../../components/Hero";
import ServicesSection from "../../components/Services";
import Footer from "../../components/Footer";

const getLandingPageData = async (lang) => {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const URL = `https://api-us.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}&language=${lang}`;
  const req = await fetch(URL, { cache: "no-store" });

  const storyData = await req.json();
  const { nav_section, hero_section, services_section, footer_section } = storyData.story.content;

  return {
    nav_section: nav_section[0],
    hero_section: hero_section[0],
    services_section: services_section[0],
    footer_section: footer_section[0]
  }
}

export default async function Home({ params: { lang } }) {
  const storyData = await getLandingPageData(lang);

  return (
    <>
    <Navbar data={storyData.nav_section} />
    <HeroSection data={storyData.hero_section}/>
    <ServicesSection data={storyData.services_section}/>
    <Footer data={storyData.footer_section} />
    </>
  );
}
