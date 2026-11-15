import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, Check, CircleAlert, Copy, Github, Mail, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const email = 'roman.kazachkov1@gmail.com';

export function ContactSection() {
  const [copyState, setCopyState] = useState('idle');
  const [toast, setToast] = useState({ open: false, kind: 'success' });
  const resetTimer = useRef(null);
  useEffect(() => () => clearTimeout(resetTimer.current), []);

  function dismissToast() {
    clearTimeout(resetTimer.current);
    setToast(current => ({ ...current, open: false }));
    setCopyState('idle');
  }

  async function copyEmail() {
    clearTimeout(resetTimer.current);
    setCopyState('copying');
    try {
      await navigator.clipboard.writeText(email);
      setCopyState('copied');
      setToast({ open: true, kind: 'success' });
    } catch {
      setCopyState('error');
      setToast({ open: true, kind: 'error' });
    }
    resetTimer.current = setTimeout(dismissToast, 4000);
  }

  return (
    <>
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
          </div>
        </div>
      </div>
    </section>
    {createPortal(
      <div className="copy-toast" data-open={toast.open} data-kind={toast.kind} inert={!toast.open} aria-hidden={!toast.open}>
        <span className="copy-toast-icon" aria-hidden="true">
          {toast.kind === 'success' ? <Check size={19} strokeWidth={2.5} /> : <CircleAlert size={20} />}
        </span>
        <div className="copy-toast-message">
          <strong>{toast.kind === 'success' ? 'Почта скопирована' : 'Не удалось скопировать'}</strong>
          <span>{toast.kind === 'success' ? email : 'Выдели адрес и скопируй вручную.'}</span>
        </div>
        <button type="button" className="copy-toast-close" aria-label="Закрыть уведомление" onClick={dismissToast}><X size={16} /></button>
      </div>,
      document.body,
    )}
    <span className="sr-only" role="status" aria-live="polite" aria-atomic="true">
      {toast.open ? toast.kind === 'success' ? 'Почта скопирована' : 'Не удалось скопировать. Выдели адрес и скопируй вручную.' : ''}
    </span>
    </>
  );
}
