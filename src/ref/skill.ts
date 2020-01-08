export enum Skill {
    Fighting = 'fighting',
    Acrobatics = 'arcobatics',
    Spellcasting = 'spellcasting',
    /*
        Defense = 'defense',
        Evasion = 'evasion',
        Armour = 'armour',
        Stabbing = 'stabbing',
        Slashing = 'slashing',
        Bludgeoning = 'bludg',
        Archery = 'archery',
        Stealth = 'stealth',
        Awareness = 'awareness',
        LootFinding = 'lootfinding',
        FirstAid = 'firstaid',

        AirMagick = 'air',
        EarthMagick = 'earth',
        FireMagick = 'fire',
        WaterMagick = 'water',
        EtherealMagick = 'ethereal',
        UmbralMagick = 'umbral',
    */
}

type SkillSet<T> = {
    readonly [k in Skill]: T
}

type SkillLevel = number;
export type SkillLevels = SkillSet<SkillLevel>;

interface SkillDictionaryEntry {
    readonly name: string;
    readonly desc: string;
}
export const SkillDictionary: SkillSet<SkillDictionaryEntry> = {
    [Skill.Fighting]: {
        name: 'Fighting',
        desc: 'Melee attacking'
    },
    [Skill.Acrobatics]: {
        name: 'Acrobatics',
        desc: 'Agile things'
    },
    [Skill.Spellcasting]: {
        name: 'Spellcasting',
        desc: 'Casting spells'
    }
}

export default Skill

/*
    'Defense',
    'Melee defending'

    'Evasion',
    'Dodging and elusiveness'

    'Armour',
    'Do things while wearing armour'

    'Stabbing',
    'The fine art of stabbing'

    'Slashing',
    'Swinging a sword'

    'Bludgeoning',
    'Hitting things'

    'Archery',
    'Shooting things'

    'Stealth',
    'Becoming undetectable'

    Skill.Awareness,
    'Awareness and Perception'

    Skill.LootFinding,
    'Loot Find'

    'First Aid',
    'Assist injured comrades'
*/
