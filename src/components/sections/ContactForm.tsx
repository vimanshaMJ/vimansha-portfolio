'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!sent) return;
    const t = setTimeout(() => setSent(false), 3000);
    return () => clearTimeout(t);
  }, [sent]);

  // TODO: wire this up to a real backend/email service. Currently a visual stub.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5 rounded-2xl border bg-background/70 p-6 backdrop-blur sm:p-7"
    >
      <div className="space-y-2">
        <Label htmlFor="contact-name">Your Name</Label>
        <Input id="contact-name" placeholder="Jane Smith" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-email">Email Address</Label>
        <Input id="contact-email" type="email" placeholder="jane@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea id="contact-message" placeholder="Tell me about your project or opportunity…" />
      </div>
      <Button type="submit" size="lg" variant="brand" className="w-full">
        {sent ? 'Message Sent ✓' : 'Send Message →'}
      </Button>
    </form>
  );
}
