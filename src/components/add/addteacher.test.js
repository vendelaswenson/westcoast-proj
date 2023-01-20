import AddTeacher from './AddTeacher';
import {render, cleanup, screen} from '@testing-library/react'
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

afterEach(() => {
    cleanup(); 
})

describe("Component", () => {
  it("renders without crashing", async () => {
    const utils = render(<AddTeacher />, {wrapper: MemoryRouter});
    expect(utils).toMatchSnapshot();
    expect(utils).toBeTruthy();
  });

  it("Length label should be in the document", () => {
    render(<AddTeacher />, {wrapper: MemoryRouter});
    expect(screen.getByTestId('add-word-button')).toBeEnabled();
  })
});