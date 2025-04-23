-- My solution

SELECT
  id,
  name,
  (STRING_TO_ARRAY(characteristics, ', '))[1] AS characteristic
FROM monsters
ORDER BY id;

-- Top solution

SELECT id,
       name, 
       split_part(characteristics, ',', 1) as characteristic
  FROM monsters
ORDER BY id