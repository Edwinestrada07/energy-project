import React, { useState } from 'react';

interface CommentFormProps {
  isLoggedIn: boolean;
}

export default function CommentForm({ isLoggedIn }: CommentFormProps) {
  const [comment, setComment] = useState('');
  const maxLength = 500;

  if (!isLoggedIn) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Unete a la discusion</h3>
        <p className="text-gray-600 mb-4">Inicia Sesion y deja un comentario</p>
        <div className="space-x-4 inline-flex items-center self-center mx-auto">
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
            Inicia Sesion
          </button>
          <div className='px-1'>O</div>
          
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            Registrate
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="mb-8">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Share your thoughts..."
        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        rows={4}
        maxLength={maxLength}
      />
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm text-gray-500">
          {comment.length}/{maxLength} characters
        </span>
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
        >
          Post Comment
        </button>
      </div>
    </form>
  );
}