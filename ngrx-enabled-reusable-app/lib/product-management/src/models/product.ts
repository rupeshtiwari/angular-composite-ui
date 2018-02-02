export class Product {
    constructor(
        public id: string,
        public name: string) {
    }
}

export function generateMockProduct(): Product {
    return new Product('2', 'Apple');
}
