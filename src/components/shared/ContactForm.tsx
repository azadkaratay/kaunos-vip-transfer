'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const t = useTranslations('contactForm');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch (err) {
      setStatus('error');
    }
  }

  const inputClass = 'input bg-ink-800/30 backdrop-blur-sm border-ink-700 placeholder-sand-300/70 focus:border-sand-500 focus:ring-sand-500';

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
      <div className="text-left">
        <label className="block text-xs text-sand-400 mb-1">{t('name_label')}</label>
        <input name="name" placeholder={t('name_placeholder')} required className={inputClass} />
      </div>
      <div className="text-left">
        <label className="block text-xs text-sand-400 mb-1">{t('email_label')}</label>
        <input type="email" name="email" placeholder={t('email_placeholder')} required className={inputClass} />
      </div>
      <div className="text-left">
        <label className="block text-xs text-sand-400 mb-1">{t('phone_label')}</label>
        <input name="phone" placeholder={t('phone_placeholder')} required className={inputClass} />
      </div>
      <div className="text-left">
        <label className="block text-xs text-sand-400 mb-1">{t('destination_label')}</label>
        <input name="destination" placeholder={t('destination_placeholder')} required className={inputClass} />
      </div>
      <div className="text-left">
        <label className="block text-xs text-sand-400 mb-1">{t('date_label')}</label>
        <input type="date" name="date" className={inputClass} />
      </div>
      <div className="md:col-span-2 text-left">
        <label className="block text-xs text-sand-400 mb-1">{t('note_label')}</label>
        <textarea name="note" placeholder={t('note_placeholder')} rows={3} className={inputClass}></textarea>
      </div>

      <div className="md:col-span-2 mt-2">
        <button type="submit" className="btn-primary w-full md:w-auto">
          {status === 'loading' ? t('sending') : t('submit')}
        </button>
      </div>

      {status === 'success' && (
        <p className="md:col-span-2 text-green-400 text-sm">{t('success')}</p>
      )}
      {status === 'error' && (
        <p className="md:col-span-2 text-red-400 text-sm">{t('error')}</p>
      )}
    </form>
  );
}