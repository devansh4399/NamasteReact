import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("should check if contact page is opened or not",()=>{

    render(<Contact/>);

    const heading= screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("checking button is there or not",()=>{

    render(<Contact/>);

    const button= screen.getByRole("button");

    expect(heading).toBeInTheDocument();
});