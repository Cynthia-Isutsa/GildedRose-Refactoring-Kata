import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should update all items correctly including Conjured', () => {
    const gildedRose = new GildedRose([
      new Item('foo', 5, 10),
      new Item('Aged Brie', 2, 0),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      new Item('Conjured Mana Cake', 3, 6),
    ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(9);
    expect(items[0].sellIn).toBe(4);

    expect(items[1].quality).toBe(1);
    expect(items[1].sellIn).toBe(1);

    expect(items[2].quality).toBe(21);
    expect(items[2].sellIn).toBe(14);

    expect(items[3].quality).toBe(80);
    expect(items[3].sellIn).toBe(0);

    expect(items[4].quality).toBe(4);
    expect(items[4].sellIn).toBe(2);
  });
});
