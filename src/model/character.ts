//import Ability from 'ref/ability'
import { AttributeSet } from 'ref/attribute'
import { SkillSet } from 'ref/skill'
import { VitalSet } from 'ref/vital'

export class Character {
    // abilities
    attributes: AttributeSet
    skills: SkillSet
    vitals: VitalSet

    constructor() {
        this.attributes = { 
            str: 0, 
            agl: 0, 
            mag: 0 
        };

        this.skills = { 
            fighting: 0,
            defense: 0,
            armour: 0,
            evasion: 0,

            stabbing: 0,
            slashing: 0,
            bludg: 0,
            archery: 0,

            air: 0,
            earth: 0,
            fire: 0,
            water: 0,
            ethereal: 0,
            umbral: 0,

            stealth: 0,
            awareness: 0,
            lootfinding: 0,
            firstaid: 0
        }

        this.vitals = { 
            hp: 0,
            ep: 0, 
            mp: 0 
        }
    }
}

export default Character;