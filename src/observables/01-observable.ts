import { Observable, Observer } from "rxjs";

export const observer: Observer<any> = {
  next: (value) => console.log("siguiente [next]:", value),
  error: (error) => console.log("error [obs]:", error),
  complete: () => console.log("completado [obs]"),
};

export const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo 1");

  subs.next("Hola");
  subs.next("Mundo 2");

  // Forzar un error
  //const a = undefined;
  // a.nombre = "Fernando";

  subs.complete();

  subs.next("Hola");
  subs.next("Mundo");
});

obs$.subscribe(observer);

// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// );
