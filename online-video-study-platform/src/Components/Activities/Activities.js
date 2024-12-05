import React from 'react';
import './Activities.css';

const activities = [
  {
    id: 1,
    title: 'Interactive Exercises',
    description: 'Engage with interactive exercises to enhance your understanding.',
    image: 'https://via.placeholder.com/300x200',
    link: '/interactive-exercises'
  },
  {
    id: 2,
    title: 'Workshops and Meetups',
    description: 'Join workshops and live meetups to gain more insights.',
    image: 'https://via.placeholder.com/300x200',
    link: '/workshops-meetups'
  },
  {
    id: 3,
    title: 'Project Challenges',
    description: 'Collaborate on projects and tackle challenges together.',
    image: 'https://via.placeholder.com/300x200',
    link: '/project-challenges'
  },
  {
    id: 4,
    title: 'Competitions',
    description: 'Participate in competitions and win exciting prizes.',
    image: 'https://via.placeholder.com/300x200',
    link: '/competitions'
  },
  {
    id: 5,
    title: 'Surveys and Feedback',
    description: 'Provide feedback and take surveys to improve the course.',
    image: 'https://via.placeholder.com/300x200',
    link: '/surveys-feedback'
  },
  {
    id: 6,
    title: 'Special Events',
    description: 'Stay updated with special events such as conferences and guest lectures.',
    image: 'https://via.placeholder.com/300x200',
    link: '/special-events'
  },
];

function Activities() {
  return (
    <section id="activities">
      <h2>Activities</h2>

      <div className="activity-section">
        <h3>Ongoing Activities</h3>
        <div className="activity-container">
          {activities.map(activity => (
            <div key={activity.id} className="activity-card">
              <img src={activity.image} alt={activity.title} />
              <h4>{activity.title}</h4>
              <p>{activity.description}</p>
              <a href={activity.link}>Learn More</a>
            </div>
          ))}
        </div>
      </div>

      <div className="instructions">
        <h4>Important Guidelines</h4>
        <p>Make sure to regularly check the activities section for new updates. Engage actively and take advantage of all the opportunities available to enhance your learning experience.</p>
      </div>
    </section>
  );
}

export default Activities;
