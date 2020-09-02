import "./index.css";

import { Observable, from } from "rxjs";
import { map, filter } from "rxjs/operators"

let numbers = [1, 5, 10];
let source = Observable.create((observer: { next: (arg0: number) => void; complete: () => void; }) => {
    let index = 0;
    let produceValue = () => {

        observer.next(numbers[index++]);

        if (index < numbers.length) {
            setTimeout(produceValue, 250);
        } else {
            observer.complete();
        }
    }

    produceValue();
}).pipe
(map((n:number) => n * 2),filter((n:number) => n > 4));

source.subscribe(
  (value: any) => console.log(`value: ${value}`),
  (e: any) => console.log(`error: ${e}`),
  () => console.log("complete")
);
