// checkLoggedIn 미들웨어
const checkLoggedIn = (ctx, next) => {
  if (!ctx.state.user) {
    ctx.status = 401;
    return;
  }
  return next();
};

export default checkLoggedIn;