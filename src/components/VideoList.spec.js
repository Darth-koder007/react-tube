import { render, screen, fireEvent } from "@testing-library/react";
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

test("should call the callback for video list on clicking", () => {
  render(<VideoListItem video={video} key={video.etag} setSelectVideo={fn} />);
  const videoListEl = screen.getByText(video.snippet.title);
  fireEvent.click(videoListEl);
  expect(fn).toHaveBeenCalled();
});

test("should call the callback for video list on clicking with specific number of time", () => {
  render(<VideoListItem video={video} key={video.etag} setSelectVideo={fn} />);
  const videoListEl = screen.getByText(video.snippet.title);
  fireEvent.click(videoListEl);
  expect(fn).toHaveBeenCalledTimes(1);
});

test("should call the callback for video list on clicking with specific argument", () => {
  render(<VideoListItem video={video} key={video.etag} setSelectVideo={fn} />);
  const videoListEl = screen.getByText(video.snippet.title);
  fireEvent.click(videoListEl);
  expect(fn).toHaveBeenCalledWith(video);
});
