import React from 'react';
import { Clock, Calendar, Share2 } from 'lucide-react';

interface ArticleHeaderProps {
  title: string;
  author: string;
  date: string;
  readingTime: string;
  category: string;
}

export default function ArticleHeader({ title, author, date, readingTime, category }: ArticleHeaderProps) {
  return (
    <div className="mb-8">
      <div className="text-sm text-emerald-600 font-semibold mb-2">{category}</div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
      
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt={author}
            className="h-8 w-8 rounded-full mr-2"
          />
          <span>{author}</span>
        </div>
        
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{readingTime} read</span>
        </div>
        
        <button className="ml-auto flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200">
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}