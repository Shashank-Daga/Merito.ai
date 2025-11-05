import { notFound } from 'next/navigation';
import { getAllArticles, getArticleById } from '@/lib/articles';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const articles = getAllArticles();

    return articles.map((article) => ({
        slug: article.id,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const article = getArticleById(slug);

    if (!article) {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: `${article.title} | Merito Insights`,
        description: article.excerpt,
    };
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = getArticleById(slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-4xl px-8 py-16">
            <article className="prose prose-lg max-w-none dark:prose-invert">
                <h1 className="text-4xl font-bold mb-4 text-foreground">{article.title}</h1>

                <div className="mb-8">
                    <Image
                        src={article.image}
                        alt={article.title}
                        width={800}
                        height={400}
                        className="w-full h-full object-cover rounded-lg"
                        priority
                    />
                </div>

                <div className="mb-6">
                    {article.category && (
                        <span className="text-sm font-medium text-accent-foreground bg-accent px-3 py-1 rounded-full">
                            {article.category}
                        </span>
                    )}
                </div>

                {/* <div className="flex items-center gap-4 text-gray-900 dark:text-gray-400 mb-8 pb-8 border-b" /> */}

                <div className="article-content">
                    <MDXRemote source={article.content} />
                </div>
            </article>
        </div>
    );
}
