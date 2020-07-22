export const returnNormalJson = (res, data, statusCode = 200) => {
  return res.json({
    status: 'ok',
    data,
    error: null,
  });
};

export const returnErrorJson = (res, error, statusCode = 400) => {
  return res.json({
    status: 'ok',
    data: null,
    error,
  });
};
