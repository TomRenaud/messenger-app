import React from "react";
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Author from "../index";

test('renders with name and private message', () => {
	const { getByTestId, getByRole } = render(<Author name="John Doe" isPrivateMessage />);
	const paragraphAuthor = getByTestId("paragraphAuthor");
	const img = getByRole("img");
	expect(paragraphAuthor.textContent).toContain("John Doe");
	expect(img.classList.contains("anticon-eye-invisible")).toBe(true);
	expect(img.classList.contains("anticon-eye")).toBe(false);
});

test('renders with name and public message', () => {
	const { getByTestId, getByRole } = render(<Author name="John Doe" isPrivateMessage={false} />);
	const paragraphAuthor = getByTestId("paragraphAuthor");
	const img = getByRole("img");
	expect(paragraphAuthor.textContent).toContain("John Doe");
	expect(img.classList.contains("anticon-eye-invisible")).toBe(false);
	expect(img.classList.contains("anticon-eye")).toBe(true);
});

test("should match snapshot", () => {
	const tree = renderer.create(<Author  name="John Doe" isPrivateMessage />).toJSON();
	expect(tree).toMatchSnapshot();
});