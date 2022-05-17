import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchBar from "./SearchBar";

const fn = jest.fn();
const label = "search this";
test("should trigger callback fn", async () => {
  render(<SearchBar onSearchInput={fn} />);
  const inputEl = screen.getByPlaceholderText("Type To Search");
  fireEvent.change(inputEl, { target: { value: label } });
  await waitFor(() => expect(fn).toBeCalled());
});
