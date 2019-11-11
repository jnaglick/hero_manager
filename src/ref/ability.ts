import Skill, { SkillFamily, SkillRequirements } from './skill'

export class Ability {
    readonly name: String;
    readonly requirements?: SkillRequirements;

    constructor(name: String,
                requirements?: SkillRequirements
    ) {
        this.name = name;
        this.requirements = requirements;
    }
}

export namespace Abilities {
/*
    Move,
    Consume,
    Throw,
    Attack,
    CastSpell,

    Berserk,
    Whirlwind,
    Sneak,
    Invis,
    Backstab,
*/
    export const Attack = new Ability(
        'Attack',
        {
            family: SkillFamily.MeleeWeapons,
            level: 1
        }
    );

    export const Backstab = new Ability(
        'Backstab',
        [{
            skill: Skill.Daggers,
            level: 20
        }, {
            skill: Skill.Sneaking,
            level: 20
        }]
    )
}

export default Abilities