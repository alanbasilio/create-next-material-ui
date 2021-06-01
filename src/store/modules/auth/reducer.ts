import { AuthState, AuthAction } from './types';
import jwt_decode from 'jwt-decode';

const initialState: AuthState = {
	loadingSignInRequest: false,
	isSignedIn: false,
	error: false,
	token: null,
	user: []
};

export default function auth(state = initialState, action: AuthAction): AuthState {
	switch (action.type) {
		case '@auth/SIGN_IN_REQUEST':
			return {
				...state,
				loadingSignInRequest: true
			};
		case '@auth/SIGN_IN_SUCCESS':
			return {
				...state,
				loadingSignInRequest: false,
				isSignedIn: true,
				token: action.payload.token,
				user: jwt_decode(action.payload.token)
			};
		case '@auth/SIGN_IN_FAILURE':
			return {
				...state,
				loadingSignInRequest: false,
				error: true
			};
		case '@auth/SIGNOUT':
			return {
				...state,
				isSignedIn: false,
				token: null,
				user: []
			};
		default:
			return state;
	}
}
