import { HonorsAndAwardsSection } from '@/components/HonorsAndAwardsSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Honors & Awards | Gustavo Henrique',
  description: 'A collection of honors and awards received by Gustavo Henrique.',
}

export default function HonorsAndAwardsPage() {
  return (
    <main className="main-container">
      <HonorsAndAwardsSection />
    </main>
  )
}
