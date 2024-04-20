import { GraphQLError } from "graphql";

export const Query = {

    getCvs: (parent: any, args: any, context: any, info: any) => {return context.db.CvList;}, 
    getCvsById: (parent: any, args: any, context: any, info: any) => {
        const cv = context.db.CvList.find((cv: any) => cv.id === args.id);
        if(cv) return cv;
        else throw new GraphQLError(`Element with id '${args.id}' not found.`);
    },
    getSkillsByCvId: (parent: any, args: any, context: any, info: any) => {
        const skills= context.db.skillData.filter((skill: any) => skill.cv.includes(args.cv) );
        console.log(skills);
        
        if(skills.lenght===0) return skills;
        else throw new GraphQLError(`Element with id '${args.id}' not found.`);

    },
    // getUserByCvId: (parent: any, args: any, context: any, info: any) => {
    //     const user= context.db.UserList.find((user: any) => user.id === args.id);
    //     if(user) return user;
    //     else throw new GraphQLError(`Element with id '${args.id}' not found.`);
    // },
    Cv: {
    user: (parent: any, args: any, context: any, info: any) => {
      const user = context.db.UserList.find((user: any) => user.id === parent.user);
      console.log(user);
      return user;
    },
  },
    
}
