'use client';

import { useEffect, useState } from 'react';

export function RotatingText({ words }: { words: string[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <span key={i} className="text-gradient inline-block animate-word">
      {words[i]}
    </span>
  );
}
