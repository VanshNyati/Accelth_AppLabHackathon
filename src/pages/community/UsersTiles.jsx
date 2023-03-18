import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import SearchForm from '../../partials/actions/SearchForm';
import UsersTilesCard from '../../partials/community/UsersTilesCard';
import PaginationNumeric from '../../components/PaginationNumeric';

import Image01 from '../../images/user-64-01.jpg';
import Image02 from '../../images/user-64-02.jpg';
import Image03 from '../../images/user-64-03.jpg';
import Image04 from '../../images/user-64-04.jpg';
import Image05 from '../../images/user-64-05.jpg';
import Image06 from '../../images/user-64-06.jpg';
import Image07 from '../../images/user-64-07.jpg';
import Image08 from '../../images/user-64-08.jpg';
import Image09 from '../../images/user-64-09.jpg';
import Image10 from '../../images/user-64-10.jpg';
import Image11 from '../../images/user-64-11.jpg';
import Image12 from '../../images/user-64-12.jpg';
import Image13 from '../../images/satyakamdev.jpg';
import Image14 from '../../images/zubersir.jpg';
import Image15 from '../../images/suchetamaam.jpg';
import Image16 from '../../images/anilrana.jpg';
import '../../partials/community/main.css';


function UsersTiles() {

  const items = [
    {
      id: 0,
      name: 'Arushi Gandhi',
      image: Image07,
      link: 'https://www.linkedin.com/in/arushi-gandhi/overlay/contact-info/',
      location: 'IC AB-4',
      company: 'Fundinc',
      content: 'Aspiring Entrepreneur, Driven Generalist, Full Stack Web Developer, Debator, Always up for a chat.',
     
    },
    
    {
      id: 1,
      name: 'Sakshat Gandhi',
      image: Image02,
      link: 'https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/overlay/contact-info/',
      location: "IC AB-4",
      company: 'Baylink',
      content: 'Problem Solver, Innovator, Full Stack Developer, Brings Technical Expertise to every aspect of his work.',
    },
    {
      id: 2,
      name: 'Gaurav Samant',
      image: Image01,
      link: 'https://www.linkedin.com/in/gaurav-samant-665a5a174/overlay/contact-info/',
      location: 'Udupi',
      company: 'Peryton Tech',
      content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer, Team Player and a PHP Lover.',
    },
    {
      id: 3,
      name: 'Anirudh Arun',
      image: Image04,
      link: 'https://www.linkedin.com/in/anirudh-arun-2823b3204/overlay/contact-info/',
      location: 'Bangalore',
      company: 'Formi',
      content: 'Brings together great minds in the entrepreneurial ecosystem, providing peers with the resources to succeed',
    },
    {
      id: 4,
      name: 'Deepesh Garg',
      image: Image05,
      link: 'https://www.linkedin.com/in/deepesh-garg-4a14b7104/overlay/contact-info/',
      location: 'IC AB-4',
      company: 'Fundinc',
      content: 'Machine Learning Engineer (MLOps), Full Stack Developer, passion for coding and problem solving',
    },
    {
      id: 5,
      name: 'Dhruva Goyal',
      image: Image06,
      link: 'https://www.linkedin.com/in/dhruvagoyal/overlay/contact-info/',
      location: 'Bangalore', 
      // location: 'BugBase',
      company: 'BugBase',
      content: 'entrepreneur, full-stack developer & OSCP, OSWE and CEH-certified cybersecurity engineer.',
    },
    {
      id: 6,
      name: 'Saransh Agarwal',
      image: Image11,
      link: 'https://www.linkedin.com/in/saransh-agarwal-1809601b5/overlay/contact-info/',
      location: 'IC AB-4',
      company: '225.in',
      content: 'Product Developer, Design Enthusiast, Athlete, Meetup Organizer, Problem Solver, Programming Enthusiast.',
    },
    {
      id: 7,
      name: 'Brian Halligan',
      image: Image08,
      link: 'https://www.linkedin.com/in/aditluhadia/overlay/contact-info/',
      location: 'IC AB-4',
      company: 'Allmity',
      content: 'Flutter Developer, Design Enthusiast, ML/AI, Organizer, PHP Lover, Initiator, Team Leader, Manager',
    },
    {
      id: 8,
      name: 'Prof. Satyakam Dev',
      image: Image13,
      link: 'https://www.linkedin.com/in/satyakam-dev/overlay/contact-info/',
      location: 'AB-1',
      company: 'Dept. of EEE',
      content: 'Control Systems Design, Communication, Electrical Engineering, Microsoft PowerPoint, and University Teaching',
    },
    {
      id: 9,
      name: 'Dr. Md. Zuber',
      image: Image14,
      link: 'https://www.linkedin.com/in/mohammad-zuber-8421aaa5/overlay/contact-info/',
      location: 'AB-4',
      company: 'Innovation Center',
      content: 'Fitness Enthusiast, Management, Asst. Director of Innovation, Lecturer, Team Player, Creative, Supportive',
    },
    {
      id: 10,
      name: 'Prof. Sucheta Kolekar',
      image: Image15,
      link: 'https://www.linkedin.com/in/sucheta-kolekar-74920415/overlay/contact-info/',
      location: 'AB-5',
      company: 'Dept. of ICT',
      content: 'PhD in Adaptive E-learning, teaching, Cloud Computing, Software Engineering, Adaptive E-learning.',
    },
    {
      id: 11,
      name: 'Cdr. Dr. Anil Rana',
      image: Image16,
      link: 'https://www.linkedin.com/in/commander-dr-anil-rana-in-retd/overlay/contact-info/',
      location: 'AB-1',
      company: 'MAHE-MIT',
      content: 'A passionate humanitarian and a tireless advocate for education and its role for the betterment of communities.',
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gradient">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */} 
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-indigo-500 font-bold">MAHE - Avinya</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Search form */}
                <SearchForm />
                {/* Add member button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Add Member</span>
                </button>
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {
                items.map(item => {
                  return (
                    <UsersTilesCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      link={item.link}
                      location={item.location}
                      company={item.company}
                      content={item.content}
                    />
                  )
                })
              }
            </div>
{/* 
            Pagination
            <div className="mt-8">
              <PaginationNumeric />
            </div> */}

          </div>
        </main>

      </div>
      
    </div>
  );
}

export default UsersTiles;