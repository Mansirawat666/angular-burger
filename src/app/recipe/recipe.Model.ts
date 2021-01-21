export class RecipeModel{
    public name : String;
    public description : String;
    public ImageUrl : String;

    constructor(name : String , description : String , ImageUrl : String){

        this.name=name;
        this.description=description;
        this.ImageUrl=ImageUrl;

    }
}