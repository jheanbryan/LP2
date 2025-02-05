import { Database } from "sqlite3";
import db from '../config/database';

export class GenericDao<T extends { id: number }> {
    private db: Database;

    constructor() {
        this.db = db;
    };


}

export type Criteria = {
  field: string;
  op: "=" | "!=" | ">" | "<" | ">=" | "<=";
  value: string | number;
};

export class GenericDao<T extends { id: number }> {
  private db: Database;
  private tableName: string;

  constructor(db: Database, tableName: string) {
    this.db = db;
    this.tableName = tableName;
  }

  async create(entity: T): Promise<void> {
    const keys = Object.keys(entity).join(", ");
    const values = Object.values(entity)
      .map(() => "?")
      .join(", ");

    const sql = `INSERT INTO ${this.tableName} (${keys}) VALUES (${values})`;

    return new Promise((resolve, reject) => {
      this.db.run(sql, Object.values(entity), function (err) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  async read(id: number): Promise<T | null> {
    const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`;

    return new Promise((resolve, reject) => {
      this.db.get(sql, [id], (err, row) => {
        if (err) reject(err);
        else resolve(row || null);
      });
    });
  }

  async update(id: number, entity: T): Promise<void> {
    const fields = Object.keys(entity)
      .map((key) => `${key} = ?`)
      .join(", ");
    const sql = `UPDATE ${this.tableName} SET ${fields} WHERE id = ?`;

    return new Promise((resolve, reject) => {
      this.db.run(sql, [...Object.values(entity), id], function (err) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  async delete(id: number): Promise<void> {
    const sql = `DELETE FROM ${this.tableName} WHERE id = ?`;

    return new Promise((resolve, reject) => {
      this.db.run(sql, [id], function (err) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  async findAll(): Promise<T[]> {
    const sql = `SELECT * FROM ${this.tableName}`;

    return new Promise((resolve, reject) => {
      this.db.all(sql, [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

  async findByCriteria(criteria: Criteria): Promise<T[]> {
    const sql = `SELECT * FROM ${this.tableName} WHERE ${criteria.field} ${criteria.op} ?`;

    return new Promise((resolve, reject) => {
      this.db.all(sql, [criteria.value], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }
}
