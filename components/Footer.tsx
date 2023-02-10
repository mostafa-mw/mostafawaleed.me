/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import { Rss } from 'components/icons';
import { Github } from 'components/icons';

export default function Footer() {
  return (
    <footer className="[ site-foot ] [ region ]" role="contentinfo">
      <div className="wrapper">
        <nav
          className="[ site-foot__navigation ] [ flex-wrap ]"
          aria-label="secondary"
          tabIndex={-1}
        >
          <ul
            className="[ nav ] [ fs-200 weight-medium gap-600 capitalize ] [ flex-wrap ]"
            role="list"
          >
            <li>
              <strong>© 2022 – {new Date().getFullYear()}</strong>
              <Link href="/">Mostafa Waleed</Link>
            </li>
            <li>
              <strong>contact</strong>
              <Link href="/contact">contact</Link>
            </li>
            <li>
              <strong>social</strong>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/mostafa-waleed-b06034217/"
                >
                  linkedin
                </a>{' '}
                {' / '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/MostafaAmr206"
                >
                  twitter
                </a>
              </p>
            </li>
          </ul>
          <div className="[ margin-block-start-100 ] [ flex-row ]">
            <a href="https://github.com/Mostafa-MW" className="flex-row">
              <Github />
            </a>
            <a href="/feed.xml" className="flex-row">
              <Rss className="margin-inline-start-100" />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
