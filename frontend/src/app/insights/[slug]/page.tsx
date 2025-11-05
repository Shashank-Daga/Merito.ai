import { notFound } from 'next/navigation'
import { getArticleById } from '@/lib/articles'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleById(slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-4xl px-8 py-16">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {article.title}
          </h1>
        </header>

        <div className="prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-pre:text-foreground">
          <MDXRemote source={article.content} />
        </div>
      </article>
    </div>
  )
}

export async function generateStaticParams() {
  // This would be used for static generation if needed
  // For now, we'll use dynamic rendering
  return []
}
