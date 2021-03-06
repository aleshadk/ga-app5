import {merge} from 'lodash';
import {OPTIONS_CHANGE_ACTION} from './actions/index';

export function createDeepProperty({ optionsPath, value }) {
	const obj = {};
	const stopIndex = optionsPath.length - 1;
	return optionsPath.reduce((prev, current, currentIndex) => {
		if (currentIndex === stopIndex) {
			prev[current] = value;
			return obj;
		}
		return prev[current] = {};
	}, obj);
}

export function createPluginsReducer(namespace, fullState) {
	const initialState = fullState[namespace];
	return (state = initialState, action) => {
		switch (action.type) {
			case OPTIONS_CHANGE_ACTION: {
				if (action.optionsPath[0] !== namespace) {
					return state;
				} 
				// NOTE: remove namespace from path;
				const [, ...optionsPath] = action.optionsPath;
				const newFragment = createDeepProperty({ optionsPath, value: action.value });

				return merge({...state}, newFragment);
			}
			default:
				return state;
		}
	};
}