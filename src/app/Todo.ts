export class Todo{
    sno:number
    title:string
    desc:string
    completed:boolean

    constructor(sno:number,title:string,desc:string,completed:boolean){
        this.sno=sno
        this.title=title
        this.desc=desc
        this.completed=completed
    }
}