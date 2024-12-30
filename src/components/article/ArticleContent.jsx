import React from 'react';

export default function ArticleContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <img
        src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
        alt="Featured image"
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />
      
      <p className="lead">
        Climate change continues to be one of the most pressing issues of our time,
        with new research suggesting more urgent action is needed to prevent catastrophic outcomes.
      </p>

      <h2>The Growing Impact</h2>
      <p>
        Recent studies have shown that the rate of global warming is accelerating faster
        than previously predicted. Scientists are now warning that we may have less time
        than initially thought to prevent irreversible damage to our planet's ecosystems.
      </p>

      <blockquote>
        "We're at a critical juncture in human history. The decisions we make today
        will have lasting impacts for generations to come." - Dr. Sarah Johnson,
        Climate Research Institute
      </blockquote>

      <h2>Solutions on the Horizon</h2>
      <p>
        Despite the challenges, there are promising developments in renewable energy
        technology and sustainable practices that could help mitigate the worst effects
        of climate change.
      </p>
    </article>
  );
}