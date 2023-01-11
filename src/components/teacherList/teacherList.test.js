import TeacherList from "./teacherList";
import {render} from '@testing-library/react'
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe("Component", () => {
  it("renders without crashing", async () => {
    const utils = render(<TeacherList />, {wrapper: MemoryRouter});
    expect(utils).toMatchSnapshot();
  });
});
