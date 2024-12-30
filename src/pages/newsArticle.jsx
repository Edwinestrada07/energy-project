import ArticleHeader from "../components/article/ArticleHeader";
import ArticleContent from "../components/article/ArticleContent";
import CommentForm from "../components/comments/CommentForm";
import CommentList from "../components/comments/CommentList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiService from "../api/apiService";

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
  const [oneNews, setOneNews] = useState({});
  const [logged, setLogged] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComments, setNewComments] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    let checkIsLogged = localStorage.getItem("token");
    if (checkIsLogged) {
      setLogged(true);
    }
    async function fetchNews() {
      let idToInt = parseInt(id);
      let getANews = await apiService.getNewById(idToInt);
      const isoToDate = new Date(getANews.datePublish);
      const beautifyTime = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(isoToDate);
      console.log(beautifyTime);
      getANews = { ...getANews, datePublish: beautifyTime };
      setOneNews(getANews);
    }
    fetchNews();

    async function fetchCommentsNews() {
      let idToInt = parseInt(id);
      let getComments = await apiService.getAllCommentsByNewsId(idToInt);
      console.log(getComments);
      let cleanUpComments = getComments.map((comment, i) => {
        return {
          id: comment.id,
          user: {
            name: comment.user.username,
            avatar:"https://random-image-pepebigotes.vercel.app/api/random-image",
              // "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
          content:comment.body,
          // timestamp: `${Math.floor(Math.random()*)} hours ago`,
        };
    });
      setComments(cleanUpComments);
    }
    fetchCommentsNews();
    setNewComments(false);
  },[newComments]);
  return (
    <main>
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 py-8">
          <ArticleHeader
            title={oneNews.title}
            author={oneNews.author}
            date={oneNews.datePublish}
            readingTime={`${Math.floor(Math.random() * 5)} min`}
            category="Environment"
          />

          <ArticleContent content={oneNews.content} />

          <hr className="my-12" />

          <CommentForm isLoggedIn={logged} setNewComments={setNewComments} newsId={parseInt(id)} />
          <CommentList comments={comments} sortBy="newest" />
        </main>
      </div>
    </main>
  );
}
