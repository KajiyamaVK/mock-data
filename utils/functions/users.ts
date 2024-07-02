import { User } from "../../models/user";
import {faker } from "@faker-js/faker"


/**
 * Generates a list of 200 fake users with random data.
 *
 * @return {User[]} The list of faked users
 */
export function getListOfFakedUsers():User[]{
  const usersListCreated:User[] =[] 

  for(let i = 0 ; i<200 ; i++){
    const user:User = {
      id:  crypto.randomUUID(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      dateOfBirth: faker.date.birthdate(),
      email:faker.internet.email(),
      createdAt:faker.date.past(),
      updatedAt:faker.date.between(this.createdAt, new Date())
    }

    usersListCreated.push(user)
  }

  return usersListCreated
}