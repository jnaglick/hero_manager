export enum Vital {
    HP = 'hp',
    EP = 'ep',
    MP = 'mp',
}

export interface VitalSet {
    [Vital.HP]: number,
    [Vital.EP]: number,
    [Vital.MP]: number
}
