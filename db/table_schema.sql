create table janepractice(
id serial primary key,
item_name text,
img text,
price decimal,
likes integer
)

insert into janepractice (item_name, img, price, likes)
values
('pikachu', 'https://i.pinimg.com/originals/fc/19/6c/fc196c7d3ff32c4a7ebdfcbe27fdcb71.jpg', 25.99, 0),
('squirtle', 'https://i.pinimg.com/236x/83/7a/3c/837a3cbe684a99c7427b6dafc1206369--pokemon-funny-stuff.jpg', 45.99, 0),
('raichu', 'https://img.pokemondb.net/artwork/large/raichu-alolan.jpg', 35.99, 0),
('charmander', 'https://i.chzbgr.com/full/3533775616/h08930091/', 42.00, 0),
('marill', 'http://i.imgur.com/EwcqVZH.jpg', 65.00, 0);

select * from janepractice;