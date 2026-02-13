export const GiftCatalog = [
  { id:"rose", name:"Сайхан цэцэг", price:10, animation:"rose.mp3" },
  { id:"lion", name:"Арслан", price:1000, animation:"lion.mp3" },
  { id:"diamond", name:"Алмаз", price:5000, animation:"diamond.mp3" }
];

export const GiftAPI = {
  async getAllGifts(){
    return GiftCatalog;
  },
  async getGift(id){
    return GiftCatalog.find(g=>g.id===id);
  }
};
