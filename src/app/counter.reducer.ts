import { createReducer, on } from '@ngrx/store';
import { reset, decrement, increment } from './counter.action';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
