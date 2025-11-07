import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Article {
  id: string;
  title: string;
  image: string;
  date?: string;
  category?: string;
  content: string;
}

const articlesDirectory = path.join(process.cwd(), 'content/articles');

// Server-side only functions
export function getAllArticles(): Article[] {
  // Ensure the directory exists
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  // Get all MDX files
  const fileNames = fs.readdirSync(articlesDirectory);

  const articles = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const id = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Parse frontmatter
      const { data, content } = matter(fileContents);

      return {
        id,
        title: data.title || 'Untitled',
        image: data.image || '/Insights/Articles/default.png',
        date: data.date,
        category: data.category,
        content,
      };
    })
    .sort((a, b) => {
      const aNum = parseInt(a.id, 10);
      const bNum = parseInt(b.id, 10);
      return aNum - bNum;
    });

  return articles;
}

export function getArticleById(id: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${id}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id,
      title: data.title || 'Untitled',
      image: data.image || '/Insights/Articles/default.png',
      date: data.date,
      category: data.category,
      content,
    };
  } catch (error) {
    console.error(`Error reading article ${id}:`, error);
    return null;
  }
}

// Helper to get articles without content (lighter for client components)
export function getAllArticlesMetadata(): Omit<Article, 'content'>[] {
  const articles = getAllArticles();
  return articles.map(({ content, ...metadata }) => metadata);
}
