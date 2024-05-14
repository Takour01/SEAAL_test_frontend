class Manager {
  name: string;
  id: number;
  occurrence: 1 | 2;
  constructor(name: string, id: number, occurrence: 1 | 2) {
    this.name = name;
    this.id = id;
    this.occurrence = occurrence;
  }
}


export default Manager