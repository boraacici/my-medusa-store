import type {
  MiddlewaresConfig,
  MedusaRequest,
  MedusaResponse,
  MedusaNextFunction,
} from "@medusajs/medusa";

async function logger(
  req: MedusaRequest,
  res: MedusaResponse,
  next: MedusaNextFunction
) {
  console.log("Request received");
  console.log(req.url);
  console.log(req.path);
  
  
  next();
}

export const config: MiddlewaresConfig = {
  routes: [
    {
      matcher: "/admin",
      middlewares: [logger],
    },
  ],
};