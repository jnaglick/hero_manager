import { Skill, SkillRequirement } from 'ref/skill'

export class Ability {
    readonly name: String;
    readonly requirements?: SkillRequirement;

    constructor(name: String,
                requirements?: SkillRequirement
    ) {
        this.name = name;
        this.requirements = requirements;
    }
}

export namespace Abilities {
/*
    Move, Attack, Cast, Consume

    Parry,
    Berserk,
    Whirlwind, 
    Sneak,
    Hide/Invis,
    Backstab,
*/
    export const Move = new Ability(
        'Move'
    );

    export const Backstab = new Ability(
        'Backstab',
        [{
            level: 30,
            skill: Skill.Stabbing
        },
        {
            level: 30,
            skill: Skill.Stealth
        }]
    )
}

export default Abilities