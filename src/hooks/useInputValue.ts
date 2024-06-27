import { useEffect, useState } from "react";
import { BehaviorSubject, debounceTime } from "rxjs";
import { sortValue, validate } from "../lib";
import {
  leftInputSubject$,
  leftErrorSubject$,
  rightInputSubject$,
  rightErrorSubject$,
  loadingSubject$,
} from "../model";

const DEBOUNCE_TIME = 500;

const updateViewerValue = (
  inputValue: string,
  errorSubject: BehaviorSubject<null | Error>,
  setState: (value: React.SetStateAction<string>) => void
): void => {
  const error =
    inputValue && !validate(inputValue)
      ? new Error("Jsonの形式が正しくありません")
      : null;

  const viewerValue =
    inputValue && validate(inputValue) ? sortValue(inputValue) : inputValue;

  errorSubject.next(error);
  setState(viewerValue);
};

export const useInputValue = () => {
  const [leftInputValue, setLeftInputValue] = useState("");
  const [leftError, setLeftError] = useState<Error | null>(null);

  const [rightInputValue, setRightInputValue] = useState("");
  const [rightError, setRightError] = useState<Error | null>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadingSubscription = loadingSubject$.subscribe((value) => {
      setLoading(value);
    });

    const leftInputSubscription = leftInputSubject$
      .asObservable()
      .pipe(debounceTime(DEBOUNCE_TIME))
      .subscribe((leftInputValue) => {
        updateViewerValue(leftInputValue, leftErrorSubject$, setLeftInputValue);
        setLoading(false);
      });

    const leftErrorSubscription = leftErrorSubject$.subscribe((error) => {
      setLeftError(error);
    });

    const rightInputSubscription = rightInputSubject$
      .asObservable()
      .pipe(debounceTime(DEBOUNCE_TIME))
      .subscribe((value) => {
        updateViewerValue(value, rightErrorSubject$, setRightInputValue);
        setLoading(false);
      });

    const rightErrorSubscription = rightErrorSubject$.subscribe((error) => {
      setRightError(error);
    });

    return () => {
      return (
        loadingSubscription.unsubscribe(),
        leftInputSubscription.unsubscribe(),
        leftErrorSubscription.unsubscribe(),
        rightInputSubscription.unsubscribe(),
        rightErrorSubscription.unsubscribe()
      );
    };
  }, []);

  return { leftInputValue, leftError, rightInputValue, rightError, loading };
};
