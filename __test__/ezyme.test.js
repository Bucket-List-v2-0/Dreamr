import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Note from '../client/components/Note';
import NoteList from '../client/components/NoteList';
configure({ adapter: new Adapter() });

describe('Note component testing', () => {
	describe('Note', () => {
		let wrapper;
		const props = {
			note: { category: 'hey', description: 'stupid' },
		};

		beforeAll(() => {
			wrapper = shallow(<Note {...props} />);
			console.log(wrapper);
		});

		it('Renders two buttons', () => {
			expect(wrapper.find('button')).toHaveLength(2);
		});

		it('Renders two p tag', () => {
			expect(wrapper.find('p')).toHaveLength(2);
		});

		it('Renders two div tags', () => {
			expect(wrapper.find('div')).toHaveLength(2);
		});
	});
});

describe('React unit test for NotesHolder', () => {
	describe('NotesHolder', () => {
		let wrapper;
	});
});
