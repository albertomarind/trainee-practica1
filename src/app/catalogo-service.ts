
export interface CatalogoService<E> {
    findById?(id: number): E;
    save(): E;
    findAll(): E[];
}
