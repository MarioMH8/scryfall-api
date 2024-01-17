import { literal, union } from 'zod';

const Color = union([literal('W'), literal('B'), literal('R'), literal('U'), literal('G')]);

export default Color;
