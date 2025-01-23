# Kirby Snipcart

## For Kirby 5 use release 0.6.0+
## For Kurby 4 use release 0.50


This plugin helps integrate Snipcart into a Kirby site. We have big plans for this one, but right now it just helps add the default cart and provides blueprints & snippets to take the mandatory data that Snipcart needs in order to work.

It is worth noting that this version is built on Vue, and adding the cart to the template also adds Vue. Therefore, if you need other interactivity (lightboxes, image sliders etc) on the site, it's not a good idea to use jQuery. Go with Vue based plugins.

Planned future features:

* Vue template overrides allowing greater customisation of the cart.
* Panel widgets showing high level info like number of sales, revenue etc.
* Full integration with the relevant parts Snipcart API.
* Reports - export stuff like the sales for the year to CSV.
* Anything else useful!

Built against Kirby 3.8.3+ and PHP 8.1+

## Install

### Download

Download and copy this repository to `/site/plugins/kirby3-snipcart`.

### Composer

```
composer require hashandsalt/kirby3-snipcart
```

****

## Commerical Usage

This plugin is free but if you use it in a commercial project please consider to
- [make a donation 🍻](https://paypal.me/hashandsalt?locale.x=en_GB) or
- [buy a Kirby license using this affiliate link](https://a.paddle.com/v2/click/1129/36141?link=1170)

****


## Usage

### Cart Snippet

Add the cart just before your closing body tag:

```
<?= snippet('cart/init') ?>
```

### Blueprint

Extend the product data blueprint into you product page blueprint:

```
sections:
  productdata:
    type: fields
  fields:
    productinfo: cart/product
```

### Add to Cart Button

Add the "Add to Cart" button to your product template:

```
<?= snippet('product/add') ?>
```

### Add Checkout Summary

Add the "Checkout" button and items in basket to your product template:

```
<?= snippet('cart/checkoutsummary') ?>
```

## Options

The cart will not work without a valid API for the cart on the front end, and you also need a secret key for the Kirby Panel to work with. These can be obtained from within the Snipcart Dashboard.

You can also choose wether or not to use the default css theme for the cart:

```
'hashandsalt.kirby-snipcart.snipcartlive' => false,

'hashandsalt.kirby-snipcart.apikeytest'   => 'XXXX',
'hashandsalt.kirby-snipcart.apikeylive'   => 'XXXX',

'hashandsalt.kirby-snipcart.apisecrettest' => 'XXXX',
'hashandsalt.kirby-snipcart.apisecretlive' => 'XXXX',



```

## Change Notes

The following config option has been depricated as it is now a an option on the Snipcart JS call. You can set it in `<?= snippet('cart/init') ?>`

```
'hashandsalt.kirby-snipcart.defaulttheme' => true,
```