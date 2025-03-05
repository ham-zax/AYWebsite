import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import CTA from "@/components/sections/cta";
import WaitlistForm from "@/components/sections/waitlist-form";
import { defaultMeta } from "@/lib/metadata";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{defaultMeta.title}</title>
        <meta name="description" content={defaultMeta.description} />
        <meta name="keywords" content={defaultMeta.keywords} />
      </Helmet>
      
      <div className="pt-16">
        <Hero />
        <Benefits />
        <WaitlistForm />
        <CTA />
      </div>
    </>
  );
}
