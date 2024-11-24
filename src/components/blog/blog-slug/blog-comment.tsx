"use client";

import { useState } from "react";
import { FaTrash } from "react-icons/fa"; // Import the trash icon

const CommentsSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  // Function to add a new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prev) => [...prev, newComment]);
      setNewComment(""); // Clear the input field
    }
  };

  // Function to delete a comment
  const handleDeleteComment = (index: number) => {
    setComments((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-[#9ED946] p-2 sm:p-6 rounded-lg my-10  max-w-[800px] mx-2 sm:mx-6 md:mx-auto">
      <h3 className="text-2xl font-semibold text-black mb-4">Comments</h3>

      {/* Comments List */}
      <div className="space-y-4 mb-6">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="bg-[#90C641] text-black p-4 rounded-md flex justify-between items-center"
            >
              <span>{comment}</span>
              <button
                onClick={() => handleDeleteComment(index)}
                className="text-red-600 hover:text-red-800"
                aria-label="Delete Comment"
              >
                <FaTrash size={18} /> {/* Trash icon */}
              </button>
            </div>
          ))
        ) : (
          <p className="text-black">No comments yet. Be the first to comment!</p>
        )}
      </div>

      {/* Add Comment Form */}
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 px-4 py-2 rounded-md bg-[#90C641] border-2 border-[#375010] text-[#375010] focus:bg-[#aecf33] placeholder-[#414f22]"
        />
        <button
          onClick={handleAddComment}
          className="px-6 py-2 bg-[#90C641] border-2 border-[#375010] text-black font-semibold rounded-md hover:bg-[#aecf33] shadow-md"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default CommentsSection;
