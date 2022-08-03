import { Injectable } from "@angular/core";


export interface Product {
    name : string,
    desc : string
}

@Injectable({
    providedIn : 'root'
})
export class ProductsService{
    
    list : Array<Product> = [
        { name : 'Pen', desc : 'Nisi cillum commodo velit deserunt commodo incididunt eu sunt. Cillum eu cillum aute consectetur qui voluptate incididunt ea et commodo veniam dolor sunt. Deserunt incididunt aliquip labore officia aliqua nulla consequat do. Elit velit ad irure Lorem elit amet cillum. Cupidatat eiusmod quis adipisicing dolor sint incididunt sunt dolore qui.'}, 
        { name : 'Pencil', desc : 'Occaecat id minim exercitation officia enim enim ullamco sunt nulla ullamco id non dolor consectetur. Et duis excepteur do laboris duis proident tempor ullamco mollit occaecat incididunt sint id. Ullamco eiusmod dolor nisi voluptate.'} , 
        { name : 'Marker', desc : 'Irure officia ad cupidatat id aliquip incididunt enim mollit ea dolor. Reprehenderit dolore aliqua aliqua duis quis consectetur eiusmod ea. Veniam nisi amet ut ex reprehenderit tempor labore deserunt incididunt consequat ut aute nostrud pariatur. Laboris non ullamco enim culpa dolor voluptate. Irure exercitation non incididunt commodo exercitation aliqua culpa ad occaecat cillum Lorem eiusmod tempor. Commodo deserunt laboris velit do ipsum culpa ea. Ut sit Lorem Lorem sint ut irure dolor aute laborum.'}
    ];

    addNew(newProductName : string){
        this.list.push({ name : newProductName, desc : 'Nulla magna excepteur mollit minim ullamco eiusmod dolor excepteur labore laborum. Fugiat aliqua ea adipisicing qui sit sint quis tempor aute ut. Veniam ex nisi enim nulla. Laboris officia duis aute ad commodo sit.'})
    }

    remove(productToRemove : Product){
        this.list.splice(this.list.indexOf(productToRemove), 1)
    }
}