-- My solution

SELECT
  number,
  CASE
    WHEN number % 2 = 0
    THEN 'Even'
    ELSE 'Odd'
  END AS is_even
FROM numbers;

-- Top solution

--Write your SQL statement here--

-- SELECT Number and use CASE WHEN (condition) THEN RETURN
-- Condition : (number % 2) = 0 Then 'Even'
-- Else number does not return 0 = 'Odd' END AS is_even to create new column
-- From table 'numbers'

SELECT number, 
CASE WHEN (number % 2) = 0 THEN 'Even'
ELSE 'Odd' END AS is_even
FROM numbers;