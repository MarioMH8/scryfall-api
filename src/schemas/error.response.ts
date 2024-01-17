import { array, number, object, string } from 'zod';

const ErrorResponse = object({
	status: number(),
	code: string(),
	details: string(),
	type: string().nullish(),
	warnings: array(string()).nullish(),
});

export default ErrorResponse;
