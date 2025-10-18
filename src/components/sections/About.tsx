'use client';
import { motion } from 'framer-motion';
import { scaleIn } from '@/lib/motion';
import { Shield, Clock, Car } from 'lucide-react';
import { useTranslations } from 'next-intl';

const features = [
  {
    icon: Clock,
    titleKey: 'availability_title',
    descKey: 'availability_desc',
  },
  {
    icon: Shield,
    titleKey: 'meet_title',
    descKey: 'meet_desc',
  },
  {
    icon: Car,
    titleKey: 'luxury_title',
    descKey: 'luxury_desc',
  },
];

export default function About() {
  const t = useTranslations('about');
  return (
    <section id="about" className="bg-ink-900 py-20 text-center">
      <div className="container-soft">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={scaleIn}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-12 text-sand-50"
        >
          {t('title')}
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map(({ icon: Icon, titleKey, descKey }, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="card p-8 bg-ink-900/40 border border-sand-500/20 hover:border-sand-500/50 transition-all hover:scale-[1.02]"
            >
              <Icon className="mx-auto mb-4 text-sand-500 h-10 w-10" />
              <h3 className="text-xl font-semibold text-sand-50 mb-2">{t(`features.${titleKey}`)}</h3>
              <p className="text-sand-200/80 text-sm max-w-xs mx-auto">{t(`features.${descKey}`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}