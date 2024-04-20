export class Db {
 UserList = [
  {
    id: 1,
    name: "aymen",
    email: "aymain@gmail.con",
    role: "ADMIN",
    cvs: [1],
  },
  {
    id: 2,
    name: "jihen",
    email: "jihen@gmail.com",
    role: "USER",
    cvs: [2, 3],
  },
  {
    id: 3,
    name: "mohamed",
    email: "mohamed@yahoo.com",
    role: "USER",
    cvs: [4],
  },
];
  CvList = [
  {
    id: 1,
    name: "cv aymen",
    age: 12,
    job: "developpeur",
    user: 1,
    skills: [1, 2],
  },
  {
    id: 2,
    name: "cv jihen",
    age: 34,
    job: "ingenieur",
    user: 2,
    skills: [3, 4],
  },
  {
    id: 3,
    name: "cv jihen2",
    age: 60,
    job: "ingenieur",
    user: 2,
    skills: [5, 6],
  },
  {
    id: 4,
    name: "cv mohamed",
    age: 10,
    job: "professeur",
    user: 3,
    skills: [7, 8],
  },
];
 skillData = [
    { id: 1, description: 'Compétence 1', cv: [1,2] },
    // { id: 2, description: 'Compétence 2', cv: 1 },
    // { id: 3, description: 'Compétence 3', cv: 2 },
    // { id: 4, description: 'Compétence 4', cv: 2 },
    // { id: 5, description: 'Compétence 5', cv: 3 },
    // { id: 6, description: 'Compétence 6', cv: 3 },
    // { id: 7, description: 'Compétence 7', cv: 3 },
    // { id: 8, description: 'Compétence 8', cv: 4 },
  ];
}