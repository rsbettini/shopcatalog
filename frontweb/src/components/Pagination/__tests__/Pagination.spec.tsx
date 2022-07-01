import { render, screen } from "@testing-library/react";
import Pagination from "..";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("Pagination tests", () => {

  test("should render Pagination", () => {

    const pageCount = 3;
    const range = 3;

    render(
        <Pagination 
            pageCount={pageCount} 
            range={range} 
        />
    );

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

  test("next arrow should call onChange", () => {
    const pageCount = 3;
    const range = 3;
    const onChange = jest.fn();
    
    render(
        <Pagination 
            pageCount={pageCount} 
            range={range}
            onChange={onChange}
        />
    );

    const arrowNext =screen.getByTestId("arrow-next");

    userEvent.click(arrowNext);
    expect(onChange).toHaveBeenCalledWith(1);
  });

  test("previous arrow should call onChange", () => {
    const pageCount = 3;
    const range = 3;
    const onChange = jest.fn();
    const forcePage = 1;
    
    render(
        <Pagination 
            pageCount={pageCount} 
            range={range}
            onChange={onChange}
            forcePage={forcePage}
        />
    );

    const arrowPrevious =screen.getByTestId("arrow-previous");

    userEvent.click(arrowPrevious);
    expect(onChange).toHaveBeenCalledWith(0);
  });

  test("page link should call onChange", () => {
    const pageCount = 3;
    const range = 3;
    const onChange = jest.fn();
    
    render(
        <Pagination 
            pageCount={pageCount} 
            range={range}
            onChange={onChange}
        />
    );

    const page2 = screen.getByText("2");

    userEvent.click(page2);
    expect(onChange).toHaveBeenCalledWith(1);
  });

});
