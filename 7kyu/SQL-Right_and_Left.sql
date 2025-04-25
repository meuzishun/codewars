-- My solution

SELECT
  LEFT(project, commits) AS project,
  RIGHT(address, contributors) AS address
FROM repositories;

-- Top solution

select left(project, commits) as project, right(address, contributors) as address from repositories