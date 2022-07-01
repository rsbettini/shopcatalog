import { render, screen, waitFor } from "@testing-library/react";
import Catalog from "..";
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router-dom";
import history from "util/history";

test("ButtonIcon should render Catalog with products", async () => {
  render(
    <Router history={history}>
      <Catalog />
    </Router>
  );

  //screen.debug();

  expect(screen.getByText("Catálogo de Produtos")).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText("Smart TV")).toBeInTheDocument();
  });
  //screen.debug();
});
