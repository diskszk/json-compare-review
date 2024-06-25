import { BehaviorSubject } from "rxjs";
import { loading$ } from "../model";

export function InputForm({
  inputSubject$,
  error,
}: {
  inputSubject$: BehaviorSubject<string>;
  error: Error | null;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    loading$.next(true);
    inputSubject$.next(event.target.value);
  };

  return (
    <div>
      <textarea onChange={handleChange}></textarea>
      {error && <p>{error.message}</p>}
    </div>
  );
}
