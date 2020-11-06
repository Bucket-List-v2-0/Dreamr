import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import axios from 'axios';

export const BucketContext = createContext();

const BucketProvider = (props) => {
	const [items, setItem] = useState([
		{ item: '' },
		{ category: '' },
		{ id: null },
	]);

	//useEffect() hook ----- doing axios request----set state to data we get back
	//adding an empty array as sec. parameter in useEffect will
	//prvent axios to fetch data again and again



	//functions to add or delete items
	//?? need to do another fetch request (post) to add into list
	//axios.post(/list/)
	const addItem = (item, category) => {
		setItem([...items, { item, category, id: uuid() }]);
	};
	//?? need to do another fetch request (delete)
	//axios.delete('/list/:id')
	const removeItem = (id) => {
		setItem(items.filter((item) => item.id !== id));
	};

	//all what we need to passdown pu inside of value={{items...}}
	return (
		<BucketContext.Provider value={{ items, addItem, removeItem }}>
			{props.children}
		</BucketContext.Provider>
	);
};

export default BucketProvider;
