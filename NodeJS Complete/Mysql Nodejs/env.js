export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT); 

import {z, ZodError} from 'zod';

const ageSchema = z.number().min(18).max(100).int().positive();
const userAge = 17;
// const parseUserAge = ageSchema.parse(userAge);
// console.log(parseUserAge);

try {
  const parsedUserAge = ageSchema.parse(userAge)
  console.log(parsedUserAge)
} catch (error) {
  if(error instanceof ZodError){ // er ortho hocche jei error amra pacchi seta ki ZodError er ? 
    console.log(error.issues[0].message)
  }else {
    console.log("Unexpected error: ", error)
  }
}
