import App from "./App";
import { render, screen, userEvent } from "./utils/test-utils";

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    render(<App />);
    await userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    render(<App />);
    await userEvent.click(screen.getByRole("button"));
    await userEvent.click(screen.getByRole("button"));
    await userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText(/count is 3/i)).toBeInTheDocument();
  });
});
