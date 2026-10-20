'use client';

/* eslint-disable @next/next/no-html-link-for-pages -- Document navigation preserves canonical URLs in the static export. */

import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/framework/', label: 'The framework' },
  { href: '/examples/', label: 'People and examples' },
  { href: '/profiles/', label: 'Work profiles' },
  { href: '/blog/', label: 'AI at work' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/book/', label: 'The book' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const currentPath = pathname ? `${pathname.replace(/\/+$/, '')}/` : null;

  function menuLinks(mobile = false) {
    return menuItems.map(({ href, label }) => {
      const exactMatch = currentPath === href;
      const sectionMatch = href !== '/' && currentPath?.startsWith(href);

      // Document navigation keeps static-export payload URLs out of the address bar.
      return <a
        key={href}
        href={href}
        className={!mobile && href === '/book/' ? 'nav-cta' : undefined}
        aria-current={exactMatch ? 'page' : sectionMatch ? 'location' : undefined}
        onClick={mobile ? (event) => event.currentTarget.closest('details')?.removeAttribute('open') : undefined}
      >{label}</a>;
    });
  }

  return <header className="site-header">
    <div className="container header-inner">
      <a className="brand" href="/" aria-label="ADAPTOR home"><span className="brand-mark">A</span><strong>ADAPTOR</strong></a>
      <nav className="main-nav" aria-label="Main navigation">{menuLinks()}</nav>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">{menuLinks(true)}</nav>
      </details>
    </div>
  </header>;
}
