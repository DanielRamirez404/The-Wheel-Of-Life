export default class Score {
    private value: number = 0;
    private description: string = "";

    constructor(value: number) {
        if (value < 0 || value > 10)
            throw new Error("The score value must be within the range of 0 to 10");
        
        this.value = value;

        switch (value) {
            case 0:
                this.description = "No te sientes satisfecho con esta área en absoluto";
                break;

            case 1:
            case 2:
                this.description = "Apenas sientes satisfacción con esta área"; 
                break;

            case 3:
            case 4:
                this.description = "Posees algo de satisfacción con esta área"; 
                break;
            
            case 5:
                this.description = "Sientes una satisfacción moderada de esta área"; 
                break;

            case 6:
            case 7:
                this.description = "Posees una buena satisfacción con esta área"; 
                break;
            
            case 8:
            case 9:
                this.description = "Sientes una enorme satisfacción con esta área";
                break;

            case 10:
                this.description = "Te sientes totalmente satisfecho con esta área";
                break;


            default:
                break;
        }
    }


    public getValue(): number {
        return this.value;
    }

    public getDescription(): string {
        return this.description;
    }
}
