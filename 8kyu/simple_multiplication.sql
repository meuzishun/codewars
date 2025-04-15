SELECT
  number,
  number * (
    CASE
      WHEN number % 2 = 0
      THEN 8
      ELSE 9
    END
  ) AS res
  FROM multiplication;