import React from "react";
import { render } from "@testing-library/react";
import Message from "../index";
import renderer from "react-test-renderer";

beforeEach(() => {
	Object.defineProperty(window, 'matchMedia', {
		writable: true,
		value: jest.fn().mockImplementation(query => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: jest.fn(), // deprecated
			removeListener: jest.fn(), // deprecated
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn(),
		})),
	});
});

test('check content and date', () => {
	const { getByTestId } = render(
		<Message
			author="Anonymous"
			content="Hello World"
			date={new Date(2019, 8, 7)}
			isPrivate
		/>
	);
	const content = getByTestId("messageContent");
	const date = getByTestId("messageDate");
	expect(content.textContent).toBe("Hello World");
	expect(date.textContent).toBe("07/09/2019");
});

test("should match snapshot", () => {
	const tree = renderer.create(
		<Message
			author="Anonymous"
			content="Hello World"
			date={new Date(2019, 8, 7)}
			isPrivate
		/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});