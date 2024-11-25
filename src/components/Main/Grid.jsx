import React from 'react';
import './Grid.css';
import qn from '../../Assets/qn.jpeg'
import feed from '../../Assets/feed.jpeg'
import group from '../../Assets/group.jpeg'


const HelpSection = () => {
  const helpItems = [
    {
      icon: qn, // Update with the actual path to your icons
      title: 'Check out our FAQ about how SolveHub works.',
      linkText: 'Visit Help Center',
      linkUrl: '#',
    },
    {
      icon: feed,
      title: 'To share feedback about our platform, please visit our meta community.',
      linkText: 'Visit Meta',
      linkUrl: '#',
    },
    {
      icon: group,
      title: 'Looking for help with SolveHub for Teams?',
      linkText: 'Visit Teams Help Center',
      linkUrl: '#',
    },
  ];

  return (
    <div className="help-section">
      {helpItems.map((item, index) => (
        <div key={index} className="help-item">
          <img src={item.icon} alt="" className="help-icon" />
          <p className="help-title">{item.title}</p>
          <a href={item.linkUrl} className="help-link">
            {item.linkText} &rsaquo;
          </a>
        </div>
      ))}
    </div>
  );
};

export default HelpSection;
