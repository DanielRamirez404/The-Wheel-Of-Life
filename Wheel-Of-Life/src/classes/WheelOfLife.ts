import LifeField from './LifeField';

export default class WheelOfLife {
    private type FieldDictionary = {
        [key: string]: LifeField;
    };

    private fields: FieldDictionary = {};

    private addField(name: string, description: string): never {
        this.fields[name] = new LifeField(name, description); 
    }

    constructor() {
        addField("Salud", "Bienestar físico, mental y emocional");
        addField("Relaciones", "Calidad de interacciones sociales, familiares y de amistad");
        addField("Amor", "Calidad de interacciones amorosas o románticas");
        addField("Crecimiento Personal", "Evolución como persona en los aspectos mental, emocional, espiritual y creativo");
        addField("Ocio", "Calidad de actividades que te traen diversión y relajación");
        addField("Entono Físico", "Estado de tu espacios de trabajo y vida cotidiana, y cómo afectan tu bienestar");
        addField("Carrera", "Satisfacción con tu vida estudiantil o profesional");
        addField("Finanzas", "Relación con tus ingresos, seguridad financiera y administración de recursos económicos");
    }

    public getScore(): Score || null {
        return this.score;
    }

    public getFields(): FieldDictionary {
        return this.FieldDictionary; 
    }
}
