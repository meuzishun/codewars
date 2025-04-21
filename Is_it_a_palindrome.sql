-- My solution

SELECT
  str,
  REVERSE(LOWER(str)) = LOWER(str) AS res
FROM ispalindrome;

-- Top solution

select str, reverse(lower(str)) = lower(str) as res from ispalindrome