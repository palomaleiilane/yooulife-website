<!DOCTYPE html>
<html lang="en">
  <head>
    <title><?php bloginfo('title') ?></title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('description') ?>"/>
    <meta property="og:url" content="<?php bloginfo('url') ?>" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="<?php bloginfo('title') ?>" />
    <meta property="og:description" content="<?php bloginfo('description') ?>" />
    <meta property="og:image" content="<?php bloginfo('template_url') ?>/dist/images/share-image.jpg" />
    <link rel="icon" href="<?php bloginfo('template_url') ?>/dist/images/favicon.png">
    <link rel="stylesheet" href="<?php bloginfo('template_url') ?>/dist/app.bundle.css">
    <!-- <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,900&display=swap" rel="stylesheet"> -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css">
    <script src="<?php bloginfo('template_url') ?>/public/js/vue-resource.js" ></script>
  </head>
  <body>
    
    <div id="app">
    </div>

    <script src="<?php bloginfo('template_url') ?>/dist/chunk-vendors.js"></script>
    <script src="<?php bloginfo('template_url') ?>/dist/app.bundle.js"></script>
  </body>
</html>
