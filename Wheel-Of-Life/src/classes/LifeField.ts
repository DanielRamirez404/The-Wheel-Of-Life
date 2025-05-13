import Score from './Score';

export default class LifeField {
    private score: Score | null = null;
    private name: string = "";
    private description: string = ""; 

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    public setScore(value: number): void {
        this.score = new Score(value);
    }

    public getScore(): Score | null {
        return this.score;
    }

    public getName(): string {
        return this.name; 
    }
    
    public getDescription(): string {
        return this.description; 
    }
}
