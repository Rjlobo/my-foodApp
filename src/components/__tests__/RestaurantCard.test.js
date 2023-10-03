import { render, screen } from "@testing-library/react";
import RestoCard, { withPromotedLabel } from "../RestoCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";
it("should render RestaurantCard component with props Data", () => {
  render(<RestoCard resdata={MOCK_DATA} />);
  const name = screen.getByText("The Fritter Company");
  expect(name).toBeInTheDocument();
});

// it("Should render RestaurantCard component with Promoted label", () => {
//   render(withPromotedLabel());
//   const label = screen.getByText("Promoted");
//   expect(label).toBeInTheDocument();
// });
