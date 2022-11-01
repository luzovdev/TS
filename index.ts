// типы 

// let a = 2;
// let b = 'hello';
// a = 'bla';


// let arr : string[] = [];
// arr[0] = 2;
// let arr : Array<string> = [];
// let arr : string[] = [];
// let arr : [string , boolean?, number?] = ['Hello world',true,3]; // картеж

// arr.push('asdasdasd')
// arr.push(2)
// arr.push(null)

// const person = {
//     name: "John",
//     age:23,
// }

// const person : {
//     name : string;
//     age : number;
//     city? : string;
// } = {
//     name: "John",
//     age:23
// }

// person.age = 23;
// person.city = "asd";



// enum Blabla { 
//     banner,
//     adminka,
//     premium,
// }

// const a = Blabla.adminka;
// let b : Blabla = Blabla.premium;
// console.log(a);

// const a = Blabla[0];
// let b : Blabla = Blabla.premium;
// console.log(a);


// enum Blabla { 
//         banner = 8,
//         adminka,
//         premium,
// }
// let a = Blabla.adminka;
// console.log(a);


// enum Blabla { 
//         banner = 'asd',
//         adminka,
//         premium,
// }
// let a = Blabla.adminka;
// console.log(a);



// enum Blabla { 
//     banner,
//     adminka,
//     premium,
// }

// let a = Blabla.banner;

// if ( a === Blabla.banner) { 
//     console.log('show banner');
// }





// let a: any = 2;
// a = 'fsdfa';
// a.toUpperCase();

// let b: unknown = 4;
// b = 'fdsfa';
// if(typeof b === 'string') {
//     b.toUpperCase();
// }


// type Person = {
//     name : string;
//     age : number;
//     city?: string;
// }

// Union Type
// let  id : number | string | boolean = '123';
// id = 123321;

// const person : Person =  {
//     name : "John",
//     age : 23,
// };

// const person2 : Person = { 
//     name: 'Valerchik',
//     age: 22
// }


// Union Type
// type Person = {
//         name : string;
//         age : number;
//         city?: string;
// }
    
// type Admin = {
//     puzo : boolean;
//     beerLitres : number;
// }

// let person: Person | Admin = { 
//     puzo : false,
//     beerLitres : 20,
//     age: 23
// }


// type Person = {
//         name : string;
//         age : number;
//         city?: string;
// }

// type Admin = {
//     puzo : boolean;
//     age : string;
//     beerLitres : number;
// };

// let p1 : Admin & Person = {
//     puzo : true,
//     beerLitres : 2,
//     name : 'adad',
//     age : 23
// };

// err
// let a : string & number = 2;


// let state : 'loading' | 'error' | 'success' = 'error';
// state = 'error'




// function foo (a: number, b : number) {
//     return a + b 
// }; 

// const res = foo(2,3);

// function foo (a: number, b : number) : string {
//         return a + b 
// }; 
    
// type Foo = (a:number , b: number)  => string;

// const foo : Foo = function (a:number , b:string) : string {
//      return a + b
// }


// const res = foo(2,'string');


// type Foo = (a: Person, b: [string]) => string;
// const foo : Foo = function(a:Person, b:[string]) : string {
//     return a.name + b[0]
// };

// const p1 : Person = {
//     name : 'sads',
//     age: 23
// };

// const res = foo(p1, ['asdads'])

// const smth =  {
//     name : 'sads',
//     age: 23
// };
// const res2 = foo(smth, ['asdads'])


// void - функция без return
// type Foo = (a: Person, b: [string]) => string;
// const foo : Foo = function(a:Person, b:[string]) : void {
//  a.name + b[0]
// };

// type FooNever = () => never;
// const foo : FooNever = () => {
//     for (;;) {
//         console.log(i);
//     }
// }






// type Person = {
//         name:String;
//         age: number;
// };

// type Admin = {
//         pass: string;
//         isBoroda: boolean;
// };

// type PersonAdmin = Person & Admin;

// const obj = PersonAdmin = {

// };
    


interface IPerson {
        name:string;
        age:number;
}

interface IAdmin {
        pass: string;
        isBoroda: boolean;
        run(destination:string, speed: number) : void;
}
interface IAdmin {
        city: string;
}
// interface IPersonAdmin extends IPerson, IAdmin {
//         city: string;
// }

const obj : IAdmin = {
        pass : 'valerchik',
        isBoroda:true,
        city: 'Gomel',
        run(destination,speed) {
                console.log(`${this.pass} runs to ${destination}`);   
        }
};
