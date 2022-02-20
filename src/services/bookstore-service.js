export default class BookstoreService {
    data = [{
        id:1,
        author:"Susan J. Fowler",
        title:"Production-Ready Microservices",
        price:32,
        coverImage:"https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"
    },
    {
        id:2,
        author:"Michael T. Nygard  ",
        title:"Release It!",
        price:75,
        coverImage:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"
    },
    {
        id:3,
        author:"Michael T. Nygard  ",
        title:"Zalupa=)",
        price:75,
        coverImage:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"
    },
    {
        id:4,
        author:"Michael T. Nygard  ",
        title:"xuy!",
        price:75,
        coverImage:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"
    }];
    getBooks(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if (Math.random() < 0.75){
                    resolve(this.data)
                }else{
                    reject(new Error("Oshibka sory"))
                }
        },700)
        });
    }

};