  export class Gituser {
    public showRepositoryname: boolean;
    constructor (public id: number, public username: string,public repositoryname: string, public completeDate: Date){
      this.showRepositoryname=false;
    }
  }