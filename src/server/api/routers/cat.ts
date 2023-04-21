import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const catRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.cat.findMany();
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        userId: z.string(),
        breed: z.string(),
        about: z.string(),
        status: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.dog.create({
        data: {
          name: input.name,
          userId: ctx.session.user.id,
          breed: input.breed,
          about: input.about,
          status: input.status,
        },
      });
    }),
});
