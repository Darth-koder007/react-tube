import { render, screen } from "@testing-library/react";
import VideoDetail from "./VideoDetail";

const data = {
  id: { videoId: 1234 },
  snippet: { title: "test video title" },
};

test("should match video data title", () => {
  render(<VideoDetail selectedVideo={data} />);
  const videoDetailEl = screen.getByText(data.snippet.title);
  expect(videoDetailEl).toBeInTheDocument();
});

test("should match video data iframe id", () => {
  render(<VideoDetail selectedVideo={data} />);
  const videoDetailEl = screen.getByTitle(data.id.videoId);
  expect(videoDetailEl).toBeInTheDocument();
});
