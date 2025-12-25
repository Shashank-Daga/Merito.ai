import { notFound } from 'next/navigation';
import { getAllSuccessStories, getSuccessStoryById } from '@/lib/success-stories';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const stories = getAllSuccessStories();

  return stories.map((story) => ({
    slug: story.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const story = getSuccessStoryById(slug);

  if (!story) {
    return {
      title: 'Story Not Found',
    };
  }

  return {
    title: `${story.title} | Merito Success Stories`,
  };
}

export default async function SuccessStoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = getSuccessStoryById(slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-8 py-16">
      <article className="prose prose-lg max-w-none dark:prose-invert">
        <div className="mb-8 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
          <Image
            src={story.image}
            alt={story.title}
            width={300}
            height={150}
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-4xl font-bold mb-8 text-foreground">{story.title}</h1>

        <div className="article-content">
          <MDXRemote source={story.content} />
        </div>
      </article>
    </div>
  );
}
