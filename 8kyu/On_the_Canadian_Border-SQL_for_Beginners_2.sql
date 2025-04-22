-- My solution

SELECT *
FROM travelers
WHERE country
NOT IN ('USA', 'Mexico', 'Canada');

-- Top solution

Select name,country from travelers where country not in ('Canada','Mexico','USA')