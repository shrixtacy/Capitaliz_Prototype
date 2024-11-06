import Hero from '../components/Hero';
import FeaturesSection from '../components/Features';
import FeaturedStartups from '../components/FeaturedStartups';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <FeaturedStartups />
      <Testimonials />
      <CTA />
    </main>
  );
}