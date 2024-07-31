const password = process.env.PASSWORD as string;

export class User {
    email: string;
    password: string;
  
    constructor(email: string, password: string) {
      this.email = email;
      this.password = password;
    }
}

export const users = {
    testUser: new User('test@gmail.com', password),
    notValidUser: new User('admin@gmail.com', '2312')
};