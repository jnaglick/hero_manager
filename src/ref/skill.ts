export enum Skill {
    Fighting = 'fighting',
    Defense = 'defense',
    Evasion = 'evasion',
    Armour = 'armour',

    Stabbing = 'stabbing',
    Slashing = 'slashing',
    Bludgeoning = 'bludg',
    Archery = 'archery',

    AirMagick = 'air',
    EarthMagick = 'earth',
    FireMagick = 'fire',
    WaterMagick = 'water',
    EtherealMagick = 'ethereal',
    UmbralMagick = 'umbral',

    Stealth = 'stealth',
    Awareness = 'awareness',
    LootFinding = 'lootfinding',
    FirstAid = 'firstaid'
}

/*
    build ideas (4 and 8 skill)

    tank
        bludgeoning     evasion
        fighting        awareness
        armour          lootfinding
        defense         firstaid

    mage
        fire        earth
        umbral      air
        defense     ethereal
        evasion     armor

    healer
        ethereal    water
        air         firstaid
        defense     awareness
        evasion     armor

    dps
        stabbing    defense
        fighting    armor
        stealth     awareness
        evasion     lootfinding
*/

type SkillLevel = number

interface ISkillRequirement {
    skill: Skill
    level: SkillLevel,
}

export type SkillRequirement = 
    | ISkillRequirement 
    | Array<ISkillRequirement>

export interface SkillSet {
    [Skill.Fighting]: SkillLevel,
    [Skill.Defense]: SkillLevel,
    [Skill.Evasion]: SkillLevel,
    [Skill.Armour]: SkillLevel,

    [Skill.Stabbing]: SkillLevel,
    [Skill.Slashing]: SkillLevel,
    [Skill.Bludgeoning]: SkillLevel,
    [Skill.Archery]: SkillLevel,

    [Skill.AirMagick]: SkillLevel,
    [Skill.EarthMagick]: SkillLevel,
    [Skill.FireMagick]: SkillLevel,
    [Skill.WaterMagick]: SkillLevel,
    [Skill.EtherealMagick]: SkillLevel,
    [Skill.UmbralMagick]: SkillLevel,

    [Skill.Stealth]: SkillLevel,
    [Skill.Awareness]: SkillLevel,
    [Skill.LootFinding]: SkillLevel,
    [Skill.FirstAid]: SkillLevel,
}

class SkillClass {
    readonly id: Skill;
    readonly name: string;
    readonly desc?: string;

    constructor(id: Skill,
                name: string,
                description?: string
    ) {
        this.id = id;
        this.name = name;
        this.desc = description;
    }
}

export namespace Skills {
    export const Fighting = new SkillClass(
        Skill.Fighting,
        'Fighting',
        'Melee attacking'
    );

    export const Defense = new SkillClass(
        Skill.Defense,
        'Defense',
        'Melee defending'
    );

    export const Evasion = new SkillClass(
        Skill.Evasion,
        'Evasion',
        'General dodging'
    );

    export const Armour = new SkillClass(
        Skill.Armour,
        'Armour',
        'Do things while wearing armour'
    );

    /*
        TODO...
        Stabbing = 'stabbing',
        Slashing = 'slashing',
        Bludgeoning = 'bludg',
        Archery = 'archery',

        AirMagick = 'air',
        EarthMagick = 'earth',
        FireMagick = 'fire',
        WaterMagick = 'water',
        EtherealMagick = 'ethereal',
        UmbralMagick = 'umbral',

        Stealth = 'stealth',
        Awareness = 'awareness',
        LootFinding = 'lootfinding',
        FirstAid = 'firstaid'
    */
}  

export default Skills