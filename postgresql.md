# PostgreSQL

SQL - structured query language, domain-specific language

Relational database - tables

Postgres / PostgreSQL - in the SQL family, 1986

13.3 of Postgres, as of mid-May 2021

PGAdmin
- Opened PGAdmin from the dock/spotlight search
- Passwords will be your computer password
- Menu on the left hand side, servers => databases, country database
- Tools => query tool

Most generic query:
SELECT * FROM country;
- Play icon in PGAdmin

Can select particular headers:
SELECT name, continent FROM country;

Hard cap on the number of items
SELECT population, name, continent
FROM country
LIMIT 10;

Conditional statement
SELECT population, name, continent
FROM country
WHERE continent = 'North America';

Logical Negation
SELECT population, name, continent
FROM country
WHERE continent != 'North America';

SELECT population, name, continent
FROM country
WHERE population < 1000000

SELECT population, name, continent
FROM country
WHERE population < 1e6

Logical AND and logical OR
SELECT population, name, continent
FROM country
WHERE population < 1e6
AND continent = 'North America'

LIKE/Wildcard operator
SELECT population, name, continent
FROM country
WHERE continent LIKE '%America'


SELECT name, region, indepyear
FROM country
WHERE indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 10

10 countries with the most recent indepyear whose head of state is Queen Elisabeth:
SELECT name, region, indepyear, headofstate
FROM country
WHERE headofstate LIKE '%Elisabeth%'
AND indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 10

Creating an alias column that we can define and interact with within the scope of this query
SELECT name, population, surfacearea, population/surfacearea AS density
FROM country
ORDER BY density DESC


Single country with the smallest population from the 10 largest countries by surfacearea
Create an alias table, define the alias table, then query from it
WITH largest_countries AS (SELECT name, surfacearea, population
FROM country
ORDER BY surfacearea DESC
LIMIT 10)
SELECT * FROM largest_countries
ORDER BY population
LIMIT 1


Aggregate Queries - set of functions, collect info and create a column with the output

SELECT MAX(population)
FROM country;

SELECT MIN(population)
FROM country;

SELECT SUM(population)
FROM country;

SELECT AVG(population)
FROM country;

SELECT region, COUNT(name)
FROM country
WHERE region = 'South America'
GROUP BY region

The total population from each region:
SELECT region, SUM(population)
FROM country
GROUP BY region




What are the 15 countries with the highest life expectancy?

View counties that are 'like' a republic and have an independence year after 1945.

SELECT name, indepyear, governmentform
FROM country
WHERE governmentform LIKE '%Republic%'
AND indepyear > 1945

Of the smallest 10 countries by population,
which has the biggest surfacearea?

WITH smallest_ten AS (SELECT name, population, surfacearea
FROM country
WHERE population > 0
ORDER BY population
LIMIT 10)
SELECT *
FROM smallest_ten
ORDER BY surfacearea DESC
LIMIT 1
