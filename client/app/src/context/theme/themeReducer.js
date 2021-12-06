import {
	THEME_TYPE,

} from '../types';
export default (state, action) => {
	switch (action.type) {
		// case USER_LOADED:
		// 	localStorage.setItem("isAuthenticated", "true");//in browser local storage we gonna set an item called token to
		// 	localStorage.setItem("user", action.payLoad);
		// 	return {
		// 		...state,
		// 		isAuthenticated:localStorage.getItem("isAuthenticated"),
		// 		loading: false,
		// 		user: localStorage.getItem("user")
		// 	};
		default:
			return state;
	}
};