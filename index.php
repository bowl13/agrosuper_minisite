<?php include("header.php"); ?>

    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <div class="load"></div>

        <div id="wrap">

            <div class="container-fluid">

                <?php include("menu.php"); ?>

            </div> <!-- /container -->
            

            <!--controles video-->
            <div class="controls">

                <div class="tubular-play">

                    <img src="img/bg_all.jpg"/>

                </div>
                <div class="tubular-pause"></div>

            </div>

            <div id="push"></div>

        </div>
        
        <footer class="footer-fix container-fluid text-center">
            
            <div class="row-fluid">

                <div class="span12">&copy; 2013 Agrosuper. All rights reserved. | Camino la Estrella Nº 401, of. 7, Sector Punta de Cortes, | Rancagua. Región del Libertador General Bernardo O'Higgins, Chile.</div>

            </div>
                
        </footer>

        <!--bg video-->

        <div id="cont_video"></div>

		<?php include("script.php"); ?>

    </body>
</html>
