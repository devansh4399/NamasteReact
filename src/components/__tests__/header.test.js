import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import HeaderComp from "../HeaderComp";
import { fireEvent, render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("testing the header component",()=>{
    render( <BrowserRouter>
    <Provider store={appStore}>
   <HeaderComp/>
    </Provider>
    </BrowserRouter>);

    const loginButton = screen.getByRole("button", { name: /login/i });

    expect(loginButton).toBeInTheDocument();

  
});

test("testing the header component with cart items 0",()=>{
    render( <BrowserRouter>
    <Provider store={appStore}>
   <HeaderComp/>
    </Provider>
    </BrowserRouter>);


    
});


test("should chnage login button to logout",()=>{
    render( <BrowserRouter>
    <Provider store={appStore}>
   <HeaderComp/>
    </Provider>
    </BrowserRouter>);

    const loginButton = screen.getByRole("button", { name: /login/i });

    fireEvent.click(loginButton);
    
    const logoutButton= screen.getByRole("button",{name:/logout/i});

    expect(logoutButton).toBeInTheDocument();

  
});