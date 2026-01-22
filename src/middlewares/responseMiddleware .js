export const responseMiddleware = (req, res, next) => {
  const base = () => ({
    success: false,
    data: null,
    error: null,
    meta: null,
    traceId: req.traceId,
  });

  res.success = (data, statusCode = 200, meta = null) => {
    const body = base();
    body.success = true;
    body.data = data;
    body.meta = meta;

    return res.status(statusCode).json(body);
  };

  res.fail = (
    code,
    message,
    statusCode = 400,
    details = null
  ) => {
    const body = base();
    body.error = { code, message, details };

    return res.status(statusCode).json(body);
  };

  next();
};