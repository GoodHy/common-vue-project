import request from '../network/request';

export function example(params) {
	return request({
		url: 'example',
		method: 'POST',
		data: params
	});
}
