import map from './one-to-one-mapper';

const render = async (args: string[]): Promise<void> => {
    console.log('\nHello from Problem #1 [Easy]', 'args:', args);
    console.log('\nDetermine whether there exists a one-to-one character mapping from one string s1 to another s2.');
    console.log('For example, given s1 = abc and s2 = bcd, return true since we can map a to b, b to c, and c to d.');
    console.log('Given s1 = foo and s2 = bar, return false since the o cannot map to two characters.\n');
    const s1 = args[2];
    const s2 = args[3];

    console.log(`s1=${s1}, s2=${s2}`);

    const result = map(s1, s2);

    console.log(`\nThe result is: ${result}\n`);
}

render(process.argv);
