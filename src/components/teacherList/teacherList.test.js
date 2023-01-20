import TeacherList from "./teacherList";
import {render, cleanup, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

afterEach(() => {
  cleanup(); 
})

describe("Component", () => {
  it("renders without crashing", async () => {
    const utils = render(<TeacherList />, {wrapper: MemoryRouter});
    expect(utils).toMatchSnapshot();
    expect(utils).toBeTruthy();
  });

  it("First name should be in the document", () => {
    render(<TeacherList />, {wrapper: MemoryRouter});
    const firstName = screen.getByTestId("name-element");
    const lastName = screen.getByTestId("lastname-element");
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
})
});
