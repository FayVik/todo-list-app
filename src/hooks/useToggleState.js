import { useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialValue = false) => {
	const [state, setState] = useState(initialValue);
	const toggle = () => setState(!state);

	return [state, toggle];
};
