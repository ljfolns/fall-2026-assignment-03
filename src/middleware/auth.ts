import { Request, Response, NextFunction } from 'express';

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (req.method === "POST" || req.method == "PATCH") {
    if (!req.get("X-User-Id"))
      res.status(401);
    else
      res.locals.userId = req.get("X-User-Id")
  }

  next();
}

export default authMiddleware;
