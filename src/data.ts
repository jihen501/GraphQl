export class Db {
 UserList = [
  {
    id:1,
    name: "aymen",
    email: "aymain@gmail.con",
    role: "ADMIN",
  },
  {
    id:2,
    name: "jihen",
    email: "jihen@gmail.com",
    role: "USER",
  },
  {
    id:3,
    name: "mohamed",
    email: "mohamed@yahoo.com",
    role: "USER",
  },
];
  CvList = [
  {
    id:1,
    name: "cv aymen",
    age: 12,
    job: "developpeur",
    userId: 1,
  },
  {
    id:2,
    name: "cv jihen",
    age: 34,
    job: "ingenieur",
    userId:2,
  },
  {
    id:3,
    name: "cv jihen2",
    age: 60,
    job: "ingenieur",
    userId:2,
  },
  {
    id:4,
    name: "cv mohamed",
    age: 10,
    job: "professeur",
    userId:3,
  },
];
 skillData = [
    { id: 1, description: 'Compétence 1'},
    { id: 2, description: 'Compétence 2' },
    { id: 3, description: 'Compétence 3'},
    { id: 4, description: 'Compétence 4'},
    { id: 5, description: 'Compétence 5'},
    { id: 6, description: 'Compétence 6' },
    { id: 7, description: 'Compétence 7' },
    { id: 8, description: 'Compétence 8'},
  ];
   cvSkillData = [
    { cvId: 1, skillId: 1 },
    { cvId: 1, skillId: 2 },
    { cvId: 2, skillId: 1 },
    { cvId: 2, skillId: 3 },
    { cvId: 3, skillId: 5 },
    { cvId: 3, skillId: 6 },
    { cvId: 4, skillId: 7 },
    { cvId: 4, skillId: 8 },
  ];
}