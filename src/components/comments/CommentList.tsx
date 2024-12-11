import React from 'react';
import { ThumbsUp, MessageCircle, MoreVertical } from 'lucide-react';

interface Comment {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  replies: number;
}

interface CommentListProps {
  comments: Comment[];
  sortBy: 'newest' | 'oldest' | 'mostLiked';
}

export default function CommentList({ comments, sortBy }: CommentListProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Comments ({comments.length})</h2>
        <select
          className="px-3 py-2 border rounded-md"
          value={sortBy}
          onChange={(e) => console.log(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="mostLiked">Most Liked</option>
        </select>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <img
              src={comment.user.avatar}
              alt={comment.user.name}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{comment.user.name}</h3>
                  <p className="text-sm text-gray-500">{comment.timestamp}</p>
                </div>
                <button className="p-1 hover:bg-gray-100 rounded-full">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-2 text-gray-700">{comment.content}</p>
              <div className="mt-2 flex items-center gap-4">
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{comment.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                  <MessageCircle className="h-4 w-4" />
                  <span>{comment.replies}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}