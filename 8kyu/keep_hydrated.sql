-- My solution

SELECT id, hours, FLOOR(hours * 0.5) AS liters FROM cycling

-- Top solution

SELECT *, floor(hours / 2) as liters FROM cycling
