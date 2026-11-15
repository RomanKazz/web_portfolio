import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const email = 'roman.kazachkov1@gmail.com';

export function ContactSection() {
  const [copyState, setCopyState] = useState('idle');
  const resetTimer = useRef(null);
  useEffect(() => () => clearTimeout(resetTimer.current), []);

  async function copyEmail() {
    clearTimeout(resetTimer.current);
    setCopyState('copying');
    try {
      await navigator.clipboard.writeText(email);
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }
    resetTimer.current = setTimeout(() => setCopyState('idle'), 4000);
  }

  return (
    <section id="contact" className="contact-section">
      <div className="shell">
        <h2>Контакты</h2>
        <p className="contact-invitation">Есть идея или вопрос? Напиши мне.</p>
        <div className="contact-actions">
          <Button asChild className="contact-telegram">
            <a href="https://t.me/loqieee" target="_blank" rel="noreferrer">
              <Send size={18} /> Написать в Telegram <ArrowUpRight size={17} />
            </a>
          </Button>
          <a className="contact-secondary" href="https://github.com/RomanKazz" target="_blank" rel="noreferrer">
            <Github size={18} /> GitHub <ArrowUpRight size={14} />
          </a>
          <div className="contact-email-group">
            <div className="contact-email-row">
              <a className="contact-secondary" href={`mailto:${email}`}><Mail size={18} /><span>{email}</span></a>
              <button className="copy-email" type="button" onClick={copyEmail} disabled={copyState === 'copying'} aria-label="Скопировать email" title="Скопировать email">
                {copyState === 'copied' ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
            <span className="copy-feedback" role="status" aria-live="polite">
              {copyState === 'copied' ? 'Скопировано' : copyState === 'error' ? 'Не удалось скопировать. Выдели адрес вручную.' : ''}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
