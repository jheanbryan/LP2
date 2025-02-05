import { GenericDao } from '../DAO/GenericDao';
import { User } from '../models/User';
import db from '../config/database';

const userDao = new GenericDao<User>();

describe('Testes do GenericDAO', () => {
    beforeAll(async () => {
        await userDao.create({ id: 1, name: "Teste", email: "teste@email.com", address: "Rua X", age: 25 });
    });

    test('Deve inserir um usuário no banco de dados', async () => {
        const user = await userDao.read(1);
        expect(user).not.toBeNull();
        expect(user?.name).toBe("Teste");
    });

    test('Deve retornar null ao buscar um ID inexistente', async () => {
        const user = await userDao.read(999);
        expect(user).toBeNull();
    });

});
