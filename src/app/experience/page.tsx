import { Metadata } from 'next';
import { ExperienceSection } from '@/components/ExperienceSection';

export const metadata: Metadata = {
  title: 'Gustavo Henrique | Experience',
  description: "Explore Gustavo Henrique's professional experience, detailed using the STAR method.",
};

export default function ExperiencePage() {
  return (
    <main>
      <ExperienceSection />
    </main>
  );
}

