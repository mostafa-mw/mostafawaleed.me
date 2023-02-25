import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import Container from 'components/Container';
import Time from 'components/Time';
import { mdxToHtml } from 'lib/mdx';
import { MDXRemote } from 'next-mdx-remote';
import { PostType } from 'lib/types';
import components from 'components/MDXComponents';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function PostPage({
  frontmatter: { title, description, date, banner, alt },
  content,
  readingTime
}: PostType) {
  const [view, setView] = useState<number>();
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      fetch(`https://api.countapi.xyz/hit/${slug}/visits/?amount=0`)
        .then((res) => res.json())
        .then((res) => {
          return setView(res.value);
        });
    }
  }, [slug]);

  return (
    <Container
      title={`${title} - Mostafa Waleed`}
      description={description}
      date={date}
      image={banner}
      imageAlt={alt}
      type="article"
    >
      <article className="[ wrapper flow ] [ region ]">
        <header className="headline" data-align="center">
          <h1>{title}</h1>
          <div className="measure-short margin-inline-auto">
            <div
              className="[ cluster ] [ margin-block-start-500 ]"
              data-align="between"
            >
              <Time time={date} />
              <div className="flex-row">
                <span className="margin-inline-end-100">{readingTime}</span>
                {` • `}
                <span className="margin-inline-start-100">
                  {view ? `${view} views` : 'No views'}
                </span>
              </div>
            </div>
          </div>
        </header>
        <div className="[ post ] [ flow ]">
          <hr />
          <MDXRemote
            {...content}
            components={{
              ...components
            }}
          />
        </div>
      </article>
    </Container>
  );
}

export async function getStaticPaths() {
  const files = readdirSync(join(process.cwd(), 'content'));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.mdx', '') }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = readFileSync(
    join(process.cwd(), 'content', `${slug}.mdx`),
    'utf-8'
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const { html, readingTime } = await mdxToHtml(content);
  return {
    props: JSON.parse(
      JSON.stringify({ frontmatter, slug, content: html, readingTime })
    )
  };
}
