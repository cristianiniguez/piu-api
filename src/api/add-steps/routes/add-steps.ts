export default {
  routes: [
    {
      method: "POST",
      path: "/add-steps",
      handler: "add-steps.addSteps",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
