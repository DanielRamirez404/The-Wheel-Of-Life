import LifeField from './LifeField';

export type FieldDictionary = { [key: string]: LifeField };

export default class WheelOfLife {
    private fields: FieldDictionary = {};
    private isFilled: boolean = false;

    private addField(name: string, description: string): void {
        this.fields[name] = new LifeField(name, description); 
    }

    private addDefaultFields() {
        this.addField("Salud", "Bienestar físico, mental y emocional");
        this.addField("Relaciones", "Calidad de interacciones sociales, familiares y de amistad");
        this.addField("Amor", "Calidad de interacciones amorosas o románticas");
        this.addField("Crecimiento Personal", "Evolución como persona en los aspectos mental, emocional, espiritual y creativo");
        this.addField("Ocio", "Calidad de actividades que te traen diversión y relajación");
        this.addField("Entorno Físico", "Estado de tu espacios de trabajo y vida cotidiana, y cómo afectan tu bienestar");
        this.addField("Carrera", "Satisfacción con tu vida estudiantil o profesional");
        this.addField("Finanzas", "Relación con tus ingresos, seguridad financiera y administración de recursos económicos");
    }

    constructor() {
        this.reset(); 
    }

    public setField(name: string, score: number): void {
        this.fields[name].setScore(score);
    }

    public getFields(): FieldDictionary {
        return this.fields; 
    }

    public isEmpty(): boolean {
        return !this.isFilled
    }

    public setAsFilled(): void {
        this.isFilled = true;
    }

    public reset(): void {
        this.isFilled = false;
        this.fields = {};
        this.addDefaultFields();
    }
}
