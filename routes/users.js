const jsonwebtoken = require("jsonwebtoken");
const jwt = require("koa-jwt");
const { secret } = require("../config");
const Router = require("koa-router");
const router = new Router({ prefix: "/users" });
const {
  find,
  findById,
  create,
  update,
  delete: del,
  login,
  listFollowing,
  listFollowers,
  checkUserExist,
  follow,
  unfollow,
  followTopic,
  unfollowTopic,
  listFollowingTopic,
  listQuestions,
  likingAnswer,
  unlikingAnswer,
  listLikingAnswers,
  disLikingAnswer,
  unDisLikingAnswer,
  listDisLikingAnswers,
  listCollectingAnswer,
  collectingAnswer,
  unCollectingAnswers
} = require("../controllers/users");

// const auth = async (ctx, next) => {
//   const { authorization = "" } = ctx.request.header;
//   const token = authorization.replace("Bearer ", "");
//   try {
//     const user = jsonwebtoken.verify(token, secret);
//     ctx.state.user = user;
//   } catch (error) {
//     ctx.throw(401, error.message);
//   }
//   await next();
// };

const auth = jwt({ secret });

router.get("/", find);

router.post("/", auth, create);

router.get("/:id", findById);

router.delete("/:id", auth, del);

router.post("/login", login);



module.exports = router;
