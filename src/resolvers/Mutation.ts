export const Mutation = {
  addCv: (parent, { cvInput }, context, infos) => {
    const Db = context.db;
    const { skills, ...restOfCvInput } = cvInput;
    if (!Db.UserList.some((user) => user.id === cvInput.userId)) {
      throw new Error(`User d'id ${cvInput.userId} inexistant`);
    }
    if (
      skills &&
      !skills.every((skillId) =>
        Db.skillData.some((skill) => skill.id === skillId)
      )
    ) {
      throw new Error("One or more skill IDs are not valid.");
    } else {
      console.log("creation de cv");
      console.log(Db.CvList[Db.CvList.length - 1]);
      console.log(Db.CvList[Db.CvList.length - 1].id);

      const newCv = {
        id: Db.CvList[Db.CvList.length - 1].id + 1,
        ...restOfCvInput,
      };
      console.log(newCv);
      if (skills) {
        skills.forEach((skillId) => {
          const newCvSkillData = {
            cvId: newCv.id,
            skillId: skillId,
          };
          Db.cvSkillData.push(newCvSkillData);
        });
      }
      Db.CvList.push(newCv);
      context.pubSub.publish("Cv", newCv);
      return newCv;
    }
  },

  updateCv: (parent, { id, updatecvInput }, context, infos) => {
    const Db = context.db;
    const cv = Db.CvList.find((cv) => cv.id === id);

    if (!cv) {
      throw new Error(`cv d'id ${id} inexistant`);
    }
    if (updatecvInput.userId) {
      if (!Db.UserList.some((user) => user.id === updatecvInput.userId)) {
        throw new Error(`User d'id ${updatecvInput.userId} inexistant`);
      }
    }
    if (updatecvInput.skills) {
      if (
        !updatecvInput.skills.every((skillId) =>
          Db.skillData.some((skill) => skill.id === skillId)
        )
      ) {
        throw new Error("One or more skill IDs are not valid.");
      }
      // Supprimer tous les cvSkillData existants pour ce CV
      Db.cvSkillData = Db.cvSkillData.filter(
        (cvSkillData) => cvSkillData.cvId !== id
      );
      // Ajouter de nouveaux cvSkillData pour chaque ID de compétence dans updatecvInput.skills

      updatecvInput.skills.forEach((skillId) => {
        const newCvSkillData = {
          cvId: id,
          skillId: skillId,
        };
        Db.cvSkillData.push(newCvSkillData);
      });
    }

    for (let key in updatecvInput) {
      cv[key] = updatecvInput[key];
    }
    context.pubSub.publish("CvUpdated", cv);

    return cv;
  },

  deleteCv: (parent, { id }, context, infos) => {
    const Db = context.db;
    const indexCv = Db.CvList.findIndex((cv) => cv.id === id);
    if (indexCv === -1) {
      throw new Error(`cv d'id ${id} inexistant`);
    } else {
      const [cv] = Db.CvList.splice(indexCv, 1);
      // Remove all cvSkillData for this CV
      Db.cvSkillData = Db.cvSkillData.filter(
        (cvSkillData) => cvSkillData.cvId !== id
      );
      context.pubSub.publish("CvDeleted", cv);
      //Ici les skills de ce cv ne sont pas affichées 
      return cv;
    }
  },
};
