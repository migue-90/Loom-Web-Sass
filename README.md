# Pattern Template 7-1 Lite version with Split Media

An extraordinarily neat architecture that any Web Designer can understand at a glance. Structure with the help of SASS and media queries.

## SASS

``` txt
sass/                    
|
|– mobile/             
|   |– _header.sass          
|   |– _footer.sass                       
|   |– pages/                
|   |   |– _home.sass        
|   |   |– _contact.sass     
|   |   ... 
|– desktop/             
|   |– _header.sass          
|   |– _footer.sass                       
|   |– pages/                
|   |   |– _home.sass        
|   |   |– _contact.sass     
|   |   ... 
|– _base.sass                    
|– _mixins.sass          
|– _typography.sass      
|– _variables.sass                          
|– vendors/              
|   |– _normalize.sass       
|   |– _owl-carousel.sass
|   ...                  
`– mobile.sass      
`– desktop.sass  
```

## HTML

```html

<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>Split media</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">
        <link href="css/mobile.css" rel="stylesheet" media="all and (max-width: 600px)">
        <link href="css/desktop.css" rel="stylesheet" media="all and (min-width: 600px)">
    </head>
    <body>
        <h1>Gravida arcu ac tortor.</h1>
    </body>
</html>
```


# Compile SASS.

## Install

``` bash
yarn global add node-sass
```

## Run

``` bash
node-sass --output-style compressed sass/mobile.sass css/mobile.css
node-sass --output-style compressed sass/desktop.sass css/desktop.css
```

## Other variants

- [Pattern 7-1 with Split media](https://github.com/tanrax/pattern-7-1-with-split-media): The best, highly recommended ❤️)
- [Pattern 7-1](https://github.com/tanrax/pattern-7-1): Standard. **Not responsive design**.
- [Pattern 7-1 Lite with Split media](https://github.com/tanrax/pattern-7-1-lite-with-split-media): Simplified version for students or very small web sites.
- [Pattern 7-1 Lite](https://github.com/tanrax/pattern-7-1-lite): Simplified version for students or very small web sites. **Not responsive design**.
