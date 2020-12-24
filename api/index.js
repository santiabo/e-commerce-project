const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Product, Category, User } = require('./src/db');
const data = require('./data');

// Syncing all the models at once.
const PORT = 5000;
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`--------------------------------------  -WWWWWo------------------------------------------------------------------
-----------------------------------   oW#########Wo--------------------------------------------------------------
---------------------------------  -oWWWW####WW#####o------------------------------------------------------------
----------------------------   --oWWW####WWWW#WWWWWW#Wo----------------------------------------------------------
--------------------------------       -oWW#WWoWWWWWoWWW---------------------------------------------------------
----------------------------       ---    --oW#WoWWWWooWWo-------------------------------------------------------
--------------------------       ---oooooo--  -oooWWWWWoooo------------------------------------------------------
--------------------------      ---ooooooo----       -oWooo------------------------------------------------------
---------------------------     ---ooooooo------        -oo------------------------------------------------------
----------------------------   --ooooooooooo---           ---------------------ooooooooo-------------------------
---------------------------       -ooooo-oooooo-          -----------------oo-------------ooo--------------------
---------------------------        ----      ---          ---------------oo------------------oo------------------
----------------------------  -----oo------------          ------------oo-----------------------o----------------
----------------------------------oooooooooooooo--         ----------oo--------------------------oo--------------
-------------------------------ooooooooooooooooooo-                  ------------------------------oo------------
--------------------------------------oooooo-----                       ----------------------------oo-----------
----------------------------------  ---------        --                   --------------------------oo-----------
---------------------------------   ----o--------   --                     -ooWoo------oooWoo--------o-----------
-------------------------------          --------                           -ooWWo----oooooWWo-------o-----------
--------------------------------------     ------                            ooWo-----ooooooooo-----oo-----------
-----------------------------------------------------                        ooo-------ooWWoo-------oo-----------
-----------------------------o-----o-o--------------                         -----o-o-----o--------oo------------
-------------------------oooooo----o-------------                            ----oWoWWo-----------oo-------------
--------------------oooo-----ooo---        -------                           -----o-oo----------oo---------------
----------------ooooooo-o----ooo---       -------                                -----------oooo---oooo----------
-------------o-oooooo-o-oo----------        ------                              -o------o-ooo-----oWWWWoo--------
-----------o---ooooooo-------------------    -------                            -ooooWoWWoo-------ooWoo-oooo-----
------------------------------o--------o--   ----------                         ---o-oooooo-------oooo-------oo--
---------------------------oooooo--------------------------                    --ooW-oooo-o------oooo--o----ooo--
----------------------------ooooo---------------------------                  ------------o-----ooo-ooooooooo----
-------------------- --------ooo-----------------------------                --ooo-------oo--oWo-ooo-------------
--------------------     -------o---------------------------               -----ooooWWWooo--oWo-ooo--------------
--------------------      ------o---------------------------               --ooo-ooo------oo--ooo----------------
---------------------     ---------------------------------              --------o--oooooo-oooo------------------
---------------------     ---------------------------------             --------oo--ooooo-oo---------------------
---------------------     ---------------------------------            -----------oooooooooo---------------------
---------------------      --------------------------------  --       ---------oo---ooooooo-ooooo----------------
---------------------       -------------------------------   -       -oooooWWWo--------ooo- -oooooo-------------
--------------------         ------------------------------          oooooooo------------o--   --oooo------------
-----oo---------- --    --- -------------------------------          ooooo------oooo-------      -ooooooooo------
-----        ----- -            --------------------------           ----------o-o--o----         --oooooooWo----
------                  --      --------------------------            ------ooo--------           --o--oooooo----
-----oooooo--    --    ----        -----------------------            -----oooo--------            --oo--ooo-----
------oooooooooooo-    ------- --------------------------             ---ooo-oo-------             ---o--oo------
------ooooooooooo--   ----------------------------------               oooooooooo-----             ---oo--o------
🚀 Server is listening on http://localhost:${PORT}`
    );

    //Productos harcodeados cuando se levanta el servidor(descomentar para probar back)
    // Product.bulkCreate(data.products);
    User.create({
      "email": "admin@admin.com",
      "avatar": "https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png",
      "firstName": "Maggie",
      "lastName": "Simpson",
      "birthdate": "1999-12-01",
      "password": "1234",
      "isAdmin":"true"
    });
    
    Category.bulkCreate(data.categories);

    // data.categories.forEach(async c => {
    //   await Category.create({
    //     name: c.name,
    //     description: c.description,
    //   })
    // })

    data.products.forEach(async p => {
      await Product.create({
        name: p.name,
        description: p.description,
        price: p.price,
        stock: p.stock,
        images: p.images
      }).then(createdProduct => {
        createdProduct.setCategories([Math.floor(Math.random() * data.categories.length) + 1]);
      });
    });

  });
});