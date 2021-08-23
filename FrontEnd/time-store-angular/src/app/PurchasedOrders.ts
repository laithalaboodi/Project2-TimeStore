export interface PurchsedOrder{
    orderId: Number ;
    orderholder:{
        id: Number,
        first:String,
        last: String,
        email:String,
        pass:String,
    };
    watchorderholder:{

        watchid: Number,
        brand: String,
        price:Number,
        discription: String,
        picName:String

    };
    
    
    
    
    }