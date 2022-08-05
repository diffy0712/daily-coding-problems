import hasOneToOneCharacterMapping, { NonStringInputError, hasOneToManyMappingForCharAtIndex } from './one-to-one-mapper';

describe('hasOneToOneCharacterMapping', () => {
    test('Throw hasOneToOneCharacterMappingNonStringInputError on non string inputs', () => {
        const fakeObj: any = new Object();
        expect(() => hasOneToOneCharacterMapping(fakeObj, fakeObj)).toThrowError(NonStringInputError);
    });

    test('False on different length inputs', () => {
        expect(hasOneToOneCharacterMapping('asd','asdasdasd')).toBeFalsy();
        expect(hasOneToOneCharacterMapping('asdasd','asd')).toBeFalsy();
        expect(hasOneToOneCharacterMapping('','asd')).toBeFalsy();
    });

    test('True for the same string', () => {
        expect(hasOneToOneCharacterMapping('asd', 'asd')).toBeTruthy();
        expect(hasOneToOneCharacterMapping('asdasd', 'asdasd')).toBeTruthy();
    });

    test('False for mapping one to many', () => {
        expect(hasOneToOneCharacterMapping('foo', 'asd')).toBeFalsy();
    });

    test('False for mapping many to one', () => {
        expect(hasOneToOneCharacterMapping('asd', 'foo')).toBeFalsy();
    });

    test('First example: given s1 = abc and s2 = bcd, return true since we can map a to b, b to c, and c to d.', () => {
        expect(hasOneToOneCharacterMapping('abc', 'bcd')).toBeTruthy();
    });

    test('Second example: given s1 = foo and s2 = bar, return false since the o cannot map to two characters.', () => {
        expect(hasOneToOneCharacterMapping('foo', 'bar')).toBeFalsy();
    });
});

describe('hasOneToManyMappingForCharAtIndex', () => {
    test('False for greather index than the length of the strings', () => {
        expect(hasOneToManyMappingForCharAtIndex('asd', 'asd', 6)).toBeFalsy();
    });
    test('False for smaller index than 0 and below', () => {
        expect(hasOneToManyMappingForCharAtIndex('foo', 'asd', 0)).toBeFalsy();
        expect(hasOneToManyMappingForCharAtIndex('foo', 'asd', -2)).toBeFalsy();
    });
    test('True for a pair of string with oneToMany', () => {
        expect(hasOneToManyMappingForCharAtIndex('foo', 'asd', 1)).toBeTruthy();
        expect(hasOneToManyMappingForCharAtIndex('foo', 'asd', 2)).toBeTruthy();
    });
    test('True for a pair of string with manyToOne', () => {
        expect(hasOneToManyMappingForCharAtIndex('asd', 'foo', 1)).toBeTruthy();
        expect(hasOneToManyMappingForCharAtIndex('asd', 'foo', 2)).toBeTruthy();
    });
    test('False for a pair of string of oneToOne', () => {
        expect(hasOneToManyMappingForCharAtIndex('asd', 'kas', 0)).toBeFalsy();
        expect(hasOneToManyMappingForCharAtIndex('asd', 'kas', 1)).toBeFalsy();
        expect(hasOneToManyMappingForCharAtIndex('asd', 'kas', 2)).toBeFalsy();
    });
    test('True for a pair of string of oneToMany with Long strings', () => {
        expect(hasOneToManyMappingForCharAtIndex('asderfookgaamm', 'kaammeehcameeh', 0)).toBeTruthy();
        expect(hasOneToManyMappingForCharAtIndex('asderfookgaamm', 'kaammeehcameeh', 1)).toBeTruthy();
        expect(hasOneToManyMappingForCharAtIndex('asderfookgaamm', 'kaammeehcameeh', 8)).toBeFalsy();
        expect(hasOneToManyMappingForCharAtIndex('asderfookgaamm', 'kaammeehcameeh', 4)).toBeTruthy();
        expect(hasOneToManyMappingForCharAtIndex('asderfookgaamm', 'kaammeehcameeh', 7)).toBeTruthy();
    });
});
