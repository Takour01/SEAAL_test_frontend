export type userRole = "Manager" | "Administrator"


class User {
  name: string;
  password: string;
  role: userRole
  constructor(name: string, password: string, role: userRole) {
    this.name = name;
    this.password = password;
    this.role = role
  }
}


export default User