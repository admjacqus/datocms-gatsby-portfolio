import React from 'react'
const Video = ({
  videoSrcURL,
  videoTitle,
  videoWidth,
  videoHeight,
  ...props
}) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      width={videoWidth}
      height={videoHeight}
      frameBorder="0"
      title={videoTitle}
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    ></iframe>
  </div>
)
export default Video
