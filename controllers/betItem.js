const Answer = require("../models/betitem");
const { Invalid, Paging } = require("../common/utils")
class AnswerController {
    async find(ctx) {
        const params = {}
        const QUERY = Invalid(params)
        const { page, size } = Paging({ page: ctx.query.page, size: ctx.query.size })
        const query = Answer.find(QUERY);
        const totalElements = await query.countDocuments();
        const content = await query.find()
            .limit(size)
            .skip(page * size)
        ctx.body = {
            content,
            totalElements,
            totalPages: Math.ceil(totalElements / size)
        }
    }
    async findById(ctx) {
        const { fields } = ctx.query;
        const selectFields =
            fields &&
            fields
                .split(";")
                .filter(f => f)
                .map(f => " +" + f)
                .join("");
        const answer = await Answer.findById(ctx.params.id)
            .select(selectFields)
            .populate("answerer");
        ctx.body = answer;
    }
    async create(ctx) {
        ctx.verifyParams({
            content: { type: "string", required: true }
        });
        const answerer = ctx.state.user._id;
        const { questionId } = ctx.params;
        const answer = await new Answer({
            ...ctx.request.body,
            answerer,
            questionId
        }).save();
        ctx.body = answer;
    }
    async update(ctx) {
        ctx.verifyParams({
            content: { type: "string", required: false }
        });
        await ctx.state.answer.update(ctx.request.body);
        ctx.body = ctx.state.answer;
    }
    async delete(ctx) {
        const answer = await Answer.findByIdAndRemove(ctx.params.id);
        if (!answer) {
            ctx.throw(404, "记录不存在");
        }
        ctx.status = 204;
    }
}

module.exports = new AnswerController();
