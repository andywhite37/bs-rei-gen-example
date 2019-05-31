module Option = {

  module Functor: Classes.FUNCTOR with type t('a) = option('a) = {
    type nonrec t('a) = option('a);

    let map = (f, opt) => switch(opt) {
      | Some(a) => Some(f(a))
      | None => None
    };
  };
};