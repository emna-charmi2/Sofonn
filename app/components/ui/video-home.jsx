export default function VideoHome() {
  return (
     <video width="320" height="240"  preload="none"  
      autoPlay
      muted
      
      playsInline
      className="w-full h-auto"
    >
      <source src="videos\vessel_video4.mp4" type="video/mp4" />       {/* sans public */}

      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>

  )
}