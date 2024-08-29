import { Video } from "#site/content";

export function VideoCard({ video }: { video: Video }) {
  return (
    <div className="aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${
          video.youtube_id
        }?${new URLSearchParams({
          rel: "0",
        })}`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}
