// --------------------------------------  -WWWWWo------------------------------------------------------------------
// -----------------------------------   oW#########Wo--------------------------------------------------------------
// ---------------------------------  -oWWWW####WW#####o------------------------------------------------------------
// ----------------------------   --oWWW####WWWW#WWWWWW#Wo----------------------------------------------------------
// --------------------------------       -oWW#WWoWWWWWoWWW---------------------------------------------------------
// ----------------------------       ---    --oW#WoWWWWooWWo-------------------------------------------------------
// --------------------------       ---oooooo--  -oooWWWWWoooo------------------------------------------------------
// --------------------------      ---ooooooo----       -oWooo------------------------------------------------------
// ---------------------------     ---ooooooo------        -oo------------------------------------------------------
// ----------------------------   --ooooooooooo---           ---------------------ooooooooo-------------------------
// ---------------------------       -ooooo-oooooo-          -----------------oo-------------ooo--------------------
// ---------------------------        ----      ---          ---------------oo------------------oo------------------
// ----------------------------  -----oo------------          ------------oo-----------------------o----------------
// ----------------------------------oooooooooooooo--         ----------oo--------------------------oo--------------
// -------------------------------ooooooooooooooooooo-                  ------------------------------oo------------
// --------------------------------------oooooo-----                       ----------------------------oo-----------
// ----------------------------------  ---------        --                   --------------------------oo-----------
// ---------------------------------   ----o--------   --                     -ooWoo------oooWoo--------o-----------
// -------------------------------          --------                           -ooWWo----oooooWWo-------o-----------
// --------------------------------------     ------                            ooWo-----ooooooooo-----oo-----------
// -----------------------------------------------------                        ooo-------ooWWoo-------oo-----------
// -----------------------------o-----o-o--------------                         -----o-o-----o--------oo------------
// -------------------------oooooo----o-------------                            ----oWoWWo-----------oo-------------
// --------------------oooo-----ooo---        -------                           -----o-oo----------oo---------------
// ----------------ooooooo-o----ooo---       -------                                -----------oooo---oooo----------
// -------------o-oooooo-o-oo----------        ------                              -o------o-ooo-----oWWWWoo--------
// -----------o---ooooooo-------------------    -------                            -ooooWoWWoo-------ooWoo-oooo-----
// ------------------------------o--------o--   ----------                         ---o-oooooo-------oooo-------oo--
// ---------------------------oooooo--------------------------                    --ooW-oooo-o------oooo--o----ooo--
// ----------------------------ooooo---------------------------                  ------------o-----ooo-ooooooooo----
// -------------------- --------ooo-----------------------------                --ooo-------oo--oWo-ooo-------------
// --------------------     -------o---------------------------               -----ooooWWWooo--oWo-ooo--------------
// --------------------      ------o---------------------------               --ooo-ooo------oo--ooo----------------
// ---------------------     ---------------------------------              --------o--oooooo-oooo------------------
// ---------------------     ---------------------------------             --------oo--ooooo-oo---------------------
// ---------------------     ---------------------------------            -----------oooooooooo---------------------
// ---------------------      --------------------------------  --       ---------oo---ooooooo-ooooo----------------
// ---------------------       -------------------------------   -       -oooooWWWo--------ooo- -oooooo-------------
// --------------------         ------------------------------          oooooooo------------o--   --oooo------------
// -----oo---------- --    --- -------------------------------          ooooo------oooo-------      -ooooooooo------
// -----        ----- -            --------------------------           ----------o-o--o----         --oooooooWo----
// ------                  --      --------------------------            ------ooo--------           --o--oooooo----
// -----oooooo--    --    ----        -----------------------            -----oooo--------            --oo--ooo-----
// ------oooooooooooo-    ------- --------------------------             ---ooo-oo-------             ---o--oo------
// ------ooooooooooo--   ----------------------------------               oooooooooo-----             ---oo--o------
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Product, Category } = require('./src/db');


// Syncing all the models at once.
const PORT = 5000;
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log('🚀 Server is listening on port ' + PORT); // eslint-disable-line no-console

    //Productos harcodeados cuando se levanta el servidor(descomentar para probar back)
    /* Product.bulkCreate([{
      name: 'prueba1',
      description: 'adsdfaskjfhalsfalsfhaoshf',
      price: 5.99,
      stock: 6,
      img: 'https//imagen.com'
    },
    {
      name: 'prueba2',
      description: 'jaldfhalsnclie',
      price: 8.99,
      stock: 1,
      img: 'https//imagen2.com'
    }
    ])
    Category.bulkCreate([{
      name: 'coolers',
      description:'asfuohaslfhalsdfhaoiehf'
    },{
      name: 'mother',
      description:'asifbasfcaieuhfaebciabefae'
    }]) */

  });
});
