import { list } from "@vercel/blob";

async function VideoComponent({ fileName }: { fileName: string }) {
  const { blobs } = await list({
    token: process.env.BLOB_READ_WRITE_TOKEN,
    prefix: fileName,
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute w-full h-full object-cover -z-[1] "
      preload="none"
      aria-label="Video player"
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoComponent;
