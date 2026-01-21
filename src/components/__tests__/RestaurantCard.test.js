import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"
import UserContext from "../../UserContext";



test("checking Restaunrat Card is rendering",()=>{

    render(
     <userContext.Provider value={{ loggedInUser: "Devansh" }}>
      <RestaurantCard resData={MOCK_DATA} />
    </userContext.Provider>);

    const name=screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();

})