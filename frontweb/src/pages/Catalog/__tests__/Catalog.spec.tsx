import { render, screen, waitFor } from "@testing-library/react";
import Catalog from "..";
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router-dom";
import history from "util/history";
import { server } from "./fixtures";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should render Catalog with products", async () => {
  render(
    <Router history={history}>
      <Catalog />
    </Router>
  );

  expect(screen.getByText("Catálogo de Produtos")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Smart TV")).toBeInTheDocument();
  });
});