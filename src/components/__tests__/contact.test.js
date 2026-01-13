import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("COntact us Page test cases",()=>{
test("should check if contact page is opened or not",()=>{

    render(<Contact/>);

    const heading= screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("checking button is there or not",()=>{

    render(<Contact/>);

    const button= screen.getByRole("button");

    expect(button).toBeInTheDocument();
});

test("checking whether any placeholder in the contact page or not",()=>{

    render(<Contact/>);

    const search= screen.getByPlaceholderText("name");

    expect(search).toBeInTheDocument();
});

test("CHecking if all there 3 input boxes or not",()=>{

    render(<Contact/>);

    const inputBoxes= screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(3);
});
})

