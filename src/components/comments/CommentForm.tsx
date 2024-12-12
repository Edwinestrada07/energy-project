import React, { useState,Dispatch, SetStateAction } from "react";
import apiService from "../../api/apiService";
import { Link } from "react-router-dom";

interface CommentFormProps {
  isLoggedIn: boolean;
  setNewComments : React.Dispatch<React.SetStateAction<any>>;
  newsId: number;
}

export default function CommentForm({ isLoggedIn, setNewComments, newsId }: CommentFormProps) {
  const [comment, setComment] = useState("");
  const maxLength = 500;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(comment);
      console.log(newsId);
      // const response = await apiService.loginUsuario(username, password);
      // localStorage.setItem('token', response.id)
      let userId = localStorage.getItem("token");
      if (userId) {
        console.log({ userId });
        const response = await apiService.insertComment(newsId, {
          body: comment,
          user_id: parseInt(userId),
        });
        console.log("antes de ejecutar newcomments")
        setTimeout(()=>{
          console.log("ejecutando.... newcomments")
          setNewComments(true);
        },1000)
        console.log("despues de ejecutar newcomments")
      }
      // hacer un then para llamar otravez todos los comments con el nuevo
      // .then(
      // )
    } catch (error) {
      console.error(error);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Unete a la discusion</h3>
        <p className="text-gray-600 mb-4">Inicia Sesion y deja un comentario</p>
        <div className="space-x-4 inline-flex items-center self-center mx-auto">
          <Link to="/login">
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700">
              Inicia Sesion
            </button>
          </Link>
          <div className="px-1">O</div>
          <Link to="/signup">
            <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              Registrate
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form className="mb-8" onSubmit={handleSubmit}>
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
