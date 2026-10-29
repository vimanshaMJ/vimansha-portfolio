'use client';

import { useEffect, useState } from 'react';

/** Returns the id of the section currently at the top of the viewport. */
export function useActiveSection(ids: string[], offset = 120) {
  const [active, setActive] = useState('');
  const key = ids.join(',');

  useEffect(() => {
    const sectionIds = key.split(',');
    const onScroll = () => {
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - offset) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [key, offset]);

  return active;
}
