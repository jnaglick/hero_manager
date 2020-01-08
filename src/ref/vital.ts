export enum Vital {
    HP = 'hp',
    EP = 'ep',
    MP = 'mp',
}

export type VitalSet<T> = {
    readonly [k in Vital]: T
}

type VitalLevel = number;
export type VitalLevels = VitalSet<VitalLevel>;

export default Vital
