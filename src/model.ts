import { BehaviorSubject } from "rxjs";

export const rightInputText$ = new BehaviorSubject<string>("");
export const rightError$ = new BehaviorSubject<Error | null>(null);

export const leftInputText$ = new BehaviorSubject<string>("");
export const leftError$ = new BehaviorSubject<Error | null>(null);

export const loading$ = new BehaviorSubject<boolean>(false);
