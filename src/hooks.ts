import { debounceTime } from "rxjs";
import { useEffect, useState } from "react";
import { validate } from "./lib";
import {
  leftError$,
  leftInputText$,
  loading$,
  rightError$,
  rightInputText$,
} from "./model";

const DEBOUNCE_TIME = 500;

export const useInputValue = () => {
  const [leftInputValue, setLeftInputValue] = useState("");
  const [leftError, setLeftError] = useState<Error | null>(null);

  const [rightInputValue, setRightInputValue] = useState("");
  const [rightError, setRightError] = useState<Error | null>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadingSubscription = loading$.subscribe((value) => {
      setLoading(value);
    });

    const leftInputSubscription = leftInputText$
      .asObservable()
      .pipe(debounceTime(DEBOUNCE_TIME))
      .subscribe((value) => {
        setLeftInputValue(value);
        if (!validate(value)) {
          leftError$.next(new Error("Jsonの形式が正しくありません"));
        } else {
          leftError$.next(null);
        }

        setLoading(false);
      });

    const leftErrorSubscription = leftError$.subscribe((error) => {
      setLeftError(error);
    });

    const rightInputSubscription = rightInputText$
      .asObservable()
      .pipe(debounceTime(DEBOUNCE_TIME))
      .subscribe((value) => {
        setRightInputValue(value);
        if (!validate(value)) {
          rightError$.next(new Error("Jsonの形式が正しくありません"));
        } else {
          rightError$.next(null);
        }
        setLoading(false);
      });

    const rightErrorSubscription = rightError$.subscribe((error) => {
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

  return { loading, leftInputValue, leftError, rightInputValue, rightError };
};
