import ArticleHeader from "../components/article/ArticleHeader";
import ArticleContent from "../components/article/ArticleContent";
import CommentForm from "../components/comments/CommentForm";
import CommentList from "../components/comments/CommentList";

const mockComments = [
  {
    id: 1,
    user: {
      name: "Alex Thompson",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    content:
      "This is a very insightful article. The research presented here really puts things into perspective.",
    timestamp: "2 hours ago",
    likes: 15,
    replies: 3,
  },
  {
    id: 2,
    user: {
      name: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    content:
      "I appreciate how the article breaks down complex climate data into understandable terms.",
    timestamp: "5 hours ago",
    likes: 8,
    replies: 1,
  },
];
export default function NewsArticle() {
  return (
    <main>
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 py-8">
          <ArticleHeader
            title="Climate Crisis: New Research Shows Accelerating Impact"
            author="Dr. James Wilson"
            date="March 15, 2024"
            readingTime="8 min"
            category="Environment"
          />

          <ArticleContent />

          <hr className="my-12" />

          <CommentForm isLoggedIn={false} />
          <CommentList comments={mockComments} sortBy="newest" />
        </main>
      </div>
    </main>
  );
}
