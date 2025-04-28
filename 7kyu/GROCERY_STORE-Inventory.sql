-- My solution

SELECT id, name, stock
FROM products
WHERE producent = 'CompanyA'
AND stock < 3
ORDER BY id;

-- Top solution

SELECT id, name, stock 
FROM products 
WHERE stock <= 2 AND producent='CompanyA' ORDER BY id