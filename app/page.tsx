import type { Metadata } from 'next';
import { metadata } from './metadata';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { WhyAddresses } from '@/components/WhyAddresses';
import { Features } from '@/components/Features';
import { ReachFlow } from '@/components/ReachFlow';
import { PairwisePrivacy } from '@/components/PairwisePrivacy';
import { AppointmentFlow } from '@/components/AppointmentFlow';
import { CapabilityConstellation } from '@/components/CapabilityConstellation';
import { AnyNetwork } from '@/components/AnyNetwork';
import { Comparison } from '@/components/Comparison';
import { FinalCta } from '@/components/FinalCta';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyAddresses />
        <Features />
        <ReachFlow />
        <PairwisePrivacy />
        <AppointmentFlow />
        <AnyNetwork />
        <Comparison />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

export const dynamic = 'force-static';
