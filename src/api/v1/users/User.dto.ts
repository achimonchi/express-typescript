class UserDto {
    public email: string;
    public fullname: string;
    public majors: string;

    constructor(email: string, fullname: string, majors: string){
        this.email = email;
        this.fullname = fullname;
        this.majors = majors;
    }

    public setEmail(email:string): void {
        this.email = email;
    }

    public setFullname(fullname:string): void {
        this.fullname = fullname;
    }

    public setMajors(majors:string): void {
        this.majors = majors;
    }

    public getEmail(): string {
        return this.email;
    }

    public getFullname(): string {
        return this.fullname;
    }

    public getMajors(): string {
        return this.majors;
    }

    public validate(): object{
        let err = [];

        if(!this.email){
            err.push("Email");
        }

        if(!this.fullname){
            err.push("Fullname")
        }

        if(!this.majors){
            err.push("Majors")
        }

        if (err.length > 0){
            return {
                flag : false,
                msg: err.join(",") + " must be provided !",
            }
        } else {
            return {
                flag : true
            }
        }
    }
}

export default UserDto;