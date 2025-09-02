import { defineMiddleware } from "astro:middleware";

type HeaderVariants = "A" | "B";

const HEADER_NAME = `X-Test-Group`;

export const onRequest = defineMiddleware((context, next) => {
  context.locals.abVariant = context.request.headers.get(
    HEADER_NAME
  ) as HeaderVariants;

  return next();
});
