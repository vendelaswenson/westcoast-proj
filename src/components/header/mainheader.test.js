import MainHeader from './MainHeader';
import {render, cleanup, screen} from '@testing-library/react'
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

afterEach(() => {
    cleanup(); 
})

describe("Component", () => {
  it("renders without crashing", async () => {
    const utils = render(<MainHeader />, {wrapper: MemoryRouter});
    expect(utils).toMatchSnapshot();
    expect(utils).toBeTruthy();
  });

  it("Should have links in header", () => {
    render(<MainHeader />, {wrapper: MemoryRouter});
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).not.toHaveLength(0)
  })
});