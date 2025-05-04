import LifeField from './LifeField';

type FieldDictionary = { [key: string]: LifeField };

export default class WheelOfLife {
    private fields: FieldDictionary = {};

    private addField(name: string, description: string): never {
        this.fields[name] = new LifeField(name, description); 
    }

    constructor() {
        this.addField("Salud", "Bienestar físico, mental y emocional");
        this.addField("Relaciones", "Calidad de interacciones sociales, familiares y de amistad");
        this.addField("Amor", "Calidad de interacciones amorosas o románticas");
        this.addField("Crecimiento Personal", "Evolución como persona en los aspectos mental, emocional, espiritual y creativo");
        this.addField("Ocio", "Calidad de actividades que te traen diversión y relajación");
        this.addField("Entorno Físico", "Estado de tu espacios de trabajo y vida cotidiana, y cómo afectan tu bienestar");
        this.addField("Carrera", "Satisfacción con tu vida estudiantil o profesional");
        this.addField("Finanzas", "Relación con tus ingresos, seguridad financiera y administración de recursos económicos");
    }

    public setField(name: string, score: number): never {
        this.fields[name].setScore(score);
    }

    public getFields(): FieldDictionary {
        return this.FieldDictionary; 
    }
}
