/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('country').del()
  // await knex('country').insert([
  //   { id: 1, colName: 'rowValue1' },
  //   { id: 2, colName: 'rowValue2' },
  //   { id: 3, colName: 'rowValue3' }
  // ]);
  return knex.raw(
    `
 insert into country (country_name)
 values ("USA"), ("United Kingdom"), ("Japan"), ("Switzerland"), ("Israel")
 as new_data
 on duplicate key update
 country_name=new_data.country_name;
 `
  );
};
