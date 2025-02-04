​import { Database } from 'sqlite3';

export class GenericDao<T> {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    };

    create(entity: T): Promise<void> {
        //Insere um novo registro na tabela
    };

    read(id: number): Promise<T | null> {
        //Retorna um registro baseado no ID fornecido.  
    };

    update(id: number, entity: T): Promise<void>{
        //Atualiza um registro existente
    };

    delete(id: number): Promise<void>: {
        //Remove um registro pelo ID
    };

    findAll(): Promise<T[]>: {
        //Retorna todos os registros da tabela.
    };

    findByCriteria(criteria: Criteria): Promise<T[]> {
        //Retorna todos os registros da tabela os quais obedeçam ao critério passado
    };
}