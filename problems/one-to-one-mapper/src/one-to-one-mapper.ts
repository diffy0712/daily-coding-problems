/**
 * The Problem
 *
 * Good morning! Here's your coding interview problem for today.
 * This problem was asked by __Bloomberg__.
 * Determine whether there exists a one-to-one character mapping from one string s1 to another s2.
 *
 * For example, given s1 = abc and s2 = bcd, return true since we can map a to b, b to c, and c to d.
 * Given s1 = foo and s2 = bar, return false since the o cannot map to two characters.
 */
const hasOneToOneCharacterMapping = (s1: string, s2: string): boolean => {

    if ( typeof s1 !== 'string' || typeof s2 !== 'string') {
        throw new NonStringInputError('Map must have string arguments.');
    }

    const s1Length = s1.length;
    const s2Length = s2.length;

    if (s1Length !== s2Length) {
        return false;
    }

    for (let i = 0; i < s1Length; i++) {
        if (hasOneToManyMappingForCharAtIndex(s1, s2, i)) {
            return false;
        }
        if (hasOneToManyMappingForCharAtIndex(s2, s1, i)) {
            return false;
        }
    }

    return true;
}

export const hasOneToManyMappingForCharAtIndex = (s1: string, s2: string, charIndex: number): boolean => {
    for (let k = 0; k < s1.length; k++) {
        if (k !== charIndex && s1[k] === s1[charIndex] && s2[k] !== s2[charIndex]) {
            return true;
        }
        if (k !== charIndex && s2[k] === s2[charIndex] && s1[k] !== s1[charIndex]) {
            return true;
        }
    }

    return false;
}


export class NonStringInputError extends Error{
    constructor(message: string) {
        super(message); // (1)
        this.name = "MapNonStringInputError"; // (2)
    }
}


export default hasOneToOneCharacterMapping;
