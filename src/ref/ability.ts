export enum Ability {
    Berserk = 'berserk',
    Backstab = 'backstab',
    Parry = 'parry'
    // turtle
    // whirlwind
    // sneak
    // hide
}

export type AbilitySet<T> = {
    readonly [k in Ability]: T
}

interface AbilityDictionaryEntry {
    readonly name: string;
    // desc
    // requirements
}
export const AbilityDictionary: AbilitySet<AbilityDictionaryEntry> = {
    [Ability.Berserk]: {
        name: 'Berserk'
    },
    [Ability.Backstab]: {
        name: 'Backstab'
    },
    [Ability.Parry]: {
        name: 'Parry'
    }
}

export default Ability