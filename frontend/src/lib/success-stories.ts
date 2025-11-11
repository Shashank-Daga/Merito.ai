import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const successStoriesDirectory = path.join(process.cwd(), 'content/success-stories');

export interface SuccessStory {
  id: string;
  title: string;
  image: string;
  category: string;
  content: string;
}

// Server-side only functions
export function getAllSuccessStories(): SuccessStory[] {
  // Ensure directory exists
  if (!fs.existsSync(successStoriesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(successStoriesDirectory);
  const allStoriesData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const id = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(successStoriesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        id,
        title: matterResult.data.title || 'Untitled',
        image: matterResult.data.image || '/images/default-story.png',
        category: matterResult.data.category || 'General',
        content: matterResult.content,
      };
    });

  return allStoriesData.sort((a, b) => parseInt(a.id) - parseInt(b.id));
}

export function getSuccessStoryById(id: string): SuccessStory | null {
  try {
    const fullPath = path.join(successStoriesDirectory, `${id}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title || 'Untitled',
      image: matterResult.data.image || '/images/default-story.png',
      category: matterResult.data.category || 'General',
      content: matterResult.content,
    };
  } catch (error) {
    console.error(`Error reading success story ${id}:`, error);
    return null;
  }
}

// Helper to get stories without content (lighter for client components)
export function getAllSuccessStoriesMetadata(): Omit<SuccessStory, 'content'>[] {
  const stories = getAllSuccessStories();
  return stories.map(({ content: _, ...metadata }) => metadata);
}
