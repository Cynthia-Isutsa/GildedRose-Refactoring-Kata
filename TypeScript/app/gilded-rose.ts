export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const isConjured = item.name.toLowerCase().includes('conjured'); 
      const degradation = isConjured ? 2 : 1;

      if (item.name !== 'Aged Brie' && item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > 0) {
          if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            item.quality -= degradation;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality += 1;
          if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11 && item.quality < 50) item.quality += 1;
            if (item.sellIn < 6 && item.quality < 50) item.quality += 1;
          }
        }
      }

      if (item.name !== 'Sulfuras, Hand of Ragnaros') {
          this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      if (item.sellIn < 0) {
        if (item.name !== 'Aged Brie') {
          if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0 && item.name !== 'Sulfuras, Hand of Ragnaros') {
              item.quality -= degradation; 
            }
          } else {
            item.quality = 0; 
          }
        } else {
          if (item.quality < 50) item.quality += 1;
        }
      }

      if (item.quality < 0) item.quality = 0;
      if (item.quality > 50 && item.name !== 'Sulfuras, Hand of Ragnaros') item.quality = 50;
    }

    return this.items;
  }
}
