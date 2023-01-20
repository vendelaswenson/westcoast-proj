import AddCourse from './AddCourse';
import {render, cleanup, screen} from '@testing-library/react'
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';



afterEach(() => {
    cleanup(); 
})

describe("Component", () => {
  it("renders without crashing", async () => {
    const utils = render(<AddCourse />, {wrapper: MemoryRouter});
    expect(utils).toMatchSnapshot();
    expect(utils).toBeTruthy();
  });

  it("Length label should be in the document", () => {
    render(<AddCourse />, {wrapper: MemoryRouter});
    const inputNode = screen.getByLabelText('Length:')
    expect(inputNode).toBeInTheDocument();
  })
});
