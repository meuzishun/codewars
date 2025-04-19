-- My solution

SELECT *
FROM students
WHERE tuition_received = false;

-- Top solution

select *
from students
where not tuition_received;