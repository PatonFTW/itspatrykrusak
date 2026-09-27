import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FitPulse — Your Personal Gym Blueprint',
  description:
    'A science-backed Nutrition & Workout Blueprint that eliminates gym anxiety and guides you to your goal physique.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#07090e] text-slate-100">
        <Navigation setupComplete={true} />
        <div className="flex-1 w-full">{children}</div>
      </body>
    </html>
  );
}
