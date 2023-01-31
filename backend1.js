class Producto{    
    constructor(title,description,price,thumbnail,code,stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}


class ProductManager{
    constructor(){
        this.products = [];
    }    
    addProduct(newProduct){          
        if ( toString(newProduct.id).length>0 && newProduct.title.length>0 && newProduct.description.length>0 && toString(newProduct.price).length>0 && newProduct.thumbnail.length>0 && newProduct.code.length>0 && toString(newProduct.stock).length>0){

            if (this.products.filter(product=> product.code==newProduct.code).length > 0)
            {
                console.error("Ya existe el producto");
            }
            else 
            {
                const idAutoincremental = ProductManager.idAutomatico()
                this.products.push({id: idAutoincremental,...newProduct});
            }        
        }else{
            console.error("Debe tener todos los campos completos para agregarlo")
        }
    }
    getProductos(){
        return this.products;
    }
    getProductById(id){

        if (this.products.find(product => product.id == id)!=undefined){
            return this.products.find(product => product.id == id)
        }else{
            return "Product Not found";
        }
    }

    static idAutomatico() {
        if (!this.idAnterior) {
        this.idAnterior = 1
        }
        else {
        his.idAnterior++
        }
        return this.idAnterior
        }

}


const producto1=new Producto("Ryzen Threadripper 3990x","Procesador Gaming gama alta",490000,"https://firebasestorage.googleapis.com/v0/b/ecommercereact2022.appspot.com/o/threadripper3990x.jpg?alt=media&token=e6389599-5247-4468-9e95-725d61d7f34e","aaaa",23);
const producto2=new Producto("Z590 Ultra","Motherboard Gama Alta",82000,"https://firebasestorage.googleapis.com/v0/b/ecommercereact2022.appspot.com/o/aorusZ590ULTRA.jpg?alt=media&token=932f4071-ace9-40fb-8f04-c85adf8bf82c","aaab",256);
const producto3=new Producto("Zenith II Alpha","Motherboard Gama Alta",1000000,"https://firebasestorage.googleapis.com/v0/b/ecommercereact2022.appspot.com/o/ROGthreadripper.jpg?alt=media&token=bfa7fdda-23a5-4c84-92c5-e33dbb3ac93a","aaac",56);
const producto4=new Producto("Rx 5500 xt ASUS","Grafica Gama Media Alta",100000,"https://firebasestorage.googleapis.com/v0/b/ecommercereact2022.appspot.com/o/rx5500xt.jpg?alt=media&token=f28c7534-425f-497f-b90e-911baea8b560","aaad",32);
const producto5=new Producto("I7 4790","Procesador Gama Media",82000,"https://firebasestorage.googleapis.com/v0/b/ecommercereact2022.appspot.com/o/i7_4790.jpg?alt=media&token=9180a992-2129-4ce9-b89e-08c8fdfcc7ac","aaae",22);
const productoVacio=new Producto("","","","","","");
const productoPrueba=new Producto("producto prueba","Este es un producto prueba",200,"Sin Imagen","abc123",25);


productMaganer=new ProductManager()

console.log(productMaganer.getProductos())

productMaganer.addProduct(producto1);
productMaganer.addProduct(producto2);
productMaganer.addProduct(producto3);
productMaganer.addProduct(producto4);
productMaganer.addProduct(producto5);

productMaganer.addProduct(productoVacio);

productMaganer.addProduct(productoPrueba);

console.log(productMaganer.getProductos())

productMaganer.addProduct(productoPrueba);

console.log(productMaganer.getProductById(3)); 
console.log(productMaganer.getProductById(654966));