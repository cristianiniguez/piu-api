/**
 * A set of functions called "actions" for `add-steps`
 */

export default {
  addSteps: async (ctx, next) => {
    try {
      const result = await strapi.service("api::add-steps.add-steps").addSteps(ctx.request.body);
      if (result.error) return ctx.badRequest(result.error)
      ctx.body = {}
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
