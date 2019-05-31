let x = Some(42);

let y = Instances.Option.Functor.map(a => a * 2, x);

Js.log(x);
Js.log(y);