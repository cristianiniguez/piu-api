/**
 * add-steps service
 */

type AddStepsPayload = {
  songId: number;
  gameVersionId: number;
  steps: Record<string, number[]>;
};

const isValidStepType = (type: string): type is "single" | "double" | "coop" =>
  ["single", "double", "coop"].includes(type);

export default () => ({
  addSteps: async (payload: AddStepsPayload) => {
    const song = await strapi.entityService.findOne("api::song.song", payload.songId);
    if (!song) return { error: `Song with id ${payload.songId} not found` };

    const gameVersion = await strapi.entityService.findOne("api::game-version.game-version", payload.gameVersionId);
    if (!gameVersion) return { error: `Game version with id ${payload.gameVersionId} not found` };

    const stepsList = Object.entries(payload.steps)
      .map(([type, levels]) => {
        if (!isValidStepType(type)) return [];
        return levels.map((level) => ({ level, type }));
      })
      .flat();

    console.log(`Creating ${stepsList.length} step(s) for song ${song.name} and game version ${gameVersion.name}`);

    for await (const { level, type } of stepsList) {
      const name = `${song.name} ${type.charAt(0).toUpperCase()}${level}`;

      const step = await strapi.entityService.create("api::step.step", {
        data: { name, type, song: song.id },
      });

      await strapi.entityService.create("api::step-change.step-change", {
        data: {
          name,
          level,
          step: step.id,
          game_version: payload.gameVersionId,
          type: "add",
        },
      });
    }

    return { error: null };
  },
});
