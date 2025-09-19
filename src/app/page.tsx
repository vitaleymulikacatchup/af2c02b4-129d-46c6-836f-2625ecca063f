"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'futuristicAndOutOfBox',
      colorTemplate: 2,
      textAnimation: 'slide',
    }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline 
          logoSrc="/images/logo.svg"
          navItems={[
            { name: 'hero', id: 'hero' },
            { name: 'about', id: 'about' },
            { name: 'how to buy', id: 'how-to-buy' },
            { name: 'tokenomics', id: 'tokenomics' },
            { name: 'faq', id: 'faq' },
            { name: 'footer', id: 'footer' }
          ]}
          buttonText="Start Free Trial"
          buttonClassName="bg-blue-500 hover:bg-blue-700"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <VoidHero 
          title="Welcome to Xeven Solutions"
          description="Innovative solutions designed to empower your future."
          tagLabel="Your SaaS Partner"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout 
          description="At Xeven Solutions, we focus on delivering cutting-edge technology that provides unparalleled value to our clients, helping them to thrive in the digital age."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D 
          variant="reveal"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics 
          title="Our Tokenomics"
          description="Transparent and strong economic model to support growth and sustainability."
          kpiItems={[
            { value: '10M', description: 'Total Supply', longDescription: 'Amount of tokens minted', icon: 'Star' },
            { value: '20%', description: 'Tax', longDescription: 'On each transaction', icon: 'Shield' },
            { value: '50%', description: 'Liquidity', longDescription: 'Allocated for market stability', icon: 'DollarSign' },
          ]}
        />
      </div>
      <div id="faq" data-section="faq">
        <CentralFAQ 
          items={[
            { title: 'What is Xeven Solutions?', content: 'Xeven Solutions is a SaaS provider offering innovative technology and solutions.' },
            { title: 'How to get started?', content: 'Sign up for a free trial to explore our services.' },
            { title: 'Can I contact support?', content: 'Yes, customer support is available 24/7.' },
            { title: 'What payment methods are accepted?', content: 'We accept all major credit cards and PayPal.' },
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis 
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Solutions Logo"
          logoText="Xeven Solutions"
          columns={[
            { items: [{ label: 'Home', onClick: () => {} }, { label: 'About Us', onClick: () => {} }] },
            { items: [{ label: 'Services', onClick: () => {} }, { label: 'Contact', onClick: () => {} }] },
            { items: [{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }] },
          ]}
          className="bg-gray-100"
        />
      </div>
    </SiteThemeProvider>
  );
}
