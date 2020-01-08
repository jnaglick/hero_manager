export enum Attribute {
    STR = 'str',
    AGL = 'agl',
    MAG = 'mag',
    SPD = 'spd'
    // hp skill (con) ?
    // mp skill ?
}

export type AttributeSet<T> = {
    readonly [k in Attribute]: T
}

type AttributeLevel = number;
export type AttributeLevels = AttributeSet<AttributeLevel>;

export default Attribute
