-- My solution

SELECT la_liga_goals + copa_del_rey_goals + champions_league_goals AS res
FROM goals;

-- Top solution

SELECT (la_liga_goals + copa_del_rey_goals + champions_league_Goals) as res
  FROM goals;