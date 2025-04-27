-- My solution

SELECT
  CASE
    WHEN SUM(number1) % 2 = 1
    THEN MIN(number1)
    ELSE MAX(number1)
  END AS number1,
  CASE
    WHEN SUM(number2) % 2 = 1
    THEN MIN(number2)
    ELSE MAX(number2)
  END AS number2
FROM numbers;

-- Top solution

select 
  case when sum(number1)%2=1 then min(number1) else max(number1) end as number1, 
  case when sum(number2)%2=1 then min(number2) else max(number2) end as number2
  from numbers