module Option:
  {
    module Functor:
      { type t('a) = option('a); let map: ('a => 'b, t('a)) => t('b); };
  };
