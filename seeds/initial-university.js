/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('university').del()
  // await knex('university').insert([
  //   { id: 1, colName: 'rowValue1' },
  //   { id: 2, colName: 'rowValue2' },
  //   { id: 3, colName: 'rowValue3' }
  // ]);
  return knex.raw(
    `
   insert into university (university_name, country)
   values ("Harvard University", 1), ("Massachusetts Institute of Technology", 1), ("Stanford University", 1), ("University of Cambridge", 2), ("California Institute of Technology", 1), ("Princeton University", 1), ("University of Oxford", 2), ("Yale University", 1), ("Columbia University", 1), ("University of California, Berkeley", 1), ("University of Chicago", 1), ("Cornell University", 1), ("University of Pennsylvania", 1), ("University of Tokyo", 3), ("Johns Hopkins University", 1), ("Swiss Federal Institute of Technology in Zurich", 4), ("Kyoto University", 3), ("Weizmann Institute of Science", 5), ("University of California, Los Angeles", 1), ("University of California, San Diego", 1)
   ;
   `
  );
};
