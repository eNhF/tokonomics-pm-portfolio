import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tokonomics · AI Technical Product Case Study',
  description:
    'An evidence-led AI technical product management case study covering strategy, product design, evaluation, trust, and launch readiness.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
