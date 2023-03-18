import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import ForumLeftContent from '../../partials/community/ForumLeftContent';
import ForumEntries from '../../partials/community/ForumEntries';
import ForumRightContent from '../../partials/community/ForumRightContent';

import Avatar from '../../images/user-40-02.jpg';
import Blogsmain from '../../partials/community/Blogsmain';
import BlogCard from '../../partials/community/BlogCard';
import '../../partials/community/main.css';

function Blogs() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className='bg-gradient'>
          <Blogsmain />
          <BlogCard />
        </main>

      </div>
    </div>
  );
}

export default Blogs;