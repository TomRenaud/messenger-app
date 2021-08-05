import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import EditorModal from "../index";
import { fireEvent } from "@testing-library/dom";
import EnzymeToJson from 'enzyme-to-json';
import { configure, mount } from 'enzyme';

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

test('fire onChangeMessage event', () => {
	const { getByTestId } = render(<EditorModal isVisible onCancel={() => ({})} onSubmit={() => ({})} />);
	const textArea = getByTestId("textArea");
	fireEvent.change(textArea, {target: {value: 'Hello World !!'}});
	expect(textArea.value).toBe("Hello World !!");
});

test('fire onChangePrivacy event', () => {
	const { getByTestId } = render(<EditorModal isVisible onCancel={() => ({})} onSubmit={() => ({})} />);
	const privacyCheckbox = getByTestId("privacyCheckbox");
	privacyCheckbox.click();
	expect(privacyCheckbox.className).toContain("ant-tag-checkable-checked");
	privacyCheckbox.click();
	expect(privacyCheckbox.className).toContain("ant-tag-checkable");
});

configure({ adapter: new Adapter() });
test("should match snapshot", () => {
	const subject = mount(<EditorModal isVisible onCancel={() => ({})} onSubmit={() => ({})} />);
	expect(EnzymeToJson(subject)).toMatchSnapshot();
});