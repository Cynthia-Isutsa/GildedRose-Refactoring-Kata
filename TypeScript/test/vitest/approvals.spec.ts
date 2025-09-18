import { execSync } from 'node:child_process';
import { Item, GildedRose } from '@/gilded-rose';

/**
 * This test uses Vitest Snapshot, similar to [Jest Snapshot](https://goo.gl/fbAQLP).
 *
 * There are two test cases here with different styles:
 * <li>"foo" is more similar to the unit test from the 'Java' version
 * <li>"thirtyDays" is more similar to the TextTest from the 'Java' version
 *
 * I suggest choosing one style to develop and deleting the other.
 */

describe('Gilded Rose Approval', () => {
  it('should handle a single item correctly', () => {
    const gildedRose = new GildedRose([
      new Item('foo', 0, 0),
      new Item('Aged Brie', 2, 0),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      new Item('Conjured Mana Cake', 3, 6),
    ]);

    const items = gildedRose.updateQuality();
    expect(items).toMatchSnapshot();
  });

  it('should simulate thirty days correctly', () => {
    const consoleOutput = execSync(
      'ts-node test/golden-master-text-test.ts 30',
      { encoding: 'utf-8' }
    );

    expect(consoleOutput).toMatchSnapshot();
  });
});
