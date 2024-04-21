import { GraphQLError } from "graphql";

export const Query = {
  getCvs: (parent: any, args: any, context: any, info: any) => {
    return context.db.CvList;
  },

  getCvsById: (parent: any, args: any, context: any, info: any) => {
    const cv = context.db.CvList.find((cv: any) => cv.id === args.id);
    if (cv) return cv;
    else throw new GraphQLError(`Element with id '${args.id}' not found.`);
  },
};
export const Cv = {
  user: (parent: any, args: any, context: any, info: any) => {
    const user = context.db.UserList.find(
      (user: any) => user.id === parent.userId
    );
    return user;
  },
  skills: (parent: any, args: any, context: any, info: any) => {
    const data = context.db;
    const cvSkills = data.cvSkillData.filter(a => a.cvId === parent.id).map(a => a.skillId);
    const skills = data.skillData.filter(skill => cvSkills.includes(skill.id));
    return skills;
  }
};
 


