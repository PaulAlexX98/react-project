import React from 'react';

const AboutVideo = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem', // Add padding to control space around the video
  };

  const iframeStyle = {
    width: '350px', // Set the width of the video player
    height: '350px', // Set the height of the video player
    borderRadius: '1.5rem', // Apply border radius
  };

  return (
    <div className="about-video" style={containerStyle}>
      <iframe
        style={iframeStyle} // Apply the inline styles
        src="https://www.youtube.com/embed/Izb3LMEbTdU" // Replace with your YouTube video URL
        frameBorder="0" // Set the frameborder to 0 for no border
        allowFullScreen // Allow fullscreen mode
        title="YouTube Video" // Provide a title for accessibility
      ></iframe>
    </div>
  );
};

export default AboutVideo;
