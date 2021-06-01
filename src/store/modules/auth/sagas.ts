import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { signInSuccess, signInFailure, signInRequest } from './actions';

import { TMS_API } from '~/services/API';
import swal from '@sweetalert/with-react';

export function* signIn({ payload }: ActionType<typeof signInRequest>) {
	try {
		const { username, password } = payload;
		const { data } = yield call(TMS_API.post, 'v1/account/login', {
			client_id: 'sa-web',
			grant_type: 'password',
			scope: 'profile permission offline_access',
			username: username,
			password: password
		});
		yield put(signInSuccess({ token: data.access_token }));
	} catch (err) {
		yield put(signInFailure());
		swal('Erro', 'Ocorreu um erro ao efetuar login. Tente novamente.', 'error');
	}
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
