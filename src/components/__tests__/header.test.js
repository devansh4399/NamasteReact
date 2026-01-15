import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import HeaderComp from "../HeaderComp";
import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("testing the header component",()=>{
    <BrowserRouter>
    <Provider store={appStore}>
    render(<HeaderComp/>)
    </Provider>
    </BrowserRouter>

    const loginButton=screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
});