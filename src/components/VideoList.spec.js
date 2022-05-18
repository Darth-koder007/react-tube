import { render, screen } from "@testing-library/react";
import VideoListItem from "./VideoListItem";

const video = {
  snippet: {
    thumbnails: {
      default: { url: "https://google.com" },
    },
    title: "title 1",
  },
  etag: 1243,
};

const fn = jest.fn();

test("should match video list", () => {
  render(<VideoListItem video={video} key={video.etag} setSelectVideo={fn} />);
  const videoListEl = screen.getByText(video.snippet.title);
  expect(videoListEl).toBeInTheDocument();
});
