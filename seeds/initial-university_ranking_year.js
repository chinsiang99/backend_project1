/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('university_ranking_year').del()
  // await knex('university_ranking_year').insert([
  //   { id: 1, colName: 'rowValue1' },
  //   { id: 2, colName: 'rowValue2' },
  //   { id: 3, colName: 'rowValue3' }
  // ]);
  return knex.raw(
    `
   insert into university_ranking_year (world_rank, university_id, country_id, national_rank, quality_of_education, score, ranking_year)
   values (1, 1, 1, 1, 7, 100, 2012), (2, 2, 1, 2, 9, 91.67, 2012), (3, 3, 1, 3, 17, 89.5, 2012), (4, 4, 2, 1, 10, 86.17, 2012), (5, 5, 1, 4, 2, 85.21, 2012), (6, 6, 1, 5, 8, 82.5, 2012), (7, 7, 2, 2, 13, 82.34, 2012), (8, 8, 1, 6, 14, 79.14, 2012), (9, 9, 1, 7, 23, 78.86, 2012), (10, 10, 1, 8, 16, 78.55, 2012), (11, 11, 1, 9, 15, 73.82, 2012), (12, 12, 1, 10, 21, 73.69, 2012), (13, 13, 1, 11, 31, 73.64, 2012), (14, 14, 3, 1, 32, 69.49, 2012), (15, 15, 1, 12, 34, 66.94, 2012), (16, 16, 4, 1, 26, 66.69, 2012), (17, 17, 3, 2, 42, 65.76, 2012), (18, 18, 5, 1, 4, 65.09, 2012), (19, 19, 1, 13, 62, 64.05, 2012), (20, 20, 1, 14, 61, 63.11, 2012)
   ;
   `
  );
};
