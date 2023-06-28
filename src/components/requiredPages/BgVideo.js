import React from "react";

const BgVideo = () => {
  return (
    <div className="bg-video">
      <video autoPlay loop muted>
        <source src="/project-konnect/sample.mp4" type="video/mp4" />
        {/* Add additional <source> elements for different video formats */}
        Your browser does not support the video tag.
      </video>
      {/* Add other content or components on top of the video */}
    </div>
  );
};

export default BgVideo;
