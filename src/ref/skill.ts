enum Family {
    MeleeWeapons = 'Melee Weapons',
    RangedWeapons = 'Ranged Weapons',

    Fighting = 'Fighting',
    Magic = 'Magic',
    Trickery = 'Trickery'
}
export const SkillFamily = Family

export class Skill {
    readonly name: String;
    readonly family?: Family | Array<Family>;

    constructor(name: String,
                family?: Family | Array<Family>
    ) {
        this.name = name;
        this.family = family;
    }
}

export namespace Skills {
    export const Daggers = new Skill(
        'Daggers',
        Family.MeleeWeapons
    );

    export const Swords = new Skill(
        'Swords',
        Family.MeleeWeapons
    );

    export const Bludg = new Skill(
        'Bludgeoning Weapons',
        Family.MeleeWeapons
    );

    export const Bows = new Skill(
        'Bows',
        Family.RangedWeapons
    );

    export const Evasion = new Skill(
        'Evasion',
        Family.Trickery
    );

    export const Sneaking = new Skill(
        'Sneaking',
        Family.Trickery
    )
}

type SkillLevel =
   0 |  1 |  2 |  3 |  4 |  5 |  6 |  7 |  8 |  9
| 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19
| 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29
| 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39
| 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49
| 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59
| 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69
| 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79
| 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89
| 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99

interface SkillLevelRequirement {
    level: SkillLevel
}

interface SkillRequirement extends SkillLevelRequirement {
    skill: Skill
}

interface SkillFamilyRequirement extends SkillLevelRequirement {
    family: Family
}

export type SkillRequirements = SkillRequirement | SkillFamilyRequirement | Array<SkillRequirement | SkillFamilyRequirement>

export default Skills