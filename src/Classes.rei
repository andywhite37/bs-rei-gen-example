module type FUNCTOR = { type t('a); let map: ('a => 'b, t('a)) => t('b); };
