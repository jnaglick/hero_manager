import { SkillRequirement } from './skill'

class SpellClass {
    readonly name: string;
    readonly skillRequirement: SkillRequirement;
    
    constructor(name: string, skillRequirement: SkillRequirement) {
        this.name = name;
        this.skillRequirement = skillRequirement;
    }
}

export enum Spell {
    FireBolt = 'firebolt'
}

export namespace Spells {
/*    
    [Skill.AirMagick]: SkillLevel,
    [Skill.EarthMagick]: SkillLevel,
    [Skill.FireMagick]: SkillLevel,
    [Skill.WaterMagick]: SkillLevel,
    [Skill.EtherealMagick]: SkillLevel,
    [Skill.UmbralMagick]: SkillLevel,
*/

    export const FireBolt = new SpellClass(
        'Fire Bolt',
        []
    ) 
}

/*
    firebolt
    fireball
    firestorm
    icestorm

    fissure // earth attackAoe
*/