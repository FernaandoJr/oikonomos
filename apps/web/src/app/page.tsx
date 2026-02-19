'use client';
import { CTASection } from '@/components/hero-dithering-card';
import { useTranslation } from '@repo/i18n';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center">
      <CTASection />
    </div>
  );
}
