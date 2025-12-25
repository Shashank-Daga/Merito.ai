// src/components/sections/articles-client.tsx
"use client";

import { useState } from "react";
import { Articles } from "./articles";

interface ArticleMetadata {
  id: string;
  title: string;
  image: string;
}

export function ArticlesClient({
  allArticles,
}: {
  allArticles: ArticleMetadata[];
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleArticles = allArticles.slice(0, visibleCount);

  return (
    <>
      <Articles articles={visibleArticles} />
      {visibleCount < allArticles.length && (
        <div className="text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="text-white bg-accent/90 hover:bg-[#004250] transition-colors px-8 py-3 rounded-lg font-medium"
          >
            More Articles
          </button>
        </div>
      )}
    </>
  );
}
