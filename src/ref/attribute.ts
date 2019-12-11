export enum Attribute {
    STR = 'str',
    AGL = 'agl',
    MAG = 'mag'
}

export interface AttributeSet {
    [Attribute.STR]: number,
    [Attribute.AGL]: number,
    [Attribute.MAG]: number,
}
