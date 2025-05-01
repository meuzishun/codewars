-- My solution

SELECT people.id, people.name, COUNT(*) AS toy_count
FROM people
JOIN toys
ON people.id = toys.people_id
GROUP BY people.id;

-- Top solution

SELECT p.*, COUNT(t) AS toy_count
FROM people p
JOIN toys t
  ON t.people_id = p.id
GROUP BY p.id