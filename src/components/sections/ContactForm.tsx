'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { site } from '@/data/site';

type Status = 'idle' | 'sending' | 'sent' | 'error';

// Web3Forms access keys are designed to be public (they only allow sending to your own inbox).
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) {
      setStatus('error');
      setError('Please fill in your name, a valid email and a message.');
      return;
    }
    // Honeypot: bots fill hidden fields, humans don't.
    if (data.get('botcheck')) return;

    // No key configured (e.g. local dev): fall back to the visitor's mail app.
    if (!ACCESS_KEY) {
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio message from ${name}`,
          from_name: 'Portfolio contact form',
          name,
          email,
          message,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || 'Request failed');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
      setError(`Couldn't send your message. Please email me directly at ${site.email}.`);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5 rounded-2xl border bg-background/70 p-6 backdrop-blur sm:p-7"
    >
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />
      <div className="space-y-2">
        <Label htmlFor="contact-name">Your Name</Label>
        <Input id="contact-name" name="name" placeholder="Jane Smith" autoComplete="name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-email">Email Address</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          placeholder="jane@example.com"
          autoComplete="email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="Tell me about your project or opportunity…"
        />
      </div>
      <Button type="submit" size="lg" variant="brand" className="w-full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Sent ✓' : 'Send Message →'}
      </Button>
      <p role="status" aria-live="polite" className="min-h-5 text-sm">
        {status === 'sent' && (
          <span className="text-emerald-500">Thanks! Your message is on its way — I&apos;ll reply soon.</span>
        )}
        {status === 'error' && <span className="text-red-500">{error}</span>}
      </p>
    </form>
  );
}
