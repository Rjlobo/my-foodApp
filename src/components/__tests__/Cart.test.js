import { render, act, fireEvent, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("Should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionHeader = screen.getByText("Veg Starter(13)");
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("foodsItems").length).toBe(13);
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  const text = screen.getByText("Cart - (1 items)");
  expect(text).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  const text1 = screen.getByText("Cart - (2 items)");
  expect(text1).toBeInTheDocument();
});
