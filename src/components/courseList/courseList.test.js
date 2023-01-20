import CourseList from "./CourseList";
import {render, cleanup} from '@testing-library/react'
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

afterEach(() => {
  cleanup(); 
})

describe("Component", () => {
  it("renders without crashing", async () => {
    const utils = render(<CourseList />, {wrapper: MemoryRouter});
    expect(utils).toMatchSnapshot();
    expect(utils).toBeTruthy();
  });

  it("Name should be spelled correctly", async () => {
    render(<CourseList />, {wrapper: MemoryRouter});
    expect('name').toMatch(/am/);
    expect('number').toMatch(/umb/);
  });
});
