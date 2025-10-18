'use client';
import { motion } from 'framer-motion';
import { scaleIn } from '@/lib/motion';
import { Plane, Building2, Car } from 'lucide-react';
import { useTranslations } from 'next-intl';

const services = [
  {
    icon: Plane,
    titleKey: 'airport_title',
    descKey: 'airport_desc',
  },
  {
    icon: Building2,
    titleKey: 'hotel_title',
    descKey: 'hotel_desc',
  },
  {
    icon: Car,
    titleKey: 'chauffeur_title',
    descKey: 'chauffeur_desc',
  },
];

export default function Services() {
  const t = useTranslations('services');
  return (
    <section id="services" className="bg-ink-800 py-20 text-center">
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
          {services.map(({ icon: Icon, titleKey, descKey }, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="card p-8 bg-ink-900/40 border border-sand-500/20 hover:border-sand-500/50 transition-all hover:scale-[1.02]"
            >
              <Icon className="mx-auto mb-4 text-sand-500 h-10 w-10" />
              <h3 className="text-xl font-semibold text-sand-50 mb-2">{t(`items.${titleKey}`)}</h3>
              <p className="text-sand-200/80 text-sm max-w-xs mx-auto">{t(`items.${descKey}`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}