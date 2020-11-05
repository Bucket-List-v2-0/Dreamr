import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Note from '../client/components/Note.jsx';

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('React unit tests', () => {
	describe('Note', () => {
		let wrapper;
		const props = {
			category: 'travel',
			description: 'Bali',
		};

		beforeAll(() => {
			wrapper = shallow(<Note {...props} />);
		});

		it('Renders two buttons', () => {
			expect(wrapper.find('button')).toHaveLength(2);
		});
	});
});
