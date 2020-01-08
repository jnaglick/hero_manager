export enum Spell {
    Fireball = 'fireball',
    Firestorm = 'firestorm',
    Fissure = 'fissure'
}

export enum SpellFamily {
    Air = 'air',
    Earth = 'earth',
    Fire = 'fire',
    Water = 'water',
    Ethereal = 'ethereal',
    Umbral = 'umbral'
}

type SpellSet<T> = {
    readonly [k in Spell]: T
}

interface SpellDictionaryEntry {
    readonly name: string;
    readonly family: SpellFamily | Array<SpellFamily>;
    readonly desc?: string;
}
export const SpellDictionary: SpellSet<SpellDictionaryEntry> = {
    // spark
    [Spell.Fireball]: {
        name: 'Fireball',
        family: SpellFamily.Fire,
        desc: 'fireball'
    },
    [Spell.Firestorm]: {
        name: 'Firestorm',
        family: [SpellFamily.Fire, SpellFamily.Air],
        desc: 'firestorm'
    },
    [Spell.Fissure]: {
        name: 'Fissure',
        family: [SpellFamily.Fire, SpellFamily.Earth],
        desc: 'fissure'
    }
    // icestorm
}

export default Spell
