import { useEffect, useRef } from 'react';

const OptimizedVideo = ({ className, video, fallBackSrc }: {fallBackSrc?: string; className?: string; video?: string}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.intersectionRatio >= 0.4) {
          video.play().catch(() => {
            console.error("Error playing video. Try refreshing the page.");
          });
        } else {
          video.pause();
        }
      },
      {
        threshold: [0, 0.40, 1], // trigger when visibility crosses 33%
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video autoPlay muted loop playsInline className={"w-full h-full object-cover" + " " + className} ref={videoRef}>
        <source src={video} type="video/webm" /> 
        {fallBackSrc && <source src={fallBackSrc} type="video/mp4" />}
        Your browser does not support the video tag.
    </video>
  );
};

export default OptimizedVideo;
