-- My solution

SELECT id, name, birthday, LOWER(race) AS race
FROM demographics;

-- Top solution

SELECT id, name, birthday, LOWER(race) as race FROM demographics;