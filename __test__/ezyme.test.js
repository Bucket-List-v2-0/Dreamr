import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Note from '../client/components/Note';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
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

// 		it('Renders a <p> tag with the label in bold', () => {
// 			expect(wrapper.type()).toEqual('p');
// 			expect(wrapper.text()).toEqual('Mega: Markets');
// 			expect(wrapper.find('strong').text()).toMatch('Mega');
// 		});
// 	});

// 	describe('MarketDisplay', () => {
// 		// TODO: Test the following:
// 		// 1. A MarketDisplay should display all of its text props inside a
// 		// LabeledText component
// 		// 2. It should also contain a div with two buttons
// 		// 3. The functions passed down should be invoked on click
// 		// 4. MarketDisplay should render a div with a class of `marketBox`, and the
// 		// interior div wrapping the two buttons should have a class of `flex`

// 		let wrapper;
// 		const props = {
// 			index: 0,
// 			location: 'Azkaban',
// 			cards: 0,
// 			percentage: 0,
// 			// addCard,
// 			// deleteCard
// 		};

// 		const test = { x: 0 };
// 		beforeAll(() => {
// 			// passes in the props from above
// 			wrapper = shallow(<MarketDisplay {...props} />);
// 		});

// 		xit('Market-Display should have a component LabeledText', () => {
// 			expect(wrapper.find(LabeledText)).toHaveLength(4);
// 			expect(wrapper.find('Market ID').at(0).text()).toMatch('0');
// 		});

// 		// <LabeledText label="Market ID" text={index} />
// 		// <LabeledText label="Location" text={location} />
// 		// <LabeledText label="Cards" text={cards} />
// 		// <LabeledText label="% of total" text={percentage} />

// 		it('should match snapshot', () => {
// 			// will take a snapshot initially and then every time after that it will compare to the original
// 			expect(wrapper).toMatchSnapshot();
// 		});

// 		it('Market-Display should have a div with class of marketBox and interior div should wrap two buttons', () => {
// 			expect(wrapper.find('div.flex').find('button')).toHaveLength(2);
// 		});

// 		it('Market-Display should have 2 buttons', () => {
// 			expect(wrapper.find('button')).toHaveLength(2);
// 		});

// 		it('the functions passed down should be invoked on a click', () => {
// 			expect(wrapper.find('button').at(0).text()).toMatch('+');
// 			//wrapper.find('button').at(0).simulate('click', {target: {name: 'x', value: 1 }});
// 			//expect(test.x).toEqual(1)
// 			// expect(wrapper.cards).toEqual(1);
// 			// wrapper.find('button').at(1).simulate('click');
// 			// expect(wrapper.cards).toEqual(0);
// 		});
// 	});

// 	describe('MarketsDisplay', () => {
// 		// TODO: Test the following:
// 		//   1. A MarketsDisplay should have an h4 element to display the 'Markets'
// 		//   title
// 		//   2. A single MarketDisplay is rendered for each market in the
// 		//   marketList prop
// 		//   3. The percentage prop should be a string calculated to two decimals.
// 		//   Test for zero, a whole number, and a fractional value. (Right now this
// 		//   is implemented incorrectly, so follow TDD here)
// 		const props = {
// 			marketList: [{ location: 'hey', cards: 0 }],
// 		};

// 		let wrapper;
// 		beforeAll(() => {
// 			wrapper = shallow(<MarketsDisplay {...props} />);
// 		});

// 		const percentOfTotal = (Cards, total) =>
// 			Cards ? ((Cards / total) * 100).toFixed(2) : 0;

// 		// TODO: Test the following:
// 		//   1. A MarketsDisplay should have an h4 element to display the 'Markets'
// 		//   title
// 		//   2. A single MarketDisplay is rendered for each market in the
// 		//   marketList prop
// 		//   3. The percentage prop should be a string calculated to two decimals.
// 		//   Test for zero, a whole number, and a fractional value. (Right now this
// 		//   is implemented incorrectly, so follow TDD here)

// 		it('MarketsDisplay should have an h4 element to display the Markets title', () => {
// 			expect(wrapper.find('h4')).toHaveLength(1);
// 		});

// 		it('A single MarketDisplay is rendered for each market in the marketList prop', () => {
// 			expect(wrapper.find(MarketDisplay)).toHaveLength(props.marketList.length);
// 		});

// 		it('The percentage prop should be a string calculated to two decimals. Test for zero, a whole number, and a fractional value.', () => {
// 			expect(typeof percentOfTotal(10, 20)).toEqual('string');
// 			expect(percentOfTotal(10, 20)).toEqual('50.00');
// 			expect(percentOfTotal(10, 10)).toEqual('100.00');
// 			expect(percentOfTotal(1, 3)).toEqual('33.33');
// 		});
// 	});
// });
