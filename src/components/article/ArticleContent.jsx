import React from 'react';

export default function ArticleContent({ content }) {
  return (
    <article className="prose prose-lg max-w-none">
      <img
        // src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
        src="https://random-image-pepebigotes.vercel.app/api/random-image"
        alt="Featured image"
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />
      <p>
        {content}
      </p>
    </article>
  );
}