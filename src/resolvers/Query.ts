

export const Query = {
  getCvs: async (parent: any, args: any, context: any, info: any) => {
    return await context.prisma.cv.findMany({include: {user: true, skills: true }});
  },

  getCvsById: (parent: any, args: any, context: any, info: any) => {
    return context.prisma.cv.findUnique({
      where: { id: args.id ,include: {user: true, skills: true } }
    });
  },
};



