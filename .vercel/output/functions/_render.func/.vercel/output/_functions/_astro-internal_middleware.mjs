import 'es-module-lexer';
import './chunks/astro-designed-error-pages_6r9nAcX3.mjs';
import 'cookie';
import { d as defineMiddleware, s as sequence } from './chunks/index_h2riyrlb.mjs';
import { u as useTranslations } from './chunks/translations_C53H1kHP.mjs';

const onRequest$1 = defineMiddleware((context, next) => {
  context.locals.t = useTranslations(context.currentLocale);
  return next();
});

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
