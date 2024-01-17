import { husher } from '../src/Husher';

test('husher.hush', async () => {
    const input = 'hello world';
    const expected = `󠁨󠁥󠁬󠁬󠁯󠀠󠁷󠁯󠁲󠁬󠁤`;
    const output = husher.hush(input);
    expect(output.length).toEqual(22);
    // output.split('').map(x=>x.charCodeAt(0))
    expect(output).toEqual(expected);
});

test('husher.dehush', async () => {
    const input = `󠁨󠁥󠁬󠁬󠁯󠀠󠁷󠁯󠁲󠁬󠁤`;
    const expected = '｀h,｀e,｀l,｀l,｀o,｀ ,｀w,｀o,｀r,｀l,｀d';
    const output = husher.dehush(input).join();
    expect(output.length).toEqual(expected.length);
    // output.split('').map(x=>x.charCodeAt(0))
    expect(output).toEqual(expected);
});

test('husher.dehush - no separator', async () => {
    const input = `󠁨󠁥󠁬󠁬󠁯󠀠󠁷󠁯󠁲󠁬󠁤`;
    const expected = 'hello world';
    const output = husher.dehush(input, true).join('');
    expect(output.length).toEqual(expected.length);
    // output.split('').map(x=>x.charCodeAt(0))
    expect(output).toEqual(expected);
});

test('husher.sanitize', async () => {
    const input = `yo, 󠁨󠁥󠁬󠁬󠁯󠀠󠁷󠁯󠁲󠁬󠁤`;
    const expected = 'yo, hello world';
    const output = husher.sanitize(input);
    expect(output.length).toEqual(expected.length);
    // output.split('').map(x=>x.charCodeAt(0))
    expect(output).toEqual(expected);
});

test('husher.sanitize-flag', async () => {
    const inputPoisoned = `🇮🇱󠁨󠁥󠁬󠁬󠁯`;
    const expected = '🇮🇱hello';
    const output = husher.sanitize(inputPoisoned);
    expect(output.length).toEqual(expected.length);
    expect(output).toEqual(expected);
});

test('husher.sanitize-mix', async () => {
    const inputPoisoned = `hello world from 🇮🇱 שלום לכם!󠁨󠁥󠁬󠁬󠁯`;
    const expected = 'hello world from 🇮🇱 שלום לכם!hello';
    const output = husher.sanitize(inputPoisoned);
    expect(output.length).toEqual(expected.length);
    expect(output).toEqual(expected);
});