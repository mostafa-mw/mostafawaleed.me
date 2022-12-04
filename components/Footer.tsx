import Link from 'next/link';
import { Rss } from 'components/icons';

export default function Footer() {
  return (
    <footer
      className="[ site-foot ] [ region ] [ text-center ]"
      role="contentinfo"
    >
      <div className="wrapper flow">
        <div className="[ site-foot__navigation ] [ margin-inline-auto ]">
          <nav aria-label="secondary" tabIndex={-1}>
            <ul
              className="[ nav ] [ fs-300 weight-medium measure-long margin-inline-auto gap-200 ] [ flex-wrap ]"
              role="list"
            >
              <li>
                <Link href="/blog/code-of-conduct">Code of Conduct</Link>
              </li>
              <li>
                <Link href="/blog/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/contact">contact</Link>
              </li>
              <li>
                <a href="https://codepen.io/mostafawaleed3">codePen</a>
              </li>
              <li>
                <a href="https://twitter.com/mostafa85341305">twitter</a>
              </li>
              <li>
                <Link href="/feed.xml" className="flex-row">
                  RSS
                  <Rss className="margin-inline-start-100" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="fs-300 weight-bold margin-inline-auto">
          © {new Date().getFullYear()} MW | Frontend developer.
        </p>
      </div>
    </footer>
  );
}
