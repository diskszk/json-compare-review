import { BehaviorSubject } from "rxjs";

export const rightInputSubject$ = new BehaviorSubject<string>("");
export const rightErrorSubject$ = new BehaviorSubject<Error | null>(null);

export const leftInputSubject$ = new BehaviorSubject<string>("");
export const leftErrorSubject$ = new BehaviorSubject<Error | null>(null);

export const loadingSubject$ = new BehaviorSubject<boolean>(false);
