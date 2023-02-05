

// 23-6: Find the cheapest phone from an array of phone objects

const phones = [
     {names: 'Oppo', camera : 10, storage: '34' , price: 35898, color : 'black'},
     {names: 'Nokia', camera : 10, storage: '34' , price: 95898, color : 'black'},
     {names: 'Iphone', camera : 10, storage: '34' , price: 15898, color : 'black'},
     {names: 'Sumsung', camera : 10, storage: '34' , price: 675898, color : 'black'},
     {names: 'Walton', camera : 10, storage: '34' , price: 378898, color : 'black'},

];

function cheapestPhone(phones){
    let cheapest = phones[0];

    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        
        if(phone.price < cheapest.price){
            cheapest = phone;
        }

    }

    return cheapest;

}
const mySelection = cheapestPhone(phones);
console.log("It's Low Budget Phone For Yours = ",mySelection);
