import React from 'react';
import EditorSidebar from '../../components/editor/EditorSidebar';
import ReviewCard from '../../components/editor/ReviewCard';

const ReviewPosts = () => {
  return (
    <div className="flex bg-[#121212] min-h-screen text-white">
      <EditorSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-[#E5B85C] mb-6">Review Posts</h1>
        <ReviewCard />
      </div>
    </div>
  );
};
export default ReviewPosts;