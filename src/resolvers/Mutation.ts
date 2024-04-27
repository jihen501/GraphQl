
export const Mutation = {
  addCv: (parent, { cvInput }, context, infos) => {
    const { skills, ...cvData } = cvInput;
    
    if (skills) {
       const CvAdded= context.prisma.cv.create({
        data: {
          ...cvData,

          skills: {
            connect: skills.map((skillId) => ({ id: skillId })),
          },
        },
        include: { skills: true, user: true },
      });
      context.pubSub.publish("Cv", CvAdded);
      return CvAdded;

    } else {
      const CvAdded= context.prisma.cv.create({
        data: cvData,
        include: { skills: true, user: true },
      });
      context.pubSub.publish("Cv", CvAdded);
      return CvAdded;

    }
    
  },
  updateCv: (parent, { id, updatecvInput }, context, infos) => {
    const { skills, ...cvData } = updatecvInput;
    const CvUpdated= context.prisma.cv.update({
      where: { id },
      data: {
        ...cvData,
        skills: skills
          ? {
              connect: skills.map((skillId) => ({ id: skillId })),
            }
          : undefined,
      },
      include: { skills: true, user: true },
    });
    context.pubSub.publish("CvUpdated", CvUpdated);
    return CvUpdated;
  },
  deleteCv: (parent, { id }, context, infos) => {
    const CvDeleted= context.prisma.cv.delete({
      where: { id },
      include: { skills: true, user: true },
    });
    context.pubSub.publish("CvDeleted", CvDeleted);

    return CvDeleted;
  
  }
};


