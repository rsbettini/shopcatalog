import { render, screen } from "@testing-library/react";
import Pagination from "..";
import "@testing-library/jest-dom/extend-expect";

describe("Pagination tests", () => {

  test("should render Pagination", () => {
    const pageCount = 3;
    const range = 3;

    render(<Pagination pageCount={pageCount} range={range} />);

    const page1 = screen.getByText("1");
    //For exemplo: const page2 = screen.getByText("x"); ....

    //First option
    expect(page1).toBeInTheDocument();
    expect(page1).toHaveClass("pagination-link-active");

    //OR Second option
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("2")).not.toHaveClass("pagination-link-active");

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("3")).not.toHaveClass("pagination-link-active");

    expect(screen.queryByText("4")).not.toBeInTheDocument();
  });
});
